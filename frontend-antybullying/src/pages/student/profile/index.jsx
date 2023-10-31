import React, { useContext } from 'react'
import { GlobalContext } from "../../../context/GlobalContext";

export default function index() {
  const { handleState } = useContext(GlobalContext);
  const { profileUser } = handleState;
  return (
    <>
      <div className="title">
        <p className="font-semibold text-3xl">Profile Saya</p>
        <p className="font-semibold">Bio Data Diri</p>
      </div>
      <div className="flex gap-8 p-4">
        <div className="photo w-48 text-center mt-10">
          <img
            className="mx-auto mb-5 rounded-full"
            src="/img/profile-pic.jpg"
            alt="profile-pic"
          />
          <div className="title mb-4">
            <h4>{profileUser !== null && profileUser.nama}</h4>
            <p>{profileUser !== null && profileUser.nomorInduk}</p>
          </div>
          <a href="#">
            <button className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-md">
              Ubah Password
            </button>
          </a>
        </div>
        <form className="bg-white p-8 mt-10 rounded-md flex-1">
          <div className="form-group mb-4">
            <label htmlFor="name" className="font-semibold">
              Nama
            </label>
            <p className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2">{profileUser !== null && profileUser.nama}</p>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="nis" className="font-semibold">
              Nomor Induk
            </label>
            <p className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2">{profileUser !== null && profileUser.nomorInduk}</p>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="ttl" className="font-semibold">
              Tempat Tanggal Lahir
            </label>
            <p className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2">{profileUser !== null && profileUser.TTL}</p>
          </div>
          <div className="form-group mb-8">
            <label htmlFor="alamat" className="font-semibold">
              Alamat
            </label>
            <p className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2">{profileUser !== null && profileUser.alamat}</p>
          </div>
        </form>
      </div>
      {/* SUBCONTENT */}
      <section>
        <hr className="mt-4 w-full border border-slate-400 border-dashed" />
        <div className="status-laporan text-center p-4">
          <p className="font-semibold">Belum Pernah Dapat Surat Peringatan</p>
        </div>
        {/* <div className="status-laporan bg-white text-center p-4 mb-4 flex justify-between">
          <p className="font-semibold">SURAT PERINGATAN 1</p>
          <p className="font-semibold">20 - 08 - 2023</p>
        </div> */}
      </section>
      {/* END OF SUBCONTENT */}
    </>

  )
}
