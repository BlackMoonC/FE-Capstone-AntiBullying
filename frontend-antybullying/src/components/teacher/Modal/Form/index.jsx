import { useState, useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";

import { GlobalContext } from "../../../../context/GlobalContext";

function index({ close, doneHandleInput }) {
  const { handleFunction } = useContext(GlobalContext);
  const { handleAPIChangePassword } = handleFunction;

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const handleChangePassword = async (e) => {
    try {
      e.preventDefault();
      const { currentPassword, newPassword, confirmPassword } = form;

      if (
        currentPassword === "" ||
        newPassword === "" ||
        confirmPassword === ""
      ) {
        // changeMessage("Please fill in all fields." );
        doneHandleInput("Silakan isi semua kolom.");
        return;
      }

      if (newPassword !== confirmPassword) {
        // changeMessage("New password and confirmation do not match.");
        doneHandleInput("password baru dan konfirmasi password baru tidak cocok.");
        return;
      }
      // You can add code here to send the currentPassword and newPassword to the server for verification and password change.
      console.log(form)  
      await handleAPIChangePassword(form)
      doneHandleInput("Password telah berhasil diubah");
      // Clear the form fields
    } catch (e) {
      doneHandleInput(e)
    }
  };

  return (
    <>
      <form
        onSubmit={handleChangePassword}
        className="bg-white rounded-md flex-1 ">
        <div className="form-group mb-4">
          <label htmlFor="new-password" className="font-semibold">
            Password Lama <span className="text-red-700">*</span>
          </label>
          <input
            name="currentPassword"
            className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
            type="password"
            placeholder="Ketik password lama Anda disini ..."
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="old-password" className="font-semibold">
            Password Baru <span className="text-red-700">*</span>
          </label>
          <input
            name="newPassword"
            className="date block w-full bg-[#F1F2F5] rounded-md mt-2 p-2 "
            type="password"
            placeholder="Ketik password baru Anda disini ..."
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mb-8">
          <label htmlFor="confirm-password" className="font-semibold">
            Konfirmasi Password Baru<span className="text-red-700">*</span>
          </label>
          <input
            name="confirmPassword"
            className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
            type="password"
            placeholder="Ketik konfirmasi password baru Anda disini ..."
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex justify-center mt-16 mb-5">
          <button
            type="button"
            onClick={close}
            className="mr-5 items-center bg-slate-400 text-white px-14 py-2 rounded-md">
            Cancel
          </button>
          <button
            type="submit"
            className=" bg-[var(--secondary-color)] text-white px-14 py-2 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default index;
