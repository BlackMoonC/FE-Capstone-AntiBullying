import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import moment from "moment";
export default function index() {
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { detailReport, updateStatusReport, setUpdateStatusReport } =
    handleState;
  const { handleUpdateStatusReport } = handleFunction;
  return (
    <form
      onSubmit={handleUpdateStatusReport}
      className="detail-laporan bg-white mt-6 p-6 rounded-md"
    >
      <p className="font-semibold text-xl mb-6">Detail Laporan</p>
      <div className="flex gap-6 mb-4 relative">
        <div className="w-72">
          {detailReport !== null && (
            <input
              readOnly
              id="idReport"
              className="sr-only block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
              type="text"
              value={detailReport.id}
            />
          )}
          <div className="form-group mb-4">
            <label htmlFor="pelapor" className="font-semibold">
              Nama Pelapor<span className="text-red-700">*</span>
            </label>
            {detailReport !== null ? (
              <input
                id="pelapor"
                className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
                type="text"
                placeholder="Data Nama Pelapor ..."
                value={detailReport.namaPelapor}
                disabled
              />
            ) : (
              <div className="bg-slate-300 w-full h-9 mt-2 rounded-md animate-pulse"></div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="tempat" className="font-semibold">
              Lokasi<span className="text-red-700">*</span>
            </label>
            {detailReport !== null ? (
              <input
                id="tempat"
                className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
                type="text"
                placeholder="Data lokasi kejadian ..."
                value={detailReport.lokasiKejadian}
                disabled
              />
            ) : (
              <div className="bg-slate-300 w-full h-9 mt-2 rounded-md animate-pulse"></div>
            )}
          </div>
        </div>
        <div className="w-72">
          <div className="form-group mb-4">
            <label htmlFor="pembully" className="font-semibold">
              Nama Pembully<span className="text-red-700">*</span>
            </label>
            {detailReport !== null ? (
              <input
                id="pembully"
                className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
                type="text"
                placeholder="Data Nama Pembully ..."
                value={detailReport.namaPelaku}
                disabled
              />
            ) : (
              <div className="bg-slate-300 w-full h-9 mt-2 rounded-md animate-pulse"></div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="tanggal" className="font-semibold">
              Tanggal Peristiwa<span className="text-red-700">*</span>
            </label>
            {detailReport !== null ? (
              <input
                id="tanggal"
                className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
                type="text"
                placeholder="Data Tanggal Kejadian..."
                // value={new Date(detailReport.waktuKejadian).toDateString()}
                value={moment(detailReport.waktuKejadian).format(
                  "MMMM Do YYYY, h:mm a"
                )}
                disabled
              />
            ) : (
              <div className="bg-slate-300 w-full h-9 mt-2 rounded-md animate-pulse"></div>
            )}
          </div>
        </div>
        <label htmlFor="status" className="font-semibold absolute right-32">
          Ubah Status<span className="text-red-700">*</span>
        </label>
        {detailReport !== null ? (
          <select
            onChange={(e) =>
              setUpdateStatusReport({
                ...updateStatusReport,
                status: e.target.value,
              })
            }
            id="status"
            className="bg-[#F1F2F5] rounded-md p-2 w-48 h-12 mt-7 absolute right-11"
            type="text"
          >
            <option value="">Pilih Status</option>
            <option value="belum diproses">Belum diproses</option>
            <option value="sedang diproses">Sedang diproses</option>
            <option value="selesai">Selesai</option>
            {/* <option value="dibatalkan">Dibatalkan</option> */}
          </select>
        ) : (
          <div className="bg-slate-300 w-48 h-10 mt-7 absolute right-11 rounded-md animate-pulse"></div>
        )}
      </div>
      <div className="form-group mb-4">
        <label htmlFor="catatan" className="font-semibold">
          Catatan Laporan<span className="text-red-700">*</span>
        </label>
        {detailReport !== null ? (
          <textarea
            id="catatan"
            rows={3}
            className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
            type="text"
            placeholder="Ketik Catatan disini ..."
            value={detailReport.deskripsiKejadian}
            disabled
          />
        ) : (
          <div className="bg-slate-300 w-full h-20 mt-2 rounded-md animate-pulse"></div>
        )}
      </div>
      {detailReport !== null ? (
        <button
          type="submit"
          className="items-center bg-[var(--secondary-color)] text-white px-14 py-2 rounded-md"
        >
          Submit Update Status Laporan
        </button>
      ) : (
        <div className="bg-slate-300 w-80 h-10 mt-2 rounded-md animate-pulse"></div>
      )}
    </form>
  );
}
