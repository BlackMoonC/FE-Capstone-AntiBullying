import moment from "moment";

export default function index({ myReport }) {
  return (
    <>
      <section className="mt-4">
        <div className="text-center p-4">
          <p className="font-semibold">Riwayat Kedisiplinan</p>
        </div>
        <hr className="mb-5 w-full border border-slate-400 border-dashed" />
        {myReport === undefined && (
          <div className="status-laporan text-center p-4">
            <p className="font-semibold">
              Belum Pernah Dapat Surat Peringatan atau Tindakan
            </p>
          </div>
        )}

        {myReport &&
          myReport.map((data) => {
            return (
              <div
                key={data.id}
                className="status-laporan bg-white shadow-md rounded-md text-center p-4 mb-4 flex justify-between">
                <p className="font-semibold">{data.keterangan}</p>
                <p className="font-semibold">
                  {moment(data.tanggal).format("MMMM Do YYYY, h:mm a")}
                </p>
              </div>
            );
          })}
      </section>
    </>
  );
}
