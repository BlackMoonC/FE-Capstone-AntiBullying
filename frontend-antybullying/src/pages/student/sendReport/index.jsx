export default function index() {
  return (
    <>
      <div className="title">
        <p className="font-semibold text-3xl">Laporkan Tindakan Bullying</p>
        <p>
          Isi formulir dibawah ini dengan lengkap. Kemananan identitas terjamin
          (<b>Annonymous</b>)
        </p>
      </div>
      <form className="bg-white p-8 mt-10 rounded-md">
        <div className="form-group mb-4">
          <label htmlFor="name" className="font-semibold">
            Pelaku Bullying <span className="text-red-700">*</span>
          </label>
          {/* <input class="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2" type="text" placeholder="Siapa yang melakukan tindakan pembullyan ..."> */}
          <select
            id="name"
            className="w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
            type="text">
            <option value="">
              Siapa yang melakukan tindakan pembullyan ...
            </option>
            <option value="">Abdul</option>
            <option value="">Alex</option>
            <option value="">Udin</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="waktu-bully" className="font-semibold">
            Waktu Kejadian <span className="text-red-700">*</span>
          </label>
          <input
            id="waktu-bully"
            className="date block w-full bg-[#F1F2F5] rounded-md mt-2 p-2 "
            type="datetime-local"
            placeholder="Kapan tindakan bully terjadi ..."
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="lokasi-bully" className="font-semibold">
            Lokasi Kejadian <span className="text-red-700">*</span>
          </label>
          <input
            id="lokasi-bully"
            className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2 placeholder:text-black"
            type="text"
            placeholder="Dimana tindakan bully terjadi ..."
          />
        </div>
        <div className="form-group mb-8">
          <label htmlFor="deskripsi" className="font-semibold">
            Deskripsi Kejadian <span className="text-red-700">*</span>
          </label>
          <textarea
            id="deskripsi"
            rows={5}
            className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2 placeholder:text-black"
            type="text"
            placeholder="Tulis kronologis lengkap kejadian disini ..."
            defaultValue={""}
          />
        </div>
        <button className="bg-[var(--primary-color)] text-white px-14 py-2 rounded-md">
          Submit
        </button>
      </form>
    </>
  );
}
