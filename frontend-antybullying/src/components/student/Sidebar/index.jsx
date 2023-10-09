import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function index() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    return navigate("/student/login");
  };

  return (
    <>
      {/* SIDEBAR DASHBOARD STUDENTS */}
      <section className="sidebarStudent bg-[var(--primary-color)] h-screen sticky top-0 w-80 p-4 text-white text-center">
        <div className="container relative h-full">
          <div className="header">
            <img
              className="mx-auto mb-5 rounded-full w-48"
              src="../assets/img/profile-pic.jpg"
              alt="profile-pic"
            />
            <div className="title mb-10">
              <h4>Jamalul Ikhsan</h4>
              <p>1810511099879</p>
            </div>
          </div>
          <ul className="btn-menu mx-auto">
            <li className="flex gap-2 mb-2 justify-center items-center hover:bg-white/30 rounded-md h-12 cursor-default">
              {/* <img src="" alt="icon-send"> */}
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.2em"
                width="1.2em">
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 017 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 01-.014.002H7.022zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 004 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <Link to="/student/profile">
                <p className="font-medium">Profile Saya</p>
              </Link>
            </li>
            <li className="flex gap-2 mb-2 justify-center items-center hover:bg-white/30 rounded-md h-12 cursor-default">
              {/* <img src="" alt="icon-send"> */}
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.2em"
                width="1.2em">
                <path d="M15.854.146a.5.5 0 01.11.54l-5.819 14.547a.75.75 0 01-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 01.124-1.33L15.314.037a.5.5 0 01.54.11zM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493z" />
              </svg>
              <Link to="/student/send-report">
                <p className="font-medium">Kirim Laporan</p>
              </Link>
            </li>
            <li className="flex gap-2 mb-2 justify-center items-center hover:bg-white/30 rounded-md h-12 cursor-default">
              {/* <img src="" alt="icon-info"> */}
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.2em"
                width="1.2em">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" />
              </svg>
              <Link to="/student/status-report">
                <p className="font-medium">Status Laporan</p>
              </Link>
            </li>
          </ul>
          <div className="absolute inset-x-0 bottom-0">
            <ul className="mb-8">
              <li className="flex gap-2 justify-center items-center hover:bg-white/30 rounded-md h-12 cursor-default">
                {/* <img src="" alt="icon-logout"> */}
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1.2em"
                  width="1.2em">
                  <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" />
                </svg>
                <button onClick={logout}>
                  <p className="font-medium">Logout</p>
                </button>
              </li>
            </ul>
            <p className="font-semibold">AntyBullying v.1.0.0</p>
          </div>
        </div>
      </section>
      {/* EKD SECTION OF SIDEBAR */}
    </>
  );
}
