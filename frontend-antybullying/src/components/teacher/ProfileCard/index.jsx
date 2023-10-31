import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

function index(props) {
  const { handleFunction } = useContext(GlobalContext);
  const { getDetailDataStudent } = handleFunction;
  return (
    <>
      <div className="list-table flex mx-auto gap-10 bg-white mt-6 p-4 h-fit rounded-md w-1/2">
        <div className="w-64">
          <img
            src="/img/profile-pic.jpg"
            alt="pic-students"
            className="h-72 rounded-sm mb-4"
          />
          <p className="bg-[#F1F2F5] px-8 py-2 rounded-md font-semibold">
            Surat Peringatan ke-??
          </p>
        </div>
        <div className="flex-1">
          <div className="data-siswa p-4 mb-8 bg-[#F1F2F5] rounded-md">
            <p className="font-semibold">Data Siswa</p>
            <p>Nama : {props.nama}</p>
            <p>No Induk : {props.nomorInduk}</p>
            <p>Alamat : {props.alamat}</p>
          </div>
          <div className="data-ortu p-4 bg-[#F1F2F5] rounded-md">
            <p className="font-semibold">Data Orang Tua Siswa</p>
            <p>Nama Ibu : {props.namaIbu}</p>
            <p>Nama Ayah : {props.namaAyah}</p>
            <p>Telepon : {props.telepon}</p>
            <p>Email : {props.surel}</p>
          </div>
          <button onClick={getDetailDataStudent(props.nomorInduk, props.move)} className="bg-[var(--secondary-color)] shadow-md text-white mt-5 px-14 py-2 rounded-md">
            Input Tindakan
          </button>
        </div>
      </div>
    </>
  );
}

index.propTypes = {};

export default index;
