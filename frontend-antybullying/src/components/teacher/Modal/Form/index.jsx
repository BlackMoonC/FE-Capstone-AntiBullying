import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function index({ close, doneHandleInput }) {
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
      const token = Cookies.get("token");
      console.log(token);
      await axios.post("https://antibullying-test.fly.dev/api/users/change-password",
      {
        kataSandiLama: currentPassword,
        kataSandiBaru: newPassword,
        konfirmasiKataSandi: confirmPassword
      }
      ,{
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.pesan);
        setForm({
          ...form,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        doneHandleInput(res.data.pesan);
        return;
      }).catch((err) => {
        console.log(err.data.pesan);
      });
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
