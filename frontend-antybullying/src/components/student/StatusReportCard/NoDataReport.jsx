
export default function index() {
  return (
    <>
      <div className="p-2">
        {/* <div className="text-center font-bold">BELUM ADA LAPORAN</div> */}
        <div className="bg-white p-4 rounded-md flex-1">
          <ul className="flex justify-between">
            <li>
              <span className="flex gap-2 items-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1.2em"
                  width="1.2em"
                >
                  <path d="M11 6.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-5 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z" />
                  <path d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z" />
                </svg>
                <p className="font-semibold">Tanggal Dilaporkan</p>
              </span>
              <div className="bg-slate-300 ms-7 mt-2 w-44 h-4 rounded-sm animate-pulse"></div>
            </li>
            <li>
              <span className="flex gap-2 items-center">
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  height="1.2em"
                  width="1.2em"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                  />
                </svg>
                <p className="font-semibold">Nama Pembully</p>
              </span>
              <div className="bg-slate-300 ms-7 mt-2 w-44 h-4 rounded-sm animate-pulse"></div>
            </li>
            <li>
              <span className="flex gap-2 items-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1.2em"
                  width="1.2em"
                >
                  <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" />
                  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <p className="font-semibold">Status</p>
              </span>
              <div className="bg-slate-300 ms-7 mt-2 w-44 h-4 rounded-sm animate-pulse"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
