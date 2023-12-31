import TableListReport from "../../components/teacher/TableListReport";
import TableStack from "../../components/teacher/TableTanStack";
import DetailReport from "../../components/teacher/DetailReport";
import Filters from "../../components/teacher/Dropdown/FilterTabel";
import { useState } from "react";

export default function index() {
  const [filterByStatus, setFilterByStatus] = useState([]);

  const sendValueStatus = (value) => {
    console.log("value: " + value);
    setFilterByStatus([
      {
        id: "status",
        value: value,
      },
    ]);
  };

  return (
    <>
      <div className="title">
        <p className="font-semibold text-3xl">Daftar Laporan Kasus</p>
        <p>
          Laporan kasus yang masuk dengan status masih proses, sudah selesai
          atau dibatalkan dapat dilihat pada tabel dibawah.
        </p>
      </div>

      <div className="list-table bg-white h-96 mt-8 p-4 rounded-md overflow-y-scroll">
        <Filters inputDropdown={(value) => sendValueStatus(value)} />
        <TableStack statusFromFilter={filterByStatus} />
        {/* <TableListReport /> */}
      </div>

      <DetailReport />
    </>
  );
}
