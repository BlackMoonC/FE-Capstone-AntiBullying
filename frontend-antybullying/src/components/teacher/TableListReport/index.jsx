import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export default function index() {
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { listAllReport } = handleState;
  const { getDetailReport } = handleFunction;

  return (
    <table className="bg-slate-200 w-full rounded-md shadow-md table-auto">
      <thead>
        <tr className="text-left border-b border-black">
          <th className="p-4">Waktu Dilaporkan</th>
          <th className="p-4">Nama Pelapor</th>
          <th className="p-4">Nama Pelaku</th>
          <th className="p-4">Lokasi Kejadian</th>
          <th className="p-4">Waktu Kejadian</th>
          <th className="p-4">Deskripsi</th>
          <th className="p-4">Status</th>
        </tr>
      </thead>
      <tbody>
        {listAllReport !== null &&
          listAllReport.map((data) => {
            return (
              <tr key={data.id} onClick={getDetailReport(data.id)} className="border-t border-slate-300 hover:bg-slate-100">
                <td className="p-4">
                  {data.waktuDilaporkan !== undefined
                    ? new Date(data.waktuDilaporkan).toDateString()
                    : "Data Belum Tersedia"}
                </td>
                <td className="p-4">
                  {data.namaPelapor !== undefined
                    ? data.namaPelapor
                    : "Data Belum Tersedia"}
                </td>
                <td className="p-4">
                  {data.namaPelaku !== undefined
                    ? data.namaPelaku
                    : "Data Belum Tersedia"}
                </td>
                <td className="p-4">
                  {data.lokasiKejadian !== undefined
                    ? data.lokasiKejadian
                    : "Data Belum Tersedia"}
                </td>
                <td className="p-4">
                  {data.waktuKejadian !== undefined
                    ? new Date(data.waktuKejadian).toDateString()
                    : "Data Belum Tersedia"}
                </td>
                <td className="p-4 max-w-sm">
                  {data.deskripsiKejadian !== undefined
                    ? data.deskripsiKejadian
                    : "Data Belum Tersedia"}
                </td>
                <td className="p-4">
                  {data.status !== undefined
                    ? data.status
                    : "Data Belum Tersedia"}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}