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
      <div className="list-table bg-white mt-10 p-4 h-72 rounded-md">
        <p className="bg-slate-400/50 p-2 py-28 text-center h-full rounded-md">
          Daftar laporan kasus akan ditampilkan pada tabel ini
        </p>
      </div>
      <form className="detail-laporan bg-white mt-10 p-6 rounded-md">
        <p className="font-semibold text-xl mb-6">Detail Laporan</p>
        <div className="flex gap-6 mb-4 relative">
          <div className="w-72">
            <div className="form-group mb-4">
              <label htmlFor="pelapor" className="font-semibold">
                Nama Pelapor<span className="text-red-700">*</span>
              </label>
              <input
                id="pelapor"
                className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
                type="text"
                placeholder="Ketik Nama Pelapor disini ..."
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
                placeholder="Ketik lokasi kejadian disini ..."
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
                placeholder="Ketik Nama Pembully disini ..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="tanggal" className="font-semibold">
                Tanggal Laporan<span className="text-red-700">*</span>
              </label>
              <input
                id="tanggal"
                className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
                type="date"
                placeholder="Masukkan Tanggal disini ..."
              />
            </div>
          </div>
          <select
            id="status"
            className="bg-[#F1F2F5] rounded-md p-2 w-48 h-12 mt-7 absolute right-10"
            type="text"
          >
            <option value="">Pilih Status</option>
            <option value="">Belum diproses</option>
            <option value="">Sudah diproses</option>
            <option value="">Dibatalkan</option>
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
            defaultValue={""}
          />
        </div>
        <button className="items-center bg-[var(--secondary-color)] text-white px-14 py-2 rounded-md">
          Submit
        </button>
      </form>
  {/* EKD SECTION OF MAIN CONTENT SIDEBAR */}
</>
  );
}
