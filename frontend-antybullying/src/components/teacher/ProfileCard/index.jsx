import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import moment from "moment";

function index(props) {
  const { handleFunction } = useContext(GlobalContext);
  const { getDetailDataStudent } = handleFunction;
  
  return (
    <>
      <div className="list-table flex gap-5 bg-white shadow-md mt-6 p-4 h-fit rounded-md">
        <div className="w-64">
          <img
            src="/img/profile-pic.jpg"
            alt="pic-students"
            className="h-72 rounded-sm mb-4"
          />
          <button
            onClick={getDetailDataStudent(props.nomorInduk, props.move)}
            className="bg-[var(--secondary-color)] shadow-md text-white  w-full px-14 py-2 rounded-md"
          >
            Input Tindakan
          </button>
        </div>
        <div>
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
        </div>
        <div className="flex-1">
          <div className="p-4 bg-[#F1F2F5] rounded-md h-96 overflow-y-scroll">
            <p className="font-semibold mb-2">Riwayat Kedisiplinan</p>
            <hr className="mb-5 w-full border border-slate-400 border-dashed" />
            <div>
              {props.diciplinaryHistory?.length == 0 && (
                <div className="status-laporan text-center p-4">
                  <p className="font-semibold">
                    Belum Pernah Dapat Surat Peringatan atau Tindakan
                  </p>
                </div>
              )}

              {props.diciplinaryHistory &&
                props.diciplinaryHistory.map((data) => {
                  return (
                    <div
                      key={data.id}
                      className="status-laporan bg-white shadow-md rounded-md text-center p-4 mb-4 flex justify-between"
                    >
                      <p className="font-semibold max-w-xs">{data.keterangan}</p>
                      <p className="font-semibold">
                        {moment(data.tanggal).format("MMMM Do YYYY, h:mm a")}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

index.propTypes = {};

export default index;
