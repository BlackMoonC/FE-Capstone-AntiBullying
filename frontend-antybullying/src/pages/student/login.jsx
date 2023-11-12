import React, { useContext } from "react";
import ButtonSelection from "../../components/login/Button/Selection";
import { GlobalContext } from "../../context/GlobalContext";
import { IsStudentLoginPage } from "../../routes/ProtectedRoute";

export default function login() {
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { inputLogin, setInputLogin, profileUser } = handleState;
  const { handleSubmitLogin } = handleFunction;
  return (
    <IsStudentLoginPage>
      {/* <section className="flex flex-col md:flex-row md:bg-[url('assets/img/bg_students.png')] bg-cover bg-center h-screen"> */}
      <section className="flex flex-col md:flex-row h-screen">
        <div className="left lg:w-[60vw] my-auto mx-10 md:block hidden">
          <div className="w-full md:bg-[url('assets/img/bg_students.png')] bg-cover bg-center lg:h-full rounded-3xl px-10 py-60 text-white bg-gray-600">
            <p className="font-bold text-6xl">Hello, </p>{" "}
            <p className="font-bold text-6xl">Student!</p>
            <p className="pt-6 pe-14 font-semibold text-xl">
              Selamat Datang di sistem aplikasi AntyBullying, Ayo laporkan
              tindakan bullying yang kamu alami sekarang dan identitas kamu
              dijamin aman lohh
            </p>
          </div>
        </div>
        <div className="right md:w-[40vw] h-full bg-red-600/90 flex flex-col items-center justify-center">
          <div className="mt-12 mx-3 mb-5 md:mt-50">
            <span className="flex justify-center items-center gap-5 mb-14">
              <img className="w-20" src="/img/logo-web.png" alt="logo-antybullying" />
              <p className="font-semibold text-3xl text-white">
                AntyBullying
              </p>
            </span>
            <p className="font-semibold mt-4 mb-2 text-white">
              Login dan silahkan masukkan data disini :{" "}
            </p>
            <form onSubmit={handleSubmitLogin} className="w-96">
              <input
                readOnly
                type="text"
                defaultValue={(profileUser.role = "student")}
                className="sr-only"
              />
              <input
                onChange={(e) =>
                  setInputLogin({ ...inputLogin, nomorInduk: e.target.value })
                }
                type="text"
                className="w-full p-4 rounded-md bg-white mb-4"
                placeholder="Masukkan NISN"
              />
              <input
                onChange={(e) =>
                  setInputLogin({ ...inputLogin, kataSandi: e.target.value })
                }
                type="password"
                className="w-full p-4 rounded-md bg-white"
                placeholder="Masukkan Password"
              />
              <button
                type="submit"
                className="block bg-[var(--primary-color)] mt-4 text-center w-full py-4 text-white rounded-md"
              >
                Login
              </button>
            </form>
            <ButtonSelection hero="student" />
          </div>
        </div>
      </section>
    </IsStudentLoginPage>
  );
}
