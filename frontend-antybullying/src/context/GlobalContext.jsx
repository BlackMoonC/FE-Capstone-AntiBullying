import { Outlet, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = () => {
  const token = Cookies.get("token");
  const role = Cookies.get("roleUser");
  const navigate = useNavigate();

  const [fetchStatus, setFetchStatus] = useState(true);
  const [inputLogin, setInputLogin] = useState({
    nomorInduk: "",
    kataSandi: "",
  });
  const [profileUser, setProfileUser] = useState({
    role: "",
    nomorInduk: "",
    nama: "",
    TTL: "",
    alamat: "",
  });
  const [myReports, setMyReports] = useState(null);
  const [sendReport, setSendReport] = useState({
    nomorIndukPelaku: "",
    waktuKejadian: "",
    lokasiKejadian: "",
    deskripsiKejadian: "",
  });
  const [dataStudent, setDataStudent] = useState(null);
  const [listNameStudent, setListNameStudent] = useState(null);
  const [detailDataStudent, setDetailDataStudent] = useState(null);
  const [listAllReport, setListAllReport] = useState(null);
  const [detailReport, setDetailReport] = useState(null);
  const [updateStatusReport, setUpdateStatusReport] = useState({
    id: "",
    status: "",
  });

  const fetchData = async () => {
    if (token) {
      await axios
        .get("https://antibullying-test.fly.dev/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const { nomorInduk, nama, tempatTanggalLahir, alamat } =
            res.data.data;
          setProfileUser({
            ...profileUser,
            nomorInduk: nomorInduk,
            nama: nama,
            TTL: tempatTanggalLahir,
            alamat: alamat,
          });
        });

      if (role === "student") {
        //Send report from dashboard student
        await axios
          .get("https://antibullying-test.fly.dev/api/reports/mine", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setMyReports([...res.data.data]);
          });

        //Get all List Name of Student.
        await axios
          .get("https://antibullying-test.fly.dev/api/students", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setListNameStudent([...res.data.data]);
          });
      }

      if (role === "teacher") {
        //Get all data student.
        await axios
          .get("https://antibullying-test.fly.dev/api/students", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setDataStudent([...res.data.data]);
          });

        //Get all data report that sending by student.
        await axios
          .get("https://antibullying-test.fly.dev/api/reports", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setListAllReport([...res.data.data]);
            // console.log(listAllReport);
          });
      }
    }
  };

  useEffect(() => {
    if (fetchStatus) {
      fetchData();
      if (token) {
        Cookies.get("roleUser") == "student"
          ? navigate("student/status-report")
          : navigate("teacher");
      }
    }

    setFetchStatus(false);
  }, [fetchStatus, setFetchStatus]);

  const getDetailDataStudent = (nomorInduk, move) => async () => {
    await axios
      .get(`https://antibullying-test.fly.dev/api/students/${nomorInduk}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // console.log(res.data.data);
        setDetailDataStudent({ ...res.data.data });
      });
    if (move === true) {
      navigate("/teacher/Input-Surat-Peringatan");
    }
  };

  const getDetailReport = (id) => async () => {
    await axios
      .get(`https://antibullying-test.fly.dev/api/reports/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // console.log(res.data.data);
        setUpdateStatusReport({...updateStatusReport, id:id});
        setDetailReport({ ...res.data.data });
      });
  };

  const handleUpdateStatusReport = async (event) => {
    let { id, status } = updateStatusReport;
    try {
      event.preventDefault();
      // Update status report
      await axios
        .patch(
          `https://antibullying-test.fly.dev/api/reports/${id}/status`,
          { status },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => {
          console.log("Laporan berhasil diupdate");
          setDetailReport(null);
        });
    } catch (e) {
      console.log(e);
    }
  };

  //Send Report by Student via Dashboard Student
  const handleSubmitSendReport = async (event) => {
    let { nomorIndukPelaku, waktuKejadian, lokasiKejadian, deskripsiKejadian } =
      sendReport;
    try {
      event.preventDefault();
      // console.log(sendReport);
      await axios
        .post(
          "https://antibullying-test.fly.dev/api/reports",
          {
            nomorIndukPelaku,
            waktuKejadian,
            lokasiKejadian,
            deskripsiKejadian,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          console.log(res.data.pesan);
          setSendReport({
            waktuKejadian: "",
            lokasiKejadian: "",
            deskripsiKejadian: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
      // setFetchStatus(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleAPIChangePassword = async (form) => {
    const {currentPassword, newPassword, confirmPassword} = form;
    const token = Cookies.get("token");
    console.log(currentPassword);
    await axios.post("https://antibullying-test.fly.dev/api/users/change-password",
    {
      kataSandiLama: currentPassword,
      kataSandiBaru: newPassword,
      konfirmasiKataSandi: confirmPassword
    }
    ,{
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res.data.pesan)
    }).catch((err) => {
      console.log(err.message);
      // return(err.data.pesan);
    });
  }

  const getToken = async (nomorInduk, kataSandi, role) => {
    const result = (
      await axios.post(`https://antibullying-test.fly.dev/api/auth/login`, {
        nomorInduk,
        kataSandi,
      })
    ).data;
    console.log(result.pesan);
    Cookies.set("roleUser", role, { expires: 1 });
    Cookies.set("token", result.token, { expires: 1 });
    setFetchStatus(true);
  };

  const handleSubmitLogin = async (event) => {
    let { nomorInduk, kataSandi } = inputLogin;
    let { role } = profileUser;
    try {
      event.preventDefault();
      if (inputLogin.nomorInduk.length == 10 && profileUser.role == "student") {
        getToken(nomorInduk, kataSandi, role);
        console.log("tester");
        return navigate("/student/status-report");
      } else if (
        inputLogin.nomorInduk.length == 18 &&
        profileUser.role == "teacher"
      ) {
        getToken(nomorInduk, kataSandi, role);
        return navigate("/teacher");
      } else {
        alert("Login failled. Input is Invalid.");
        logout();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const clearData = () => {
    setProfileUser({
      ...profileUser,
      role: "",
      nomorInduk: "",
      nama: "",
      TTL: "",
      alamat: "",
    });
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("roleUser");
    clearData();
    return profileUser.role == "student"
      ? navigate("/student/login")
      : navigate("/teacher/login");
  };

  let handleState = {
    inputLogin,
    setInputLogin,
    profileUser,
    setProfileUser,
    myReports,
    setMyReports,
    sendReport,
    setSendReport,
    dataStudent,
    setDataStudent,
    detailDataStudent,
    setDetailDataStudent,
    listNameStudent,
    setListNameStudent,
    listAllReport,
    setListAllReport,
    detailReport,
    setDetailReport,
    updateStatusReport,
    setUpdateStatusReport,
  };

  let handleFunction = {
    handleAPIChangePassword,
    handleSubmitLogin,
    handleSubmitSendReport,
    getDetailDataStudent,
    getDetailReport,
    handleUpdateStatusReport,
    logout,
  };

  return (
    <GlobalContext.Provider value={{ handleState, handleFunction }}>
      <Outlet />
    </GlobalContext.Provider>
  );
};
