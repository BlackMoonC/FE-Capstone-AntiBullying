import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export default function index() {
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { listNameStudent, dataStudent, sendReport, setSendReport } = handleState;
  const { handleSubmitSendReport } = handleFunction;

  return (
    <>
      <div className="title">
        <p className="font-semibold text-3xl">Laporkan Tindakan Bullying</p>
        <p>
          Isi formulir dibawah ini dengan lengkap. Kemananan identitas terjamin
          (<b>Annonymous</b>)
        </p>
      </div>
      <form
        onSubmit={handleSubmitSendReport}
        className="bg-white p-8 mt-10 rounded-md"
      >
        <div className="form-group mb-4">
          <label htmlFor="name" className="font-semibold">
            Pelaku Bullying <span className="text-red-700">*</span>
          </label>
          <select
            onChange={(e) => {
              setSendReport({
                ...sendReport,
                nomorIndukPelaku: e.target.value,
              });
            }}
            id="name"
            className="w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
            type="text"
            required
          >
            <option disabled>
              Siapa yang melakukan tindakan pembullyan ...
            </option>
            {listNameStudent !== null &&
              listNameStudent.map((data) => {
                return <option key={data.nomorInduk} value={data.nomorInduk}>{data.nama}</option>;
              })}
          </select>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="waktu-bully" className="font-semibold">
            Waktu Kejadian <span className="text-red-700">*</span>
          </label>
          <input
            onChange={(e) => {
              setSendReport({
                ...sendReport,
                waktuKejadian: e.target.value.toString(),
              });
            }}
            value={sendReport.waktuKejadian}
            id="waktu-bully"
            className="date block w-full bg-[#F1F2F5] rounded-md mt-2 p-2 "
            type="datetime-local"
            placeholder="Kapan tindakan bully terjadi ..."
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="lokasi-bully" className="font-semibold">
            Lokasi Kejadian <span className="text-red-700">*</span>
          </label>
          <input
            onChange={(e) => {
              setSendReport({ 
                ...sendReport, 
                lokasiKejadian: e.target.value 
              });
            }}
            value={sendReport.lokasiKejadian}
            id="lokasi-bully"
            className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2 placeholder:text-black"
            type="text"
            placeholder="Dimana tindakan bully terjadi ..."
            required
          />
        </div>
        <div className="form-group mb-8">
          <label htmlFor="deskripsi" className="font-semibold">
            Deskripsi Kejadian <span className="text-red-700">*</span>
          </label>
          <textarea
            onChange={(e) => {
              setSendReport({
                ...sendReport,
                deskripsiKejadian: e.target.value,
              });
            }}
            value={sendReport.deskripsiKejadian}
            id="deskripsi"
            rows={5}
            className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2 placeholder:text-black"
            type="text"
            placeholder="Tulis kronologis lengkap kejadian disini ..."
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[var(--primary-color)] text-white px-14 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </>
  );
}
