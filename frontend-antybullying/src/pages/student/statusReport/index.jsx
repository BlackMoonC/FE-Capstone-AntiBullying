import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import StatusReportCard from "../../../components/student/StatusReportCard";
import NoDataReport from "../../../components/student/StatusReportCard/NoDataReport";

export default function index() {
  const { handleState } = useContext(GlobalContext);
  const { myReports } = handleState;

  return (
    <>
      <div className="title mb-10">
        <p className="font-semibold text-3xl">Daftar Laporan</p>
        <p>Tampilan daftar seluruh laporan yang masuk.</p>
      </div>

      {myReports == null && <NoDataReport />}

      {myReports !== null &&
        myReports.map((data) => {
          return (
            <StatusReportCard
              key={data.id}
              waktuDilaporkan={data.waktuDilaporkan}
              namaPelaku={data.namaPelaku}
              status={data.status}
            />
          );
        })}
    </>
  );
}
