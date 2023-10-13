import React from 'react'

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
        <h4>Jamalul Ikhsan</h4>
        <p>1810511099879</p>
      </div>
      <a href="dashboard-ubah-password.html">
        <button className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-md">
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
          className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
          type="text"
          placeholder="Ketik Nama Anda disini ..."
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="nis" className="font-semibold">
          Nomor Induk <span className="text-red-700">*</span>
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
      <button className="items-center bg-[var(--primary-color)] text-white px-14 py-2 rounded-md">
        Submit
      </button>
    </form>
  </div>
  {/* SUBCONTENT */}
  <section>
    <hr className="mt-4 w-full border border-slate-400 border-dashed" />
    <div className="status-laporan text-center p-4">
      <p className="font-semibold">Belum Pernah Dapat Surat Peringatan</p>
    </div>
    <div className="status-laporan bg-white text-center p-4 mb-4 flex justify-between">
      <p className="font-semibold">SURAT PERINGATAN 1</p>
      <p className="font-semibold">20 - 08 - 2023</p>
    </div>
    <div className="status-laporan bg-white text-center p-4 mb-4 flex justify-between">
      <p className="font-semibold">SURAT PERINGATAN 2</p>
      <p className="font-semibold">01 - 05 - 2023</p>
    </div>
    <div className="status-laporan bg-white text-center p-4 mb-4 flex justify-between">
      <p className="font-semibold">SURAT PERINGATAN 3</p>
      <p className="font-semibold">10 - 05 - 2023</p>
    </div>
  </section>
  {/* END OF SUBCONTENT */}
</>

  )
}
