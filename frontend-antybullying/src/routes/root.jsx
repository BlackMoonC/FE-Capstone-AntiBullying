import { Outlet } from "react-router-dom";
import Sidebar from "../components/teacher/Sidebar";
import { TeacherHasLoginRoute } from "./ProtectedRoute";

export default function Root() {
  return (
    <>
      <main className="flex">
        <TeacherHasLoginRoute>
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
        </TeacherHasLoginRoute>
      </main>
    </>
  );
}
