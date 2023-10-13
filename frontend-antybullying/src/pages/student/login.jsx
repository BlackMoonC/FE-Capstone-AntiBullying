import React, { useState } from "react";
import ButtonSelection from "../../components/login/Button/Selection";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function login() {
  const [nisn, setNisn] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

//   {
//     "username": "mor_2314",
//     "password": "83r5^_"
// }

  const handleSubmit = async (event) => {
    console.log('NISN: '+ nisn);
    console.log('Password: '+ password);
    try {
      event.preventDefault();
      const result = (
        await axios.post(`https://fakestoreapi.com/auth/login`, {
          username: nisn,
          password: password,
        })
      ).data;
      console.log(result);
      localStorage.setItem("token", JSON.stringify(result.token));
      return navigate("/student/status-report");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="flex bg-[url('assets/img/bg_students.png')] bg-center h-screen">
      <div className="left w-[50vw] h-full">
        <div className="pt-72 ps-36 pe-4">
          <p className="font-bold text-6xl">Hello, </p>{" "}
          <p className="font-bold text-6xl">Student!</p>
          <p className="pt-6 font-semibold text-xl">
            Selamat Datang di sistem aplikasi AntyBullying, Ayo laporkan
            tindakan bullying yang kamu alami sekarang dan identitas kamu
            dijamin aman lohh
          </p>
        </div>
      </div>
      <div className="right w-[50vw] h-full bg-red-600/60">
        <div className="container mt-60 px-56">
          <p className="font-semibold text-3xl text-white text-center mb-10">
            AntyBullying
          </p>
          <p className="font-semibold text-xl text-white mb-2">Role : </p>
          <ButtonSelection hero="student" />
          <p className="font-semibold mt-4 mb-2 text-white">
            Login dan silahkan masukkan data disini :{" "}
          </p>
          <form  onSubmit={handleSubmit}>
            <input
              onChange={(e) => setNisn(e.target.value)}
              type="text"
              className="w-96 p-4 rounded-md bg-white mb-4"
              placeholder="Masukkan NISN"
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
              className="block bg-[var(--primary-color)] mt-4 text-center w-72 py-4 text-white rounded-md">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
