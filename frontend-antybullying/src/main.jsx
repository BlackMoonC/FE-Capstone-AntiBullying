import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import StudentLayout from "./routes/studentLayout";
// Teacher
import LoginTeacher from './pages/teacher/login'
import DashboardsTeacher from './pages/teacher'
import TeacherDataMurid from './pages/teacher/data_murid'
import ProfileTeacher from './pages/teacher/profile_saya'
import InputSP from './pages/teacher/inputSP'

// Student
import LoginStudent from './pages/student/login'
import ReportStudent from './pages/student/sendReport'
import ProfileStudent from './pages/student/profile'
import StatusReport from './pages/student/statusReport'

const router = createBrowserRouter([
  {
    path: "/teacher",
    element: <Root />,
    children:[
      {
        index: true,
        element: <DashboardsTeacher />,
      },
      {
        path: 'data-murid',
        element: <TeacherDataMurid />,
      },
      {
        path: 'profile',
        element: <ProfileTeacher />,
      },
      {
        path: 'Input-Surat-Peringatan',
        element: <InputSP />,
      },
    ], 
  },
  {
    path: '/teacher/login',
    element: <LoginTeacher />,
  },
  {
    path: '/student/login',
    element: <LoginStudent />,
  },
  {
    path: "/student",
    element: <StudentLayout />,
    children:[
      {
        path: 'send-report',
        element: <ReportStudent />,
      },
      {
        path: 'profile',
        element: <ProfileStudent />,
      },
      {
        path: 'status-report',
        element: <StatusReport />,
      },
    ], 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
