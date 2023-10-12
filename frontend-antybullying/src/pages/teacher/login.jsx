import React, { useState } from "react";
import ButtonSelection from "../../components/login/Button/Selection";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function login() {
  const [nip, setNip] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

//   {
//     "username": "mor_2314",
//     "password": "83r5^_"
// }

  const handleSubmit = async (event) => {
    console.log("NISN: " + nip);
    console.log("Password: " + password);
    try {
      event.preventDefault();
      const result = (
        await axios.post(`https://fakestoreapi.com/auth/login`, {
          username: nip,
          password: password,
        })
      ).data;
      localStorage.setItem("token", JSON.stringify(result.token));
      return navigate("/teacher");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="flex bg-[url('./assets/img/bg_teacher.png')] bg-center h-screen">
      <div className="left w-[50vw] h-full">
        <div className="pt-72 ps-36 pe-4">
          <p className="font-bold text-6xl">Hello, </p>{" "}
          <p className="font-bold text-6xl">Teacher!</p>
          <p className="pt-6 font-semibold text-xl">
            Selamat Datang di sistem aplikasi AntyBullying, Ayo laporkan
            tindakan bullying yang kamu alami sekarang dan identitas kamu
            dijamin aman lohh
          </p>
        </div>
      </div>
      <div className="right w-[50vw] h-full bg-blue-600/60">
        <div className="container mt-60 px-56">
          <p className="font-semibold text-3xl text-white text-center mb-10">
            AntyBullying
          </p>
          <p className="font-semibold text-xl text-white mb-2">Role : </p>
          <ButtonSelection hero="teacher" />
          <p className="font-semibold mt-4 mb-2 text-white">
            Login dan silahkan masukkan data disini :{" "}
          </p>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setNip(e.target.value)}
              type="text"
              className="w-96 p-4 rounded-md bg-white mb-4"
              placeholder="Masukkan NIP"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-96 p-4 rounded-md bg-white"
              placeholder="Masukkan Password"
            />
            {/* <button class="block bg-[var(--primary-color)] mt-4 px-36 py-4 text-white rounded-md">Login</button> */}
            <button
              type="submit"
              className="block bg-[var(--secondary-color)] mt-4 text-center w-72 py-4 text-white rounded-md">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
