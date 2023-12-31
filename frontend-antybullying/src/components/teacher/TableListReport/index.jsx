import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import moment from "moment";

export default function index() {
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { listAllReport } = handleState;
  const { getDetailReport } = handleFunction;

  return (
    <table className="bg-slate-200 w-full rounded-md shadow-md table-auto">
      <thead>
        <tr className="text-left border-b border-black">
          <th className="p-4 flex">
            Waktu Dilaporkan{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </th>
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
              <tr
                key={data.id}
                onClick={getDetailReport(data.id)}
                className="border-t cursor-pointer border-slate-300 hover:bg-slate-100">
                <td className="p-4 w-48">
                  {data.waktuDilaporkan !== undefined
                    ? moment(data.waktuDilaporkan).format(
                        "MMMM Do YYYY, h:mm a"
                      )
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
                <td className="p-4 w-48">
                  {data.waktuKejadian !== undefined
                    ? moment(data.waktuKejadian).format("MMMM Do YYYY, h:mm a")
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
