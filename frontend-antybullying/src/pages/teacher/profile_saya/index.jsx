import React from "react";

export default function index() {
  return (
    <>
      <div className="title">
        <p className="font-semibold text-3xl">Profile Saya</p>
        <p>Ubah Profile sesuai keinginanmu dan Update Password</p>
      </div>
      <div className="flex gap-8 p-4">
        <div className="photo w-48 text-center mt-10">
          <img
            className="mx-auto mb-5 rounded-full"
            src="/img/profile-pic.jpg"
            alt="profile-pic"
          />
          <div className="title mb-4">
            <h4>Diah Suratmi</h4>
            <p>2548511099855</p>
          </div>
          <a href="dashboard-ubah-password.html">
            <button className="bg-[var(--secondary-color)] text-white px-4 py-2 rounded-md">
              Ubah Password
            </button>
          </a>
        </div>
        <form className="bg-white p-8 mt-10 rounded-md flex-1">
          <div className="form-group mb-4">
            <label htmlFor="name" className="font-semibold">
              Nama <span className="text-red-700">*</span>
            </label>
            <input
              id="name"
              className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
              type="text"
              placeholder="Ketik Nama Anda disini ..."
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="nis" className="font-semibold">
              Nomor Induk Pendidik <span className="text-red-700">*</span>
            </label>
            <input
              id="nis"
              className="date block w-full bg-[#F1F2F5] rounded-md mt-2 p-2 "
              type="number"
              placeholder="Ketik Nomor Induk Anda disini ..."
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="ttl" className="font-semibold">
              Tempat Tanggal Lahir <span className="text-red-700">*</span>
            </label>
            <input
              id="ttl"
              className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
              type="text"
              placeholder="Tempat Tanggal Lahir ..."
            />
          </div>
          <div className="form-group mb-8">
            <label htmlFor="alamat" className="font-semibold">
              Alamat <span className="text-red-700">*</span>
            </label>
            <textarea
              id="alamat"
              rows={5}
              className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
              type="text"
              placeholder="Ketik alamat Anda disini ..."
              defaultValue={""}
            />
          </div>
          <button className="items-center bg-[var(--secondary-color)] text-white px-14 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}