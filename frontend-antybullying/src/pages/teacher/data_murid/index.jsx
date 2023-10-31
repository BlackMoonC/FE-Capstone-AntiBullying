// import Searching from "../../../components/teacher/Searching";
import Card from "../../../components/teacher/Card";
import ProfileCard from "../../../components/teacher/ProfileCard";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export default function index() {
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { dataStudent, detailDataStudent } = handleState;
  const { getDetailDataStudent } = handleFunction;
  
  return (
    <>
      <div className="title">
        <p className="font-semibold text-3xl">Data Murid</p>
        <p>Cari data murid dalam daftar pencarian.</p>
      </div>
      <div className="searchbar p-1 px-2 mt-8 bg-white rounded-lg">
        <div className="flex items-center">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="2em"
            width="2em"
          >
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
          </svg>
          <input
            className="w-full p-2 bg-transparent"
            type="text"
            placeholder="Cari Surat Peringatan Siswa ..."
          />
        </div>
      </div>
      <div className="grid-datamurid border-2 border-black rounded-md h-80 mt-10 overflow-y-auto grid grid-cols-3 gap-4 p-2 max-[1500px]:grid-cols-2 max-[1250px]:grid-cols-1">
        {dataStudent !== null &&
          dataStudent.map((data) => {
            return (
              <button
                onClick={getDetailDataStudent(data.nomorInduk,false)}
                key={data.nomorInduk}
              >
                <Card
                  name={data.nama}
                  nomorInduk={data.nomorInduk}
                  ttl={data.tempatTanggalLahir}
                />
              </button>
            );
          })}
      </div>

      {detailDataStudent !== null && (
        <ProfileCard
          key={detailDataStudent.siswa.nomorInduk}
          nama={detailDataStudent.siswa.nama}
          nomorInduk={detailDataStudent.siswa.nomorInduk}
          alamat={detailDataStudent.siswa.alamat}

          namaAyah={detailDataStudent.orangTua.namaAyah}
          namaIbu={detailDataStudent.orangTua.namaIbu}
          telepon={detailDataStudent.orangTua.telepon}
          surel={detailDataStudent.orangTua.surel}
          move={true}
          />
      )}
    </>
  );
}
