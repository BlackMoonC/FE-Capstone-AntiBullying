import { Outlet, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const Toast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const BASE_URL = "https://antibullying-test.fly.dev";
// const BASE_URL = "https://antibullying.fly.dev";

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
  const [reportDiciplinary, setReportDiciplinary] = useState(null);
  const [dataStudent, setDataStudent] = useState(null);
  const [listNameStudent, setListNameStudent] = useState(null);
  const [detailDataStudent, setDetailDataStudent] = useState(null);
  const [diciplinaryStudent, setDiciplinaryStudent] = useState(null);
  const [listAllReport, setListAllReport] = useState(null);
  const [detailReport, setDetailReport] = useState(null);
  const [updateStatusReport, setUpdateStatusReport] = useState({
    id: "",
    status: "",
  });

  const fetchData = async () => {
    if (token) {
      await axios
        .get(`${BASE_URL}/api/users/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const { nomorInduk, waliKelas, nama, tempatTanggalLahir, alamat } =
            res.data.data;
          setProfileUser({
            ...profileUser,
            waliKelas: waliKelas,
            nomorInduk: nomorInduk,
            nama: nama,
            TTL: tempatTanggalLahir,
            alamat: alamat,
          });
        });

      if (role === "student") {
        //Send report from dashboard student
        await axios
          .get(`${BASE_URL}/api/reports/mine`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setMyReports([...res.data.data]);
          });

        //Get all List Name of Student.
        await axios
          .get(`${BASE_URL}/api/students`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setListNameStudent([...res.data.data]);
          });

        //Get report diciplinary of Student.
        await axios
          .get(`${BASE_URL}/api/actions/mine`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setReportDiciplinary([...res.data.data]);
            console.log(reportDiciplinary);
          });
      }

      if (role === "teacher") {
        //Get all data student.
        await axios
          .get(`${BASE_URL}/api/students`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setDataStudent([...res.data.data]);
          });

        //Get all data report that sending by student.
        await axios
          .get(`${BASE_URL}/api/reports`, {
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
      //Bagian dibawah ini hapus aja Mas Cakra karena udh 
      //dihandle sama Protected Route jadi Aman tanpa syntax dibawah ini
      // if (token) {
      //   Cookies.get("roleUser") == "student"
      //     ? navigate("student/status-report")
      //     : navigate("teacher");
      // }
    }
    setFetchStatus(false);
  }, [fetchStatus, setFetchStatus]);

  const getDetailDataStudent = (nomorInduk, move) => async () => {
    await axios
      .get(`${BASE_URL}/api/students/${nomorInduk}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // console.log(res.data.data);
        setDetailDataStudent({ ...res.data.data });
      });
    
      await axios
      .get(`${BASE_URL}/api/actions/${nomorInduk}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.data);
        setDiciplinaryStudent([ ...res.data.data ]);
        console.log(detailDataStudent);
      });
    
    if (move === true) {
      navigate("/teacher/Input-Surat-Peringatan");
    }
  };

  const getDetailReport = (id) => async () => {
    await axios
      .get(`${BASE_URL}/api/reports/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // console.log(res.data.data);
        setUpdateStatusReport({ ...updateStatusReport, id: id });
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
          `${BASE_URL}/api/reports/${id}/status`,
          { status },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          MySwal.fire({
            icon: "success",
            title: res.data.pesan,
            customClass: {
              confirmButton: "bg-[var(--primary-color)]",
            },
          }).then(() => {
            setDetailReport(null);
            window.location.reload(true);
          });
        })
        .catch((err) => {
          console.log(err);
          MySwal.fire({
            icon: "error",
            title: err.response.data.error.pesan,
          });
        });
    } catch (e) {
      console.log(e);
    }
  };

  //Send Report by Student via Dashboard Student
  const handleSubmitSendReport = (event) => {
    event.preventDefault();
    MySwal.fire({
      title: "Konfirmasi Submit",
      text: "Apakah kamu yakin ingin mengirim laporan ini?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Iya",
      cancelButtonText: "Tidak",
      focusCancel: true,
      customClass: {
        confirmButton: "bg-[var(--primary-color)] text-black",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        let {
          nomorIndukPelaku,
          waktuKejadian,
          lokasiKejadian,
          deskripsiKejadian,
        } = sendReport;
        try {
          // console.log(sendReport);
          await axios
            .post(
              `${BASE_URL}/api/reports`,
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
              MySwal.fire({
                icon: "success",
                title: res.data.pesan,
                customClass: {
                  confirmButton: "bg-[var(--primary-color)]",
                },
              });
            })
            .catch((err) => {
              console.log(err);
              MySwal.fire({
                icon: "error",
                title: err.response.data.error.pesan,
              });
            });
          // setFetchStatus(true);
        } catch (e) {
          console.log(e);
        }
      }
    });
  };

  const handleAPIChangePassword = async (form) => {
    const { currentPassword, newPassword, confirmPassword } = form;
    const token = Cookies.get("token");
    await axios
      .post(
        `${BASE_URL}/api/users/change-password`,
        {
          kataSandiLama: currentPassword,
          kataSandiBaru: newPassword,
          konfirmasiKataSandi: confirmPassword,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res.data.pesan);
      })
      .catch((err) => {
        console.log(err.message);
        // return(err.data.pesan);
      });
  };

  const handleSendDiciplinaryAction = async (message) => {
    try {
      const idSiswa = detailDataStudent.siswa.nomorInduk;
      if (message !== "index") {
        await axios
          .post(
            `${BASE_URL}/api/actions/${idSiswa}`,
            {
              tindakan: message,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((res) => {
            MySwal.fire({
              icon: "success",
              title: res.data.pesan,
              customClass: {
                confirmButton: "bg-[var(--primary-color)]",
              },
            });
          })
          .catch((err) => {
            MySwal.fire({
              icon: "error",
              title: err.response.data.error.pesan,
            });
          });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Tolong masukkan aksi tindakan",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getToken = async (nomorInduk, kataSandi, role) => {
    try {
      const result = (
        await axios.post(`${BASE_URL}/api/auth/login`, {
          nomorInduk,
          kataSandi,
        })
      ).data;
      console.log(result.pesan);
      Cookies.set("roleUser", role, { expires: 1 });
      Cookies.set("token", result.token, { expires: 1 });
      setFetchStatus(true);
      return { message: result.pesan, icon: "success" };
    } catch (error) {
      const message = error.response.data.error.pesan;
      return { message: message, icon: "error" };
    }
  };

  const handleSubmitLogin = async (event) => {
    let { nomorInduk, kataSandi } = inputLogin;
    let { role } = profileUser;
    try {
      event.preventDefault();
      if (inputLogin.nomorInduk.length == 10 && profileUser.role == "student") {
        const response = await getToken(nomorInduk, kataSandi, role);
        console.log(response);
        Toast.fire({
          icon: response.icon,
          title: response.message,
          customClass: {
            confirmButton: "bg-[var(--primary-color)]",
          },
        }).then(() => {
          return navigate("/student/status-report");
        });
      } else if (
        inputLogin.nomorInduk.length == 18 &&
        profileUser.role == "teacher"
      ) {
        const response = await getToken(nomorInduk, kataSandi, role);
        console.log(response);
        Toast.fire({
          icon: response.icon,
          title: response.message,
        }).then(() => {
          return navigate("/teacher");
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "Login gagal. Inputan tidak diterima.",
        });
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
    MySwal.fire({
      title: "Konfirmasi logout",
      text: "Apakah kamu yakin ingin keluar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Iya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove("token");
        Cookies.remove("roleUser");
        clearData();
        return profileUser.role == "student"
          ? navigate("/student/login")
          : navigate("/teacher/login");
      }
    });
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
    fetchStatus,
    setFetchStatus,
    reportDiciplinary,
    setReportDiciplinary,
    diciplinaryStudent,
    setDiciplinaryStudent
  };

  let handleFunction = {
    handleSendDiciplinaryAction,
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
