import { Outlet } from "react-router-dom";
import Sidebar from "../components/student/Sidebar";
import { StudentHasLoginRoute } from "./ProtectedRoute";

export default function Root() {
  return (
    <>
      <main className="flex">
        <StudentHasLoginRoute>
          <Sidebar />
          <>
            {/* MAIN CONTENT DASHBOARD */}
            <section className="content bg-[#F1F2F5] flex-1 p-5">
              <div className="container mt-8">
                <Outlet />
              </div>
            </section>
            {/* EKD SECTION OF MAIN CONTENT SIDEBAR */}
          </>
        </StudentHasLoginRoute>
      </main>
    </>
  );
}
