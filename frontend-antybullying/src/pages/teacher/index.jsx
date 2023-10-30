import { useContext } from "react";
import TableListReport from "../../components/teacher/TableListReport";
import { GlobalContext } from "../../context/GlobalContext";

export default function index() {
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { detailReport,updateStatusReport, setUpdateStatusReport } = handleState;
  const { handleUpdateStatusReport } = handleFunction;
  return (
    <>
      <div className="title">
        <p className="font-semibold text-3xl">Daftar Laporan Kasus</p>
        <p>
          Laporan kasus yang masuk dengan status masih proses, sudah selesai
          atau dibatalkan dapat dilihat pada tabel dibawah.
        </p>
      </div>
      
      {/* <div className="list-table bg-white mt-10 p-4 h-72 rounded-md">
        <p className="bg-slate-400/50 p-2 py-28 text-center h-full rounded-md">
          Daftar laporan kasus akan ditampilkan pada tabel ini
        </p>
      </div> */}
      <div className="list-table bg-white h-96 mt-8 p-4 rounded-md overflow-y-scroll">
        <TableListReport />
      </div>
      {detailReport !== null && 
      <form onSubmit={handleUpdateStatusReport} className="detail-laporan bg-white mt-6 p-6 rounded-md">
        <p className="font-semibold text-xl mb-6">Detail Laporan</p>
        <div className="flex gap-6 mb-4 relative">
          <div className="w-72">
            <input
              readOnly
              id="idReport"
              className="sr-only block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
              type="text"
              value={detailReport.id}
            />
            <div className="form-group mb-4">
              <label htmlFor="pelapor" className="font-semibold">
                Nama Pelapor<span className="text-red-700">*</span>
              </label>
              <input
                id="pelapor"
                className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
                type="text"
                placeholder="Data Nama Pelapor ..."
                value={detailReport.namaPelapor}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="tempat" className="font-semibold">
                Lokasi<span className="text-red-700">*</span>
              </label>
              <input
                id="tempat"
                className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
                type="text"
                placeholder="Data lokasi kejadian ..."
                value={detailReport.lokasiKejadian}
                disabled
              />
            </div>
          </div>
          <div className="w-72">
            <div className="form-group mb-4">
              <label htmlFor="pembully" className="font-semibold">
                Nama Pembully<span className="text-red-700">*</span>
              </label>
              <input
                id="pembully"
                className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
                type="text"
                placeholder="Data Nama Pembully ..."
                value={detailReport.namaPelaku}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="tanggal" className="font-semibold">
                Tanggal Peristiwa<span className="text-red-700">*</span>
              </label>
              <input
                id="tanggal"
                className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
                type="text"
                placeholder="Data Tanggal Kejadian..."
                value={new Date(detailReport.waktuKejadian).toDateString()}
                disabled
              />
            </div>
          </div>
          <label htmlFor="status" className="font-semibold absolute right-32">
            Ubah Status<span className="text-red-700">*</span>
          </label>
          <select
            onChange={(e) => setUpdateStatusReport({ ...updateStatusReport, status: e.target.value })}
            id="status"
            className="bg-[#F1F2F5] rounded-md p-2 w-48 h-12 mt-7 absolute right-10"
            type="text"
          >
            <option value="">Pilih Status</option>
            <option value="belum diproses">Belum diproses</option>
            <option value="sedang diproses">Sedang diproses</option>
            <option value="selesai">Selesai</option>
            <option value="dibatalkan">Dibatalkan</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="catatan" className="font-semibold">
            Catatan Laporan<span className="text-red-700">*</span>
          </label>
          <textarea
            id="catatan"
            rows={5}
            className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
            type="text"
            placeholder="Ketik Catatan disini ..."
            value={detailReport.deskripsiKejadian}
            disabled
          />
        </div>
        <button type="submit" className="items-center bg-[var(--secondary-color)] text-white px-14 py-2 rounded-md">
          Submit Update Status Laporan
        </button>
      </form>
      // onClick={() => () => {alert(detailReport.id)}}
      }
      {/* EKD SECTION OF MAIN CONTENT SIDEBAR */}
    </>
  );
}
