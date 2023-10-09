import React from 'react'

export default function index() {
  return (
    <>
  <div className="title">
    <p className="font-semibold text-3xl">Input Surat Peringatan</p>
    <p>Tambahkan Surat Peringatan pada tombol berikut.</p>
  </div>
  <div className="searchbar p-1 px-2 mt-8 bg-white rounded-lg">
    <div className="flex items-center">
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="2em" width="2em">
        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
      </svg>
      <input
        className="w-full p-2 bg-transparent"
        type="text"
        placeholder="Cari Surat Peringatan Siswa ..."
      />
    </div>
  </div>
  <div className="list-table flex gap-10 bg-white mt-10 p-4 h-fit rounded-md w-fit">
    <img
      src="../assets/img/profile-pic.jpg"
      alt="pic-students"
      className="h-72 w-64 rounded-sm"
    />
    <div>
      <div className="data-siswa p-4 mb-8 bg-[#F1F2F5] rounded-md">
        <p className="font-semibold">Data Siswa</p>
        <p>Nama : Udin Hermansyah</p>
        <p>NIS : 1255448879789</p>
        <p>Kelas : 5C</p>
        <p>Kasus : Memukul teman perempuan dilapangan</p>
      </div>
      <div className="data-ortu p-4 bg-[#F1F2F5] rounded-md">
        <p className="font-semibold">Data Orang Tua Siswa</p>
        <p>Nama Ibu : Markiah</p>
        <p>Nama Ayah : Tono Surtoyo</p>
        <p>Alamat Rumah : Jl. Cendrawasih 37 Babut, Tengerang. 13755</p>
      </div>
    </div>
  </div>
  <div className="input-SP mt-8">
    <p className="font-semibold mb-2">Tindakan</p>
    <button className="items-center bg-[var(--secondary-color)] text-white px-14 py-2 rounded-md">
      Tambah Surat Peringatan
    </button>
  </div>
  <hr className="mt-4 w-full border border-slate-400 border-dashed" />
  <div className="btn-submit mt-14">
    <button className="items-center bg-[var(--secondary-color)] text-white px-14 py-2 rounded-md">
      Submit Surat Peringatan
    </button>
  </div>
</>

  )
}
