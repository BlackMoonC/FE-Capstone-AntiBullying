import React from "react";
import { Link } from "react-router-dom";

export default function index({hero}) {
  return (
    <>
      <div className="flex gap-1 w-44 mb-10 bg-white rounded-md">
        <Link
          to="/teacher/login"
          className={`bg-[var(--${
            hero !== "teacher" ? "primary" : "secondary"
          }-color)] ${
            hero !== "teacher" ? "opacity-0" : ""
          }  px-6 py-1 text-white rounded-md`}>
          Guru
        </Link>
        <Link
          to="/student/login"
          className={`bg-[var(--${
            hero === "student" ? "primary" : "secondary"
          }-color)] ${
            hero !== "student" ? "opacity-0" : ""
          } px-5 py-1 text-white rounded-md`}>
          Murid
        </Link>
      </div>
    </>
  );
}
