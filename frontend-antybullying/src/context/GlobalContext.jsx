import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = () => {
  const token = Cookies.get("token");
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
    }
  };

  useEffect(() => {
    if (fetchStatus) {
      fetchData();
    }
    setFetchStatus(false);
  }, [fetchStatus, setFetchStatus]);

  const getToken = async (nomorInduk, kataSandi) => {
    const result = (
      await axios.post(`https://antibullying-test.fly.dev/api/auth/login`, {
        nomorInduk,
        kataSandi,
      })
    ).data;
    console.log(result.pesan);
    Cookies.set("token", result.token, { expires: 1 });
    setFetchStatus(true);
  };

  const handleSubmitLogin = async (event) => {
    let { nomorInduk, kataSandi } = inputLogin;
    try {
      event.preventDefault();
      if (inputLogin.nomorInduk.length == 10 && profileUser.role == "student") {
        getToken(nomorInduk, kataSandi);
        return navigate("/student/status-report");
      } else if (
        inputLogin.nomorInduk.length == 18 && profileUser.role == "teacher") {
        getToken(nomorInduk, kataSandi);
        return navigate("/teacher");
      } else {
        alert("Login failled. Input is Invalid.");
        logout();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    return profileUser.role == "student"
      ? navigate("/student/login")
      : navigate("/teacher/login");
  };

  let handleState = {
    inputLogin,
    setInputLogin,
    profileUser,
    setProfileUser,
  };

  let handleFunction = {
    handleSubmitLogin,
    logout,
  };

  return (
    <GlobalContext.Provider value={{ handleState, handleFunction }}>
      <Outlet />
    </GlobalContext.Provider>
  );
};
