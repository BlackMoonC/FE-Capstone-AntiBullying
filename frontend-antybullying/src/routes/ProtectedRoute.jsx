import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export const IsTeacherLoginPage = (props) => {
  return Cookies.get("token") !== undefined ? (
    <Navigate to={"/teacher"} />
  ) : (
    props.children
  );
};

export const IsStudentLoginPage = (props) => {
  return Cookies.get("token") !== undefined ? (
    <Navigate to={"/student/status-report"} />
  ) : (
    props.children
  );
};

export const TeacherHasLoginRoute = (props) => {
  return Cookies.get("token") !== undefined ? (
    props.children
  ) : (
    <Navigate to={"/teacher/login"} />
  );
};

export const StudentHasLoginRoute = (props) => {
  return Cookies.get("token") !== undefined ? (
    props.children
  ) : (
    <Navigate to={"/student/login"} />
  );
};
