import Card from "../../../components/teacher/Card";
import ProfileCard from "../../../components/teacher/ProfileCard";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import Searching from "../../../components/teacher/Searching";

export default function index() {
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { dataStudent, detailDataStudent } = handleState;
  const { getDetailDataStudent } = handleFunction;

  const [search, setSearch] = useState("");

  const filteredStudent = dataStudent?.filter((item) => {
    if(item.nama.toLowerCase().includes(search.toLowerCase())){
     return item; 
    }}
  );

  const handleSearch = (e) => {
    console.log(`Searching`, e.target.value)
    setSearch(e.target.value);
  }

  console.log(filteredStudent);

  return (
    <>
      <div className="title">
        <p className="font-semibold text-3xl">Data Murid</p>
        <p>Cari data murid dalam daftar pencarian.</p>
      </div>
      <Searching handleChange={handleSearch}/>
      <div className="grid-datamurid h-80 mt-10 overflow-y-auto grid grid-cols-3 gap-4 max-[1500px]:grid-cols-2 max-[1250px]:grid-cols-1">
        {dataStudent !== null &&
          filteredStudent.map((data) => {
            return (
              <button
                onClick={getDetailDataStudent(data.nomorInduk, false)}
                key={data.nomorInduk}>
                <Card
                  name={data.nama}
                  ttl={data.tempatTanggalLahir}
                  address={data.alamat}
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
