import TableListReport from "../../components/teacher/TableListReport";
import DetailReport from "../../components/teacher/DetailReport";

export default function index() {
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
        <TableListReport />
      </div>

      <DetailReport/>
      
    </>
  );
}
