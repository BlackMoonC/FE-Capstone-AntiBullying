import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import ProfileCard from "../../../components/teacher/ProfileCard";
import DropdownButton from "../../../components/teacher/dropdown";

export default function index() {
  const [diciplinary, setDiciplinary] = useState("index");
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { detailDataStudent } = handleState;
  const { handleSendDiciplinaryAction } = handleFunction;

  return (
    <>
      <div className="title">
        <p className="font-semibold text-3xl">Input Surat Peringatan</p>
        <p>Tambahkan Surat Peringatan pada tombol berikut.</p>
      </div>

      {detailDataStudent !== null && (
        <>
          <div className="flex gap-4 w-full">
            <div className="list-table flex gap-10 bg-white mt-10 p-4 h-fit rounded-md w-fit">
              <img
                src="/img/profile-pic.jpg"
                alt="pic-students"
                className="h-72 w-64 rounded-sm"
              />
              <div>
                <div className="data-siswa p-4 mb-8 bg-[#F1F2F5] rounded-md">
                  <p className="font-semibold">Data Siswa</p>
                  <p>Nama : {detailDataStudent.siswa.nama}</p>
                  <p>NIS : {detailDataStudent.siswa.nomorInduk}</p>
                  <p>Alamat : {detailDataStudent.siswa.alamat}</p>
                </div>
                <div className="data-ortu p-4 bg-[#F1F2F5] rounded-md">
                  <p className="font-semibold">Data Orang Tua Siswa</p>
                  <p>Nama Ibu : {detailDataStudent.orangTua.namaIbu}</p>
                  <p>Nama Ayah : {detailDataStudent.orangTua.namaAyah}</p>
                  <p>Nomor Handphone : {detailDataStudent.orangTua.telepon}</p>
                  <p>Email : {detailDataStudent.orangTua.surel}</p>
                </div>
              </div>
            </div>
            <div className="input-SP mt-8 w-fit">
              <p className="font-semibold mb-2">Tindakan</p>
              <DropdownButton
                inputDropdown={(value) => setDiciplinary(value)}
              />
            </div>
          </div>
          <hr className="mt-4 w-full border border-slate-400 border-dashed" />
          <div className="btn-submit mt-14 flex justify-end">
            <button
              onClick={() => handleSendDiciplinaryAction(diciplinary)}
              className="bg-[var(--secondary-color)] text-white px-14 py-2 rounded-md">
              Selesai
            </button>
          </div>
        </>
      )}

      {/* {detailDataStudent !== null && (
        <>
          <div className="flex items-start w-full">
            {detailDataStudent !== null && (
              <ProfileCard
                key={detailDataStudent.siswa.nomorInduk}
                nama={detailDataStudent.siswa.nama}
                nomorInduk={detailDataStudent.siswa.nomorInduk}
                alamat={detailDataStudent.siswa.alamat}
                namaAyah={detailDataStudent.orangTua.namaAyah}
                namaIbu={detailDataStudent.orangTua.namaIbu}
                move={true}
              />
            )}
            <div className="input-SP mt-8">
              <p className="font-semibold mb-2">Tindakan</p>
              <button className="bg-[var(--secondary-color)] w-full shadow-md text-white px-14 py-2 rounded-md">
                Tambah Surat Peringatan
              </button>
              <button className="bg-white shadow-md text-black w-full mt-5 px-14 py-2 rounded-md">
                Reset
              </button>
            </div>
          </div>
          <hr className="mt-4 w-full border border-slate-400 border-dashed" />
          <div className="btn-submit mt-14 flex justify-end">
            <button className="bg-[var(--secondary-color)] text-white px-14 py-2 rounded-md">
              Selesai
            </button>
          </div>
        </>
      )} */}
    </>
  );
}
