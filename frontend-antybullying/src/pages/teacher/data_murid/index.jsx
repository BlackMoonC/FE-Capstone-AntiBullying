import Searching from "../../../components/teacher/Searching";
import Card from "../../../components/teacher/Card";

export default function index() {
  const dummyData = [
    {
      id: 1,
      name: "John Doe",
      "Place and Date of Birth": "New York, 1990-05-15",
      address: "123 Main Street",
    },
    {
      id: 2,
      name: "Jane Smith",
      "Place and Date of Birth": "Los Angeles, 1985-09-23",
      address: "456 Elm Street",
    },
    {
      id: 3,
      name: "David Johnson",
      "Place and Date of Birth": "Chicago, 1982-03-10",
      address: "789 Oak Avenue",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      "Place and Date of Birth": "Houston, 1995-11-30",
      address: "101 Pine Road",
    },
    {
      id: 5,
      name: "Michael Brown",
      "Place and Date of Birth": "San Francisco, 1988-07-08",
      address: "555 Cedar Lane",
    },
    {
      id: 6,
      name: "Emily Davis",
      "Place and Date of Birth": "Miami, 1992-01-20",
      address: "222 Birch Boulevard",
    },
    {
      id: 7,
      name: "Robert Taylor",
      "Place and Date of Birth": "Dallas, 1980-12-05",
      address: "333 Willow Drive",
    },
    {
      id: 8,
      name: "Olivia Jackson",
      "Place and Date of Birth": "Phoenix, 1998-04-18",
      address: "777 Maple Court",
    },
    {
      id: 9,
      name: "William Lee",
      "Place and Date of Birth": "Atlanta, 1987-06-25",
      address: "444 Cedar Lane",
    },
    {
      id: 10,
      name: "Mia Harris",
      "Place and Date of Birth": "Seattle, 1993-08-14",
      address: "999 Pine Road",
    },
  ];

  return (
    <>
      <div className="title">
        <p className="font-semibold text-3xl">Data Murid</p>
        <p>Cari data murid dalam daftar pencarian.</p>
      </div>
      <Searching />
      <div className="grid-datamurid mt-10 flex max-[1250px]:flex-wrap gap-2">
        <div className="col1 w-full gap-2">
          <div className="card flex gap-4 items-center mb-2 bg-white p-4 rounded-md">
            <img
              src="../assets/img/profile-pic.jpg"
              alt="pic-students"
              className="w-28 rounded-full"
            />
            <span className="w-64">
              <p>Nama : Agus Hartanto</p>
              <p>TTL : Bandung, 30 February 2000</p>
              <p>Alamat : Papua, Fak-Fak 37, Papua Barat. 1377</p>
            </span>
          </div>
          <div className="card flex gap-4 items-center bg-white p-4 rounded-md">
            <img
              src="../assets/img/profile-pic.jpg"
              alt="pic-students"
              className="w-28 rounded-full"
            />
            <span className="w-64">
              <p>Nama : Agus Hartanto</p>
              <p>TTL : Bandung, 30 February 2000</p>
              <p>Alamat : Papua, Fak-Fak 37, Papua Barat. 1377</p>
            </span>
          </div>
        </div>
        <div className="col2 w-full gap-2">
          <div className="card flex gap-4 items-center mb-2 bg-white p-4 rounded-md">
            <img
              src="../assets/img/profile-pic.jpg"
              alt="pic-students"
              className="w-28 rounded-full"
            />
            <span className="w-64">
              <p>Nama : Agus Hartanto</p>
              <p>TTL : Bandung, 30 February 2000</p>
              <p>Alamat : Papua, Fak-Fak 37, Papua Barat. 1377</p>
            </span>
          </div>
          <div className="card flex gap-4 items-center bg-white p-4 rounded-md">
            <img
              src="../assets/img/profile-pic.jpg"
              alt="pic-students"
              className="w-28 rounded-full"
            />
            <span className="w-64">
              <p>Nama : Agus Hartanto</p>
              <p>TTL : Bandung, 30 February 2000</p>
              <p>Alamat : Papua, Fak-Fak 37, Papua Barat. 1377</p>
            </span>
          </div>
        </div>
        <div className="col3 w-full gap-2">
          <div className="card flex gap-4 items-center mb-2 bg-white p-4 rounded-md">
            <img
              src="../assets/img/profile-pic.jpg"
              alt="pic-students"
              className="w-28 rounded-full"
            />
            <span className="w-64">
              <p>Nama : Agus Hartanto</p>
              <p>TTL : Bandung, 30 February 2000</p>
              <p>Alamat : Papua, Fak-Fak 37, Papua Barat. 1377</p>
            </span>
          </div>
          <div className="card flex gap-4 items-center bg-white p-4 rounded-md">
            <img
              src="../assets/img/profile-pic.jpg"
              alt="pic-students"
              className="w-28 rounded-full"
            />
            <span className="w-64">
              <p>Nama : Agus Hartanto</p>
              <p>TTL : Bandung, 30 February 2000</p>
              <p>Alamat : Papua, Fak-Fak 37, Papua Barat. 1377</p>
            </span>
          </div>
        </div>
      </div>
      <div className="list-table flex gap-10 bg-white mt-10 p-4 h-fit rounded-md w-fit">
        <div>
          <img
            src="../assets/img/profile-pic.jpg"
            alt="pic-students"
            className="h-72 w-64 rounded-sm mb-4"
          />
          <p className="bg-[#F1F2F5] px-8 py-2 rounded-md font-semibold">
            Surat Peringatan ke-5
          </p>
        </div>
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
    </>
  );
}
