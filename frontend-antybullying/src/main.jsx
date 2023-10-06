import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import DashboardsTeacher from './pages/teacher'
import TeacherDataMurid from './pages/teacher/data_murid'

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
    ], 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
