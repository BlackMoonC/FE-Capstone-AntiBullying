import { useState, useRef, useEffect } from "react";
import axios from "axios";
export default function index({ openModal, closeModal }) {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    message: "",
  });

  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
  }, [openModal]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm ({...form,  [name]: value });
    console.log(form);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    console.log("Jalan")
    const { currentPassword, newPassword, confirmPassword } = form;

    if (
      currentPassword === "" ||
      newPassword === "" ||
      confirmPassword === ""
    ) {
      setForm({...form, message: "Please fill in all fields." });
      return;
    }

    if (newPassword !== confirmPassword) {
      setForm({...form, message: "New password and confirmation do not match." });
      return;
    }

    // You can add code here to send the currentPassword and newPassword to the server for verification and password change.
    const token = Cookies.get("token");
    await axios.post("https://antibullying-test.fly.dev/api/users/change-password",{
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res.data.data);
    });

    // If the server successfully changes the password, you can display a success message.
    setForm({...form, message: "Password changed successfully." });

    // Clear the form fields
    // setForm(...form, {
    //   currentPassword: "",
    //   newPassword: "",
    //   confirmPassword: "",
    // });
  };

  return (
    <dialog ref={ref} className="p-8 w-7/12 text-left">
<form className="bg-white rounded-md flex-1 ">
  <div className="form-group mb-4">
    <label htmlFor="new-password" className="font-semibold">
      Password Lama <span className="text-red-700">*</span>
    </label>
    <input
      id="new-password"
      className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
      type="password"
      placeholder="Ketik password lama Anda disini ..."
    />
  </div>
  <div className="form-group mb-4">
    <label htmlFor="old-password" className="font-semibold">
      Password Baru <span className="text-red-700">*</span>
    </label>
    <input
      id="old-password"
      className="date block w-full bg-[#F1F2F5] rounded-md mt-2 p-2 "
      type="password"
      placeholder="Ketik password baru Anda disini ..."
    />
  </div>
  <div className="form-group mb-8">
    <label htmlFor="confirm-password" className="font-semibold">
      Konfirmasi Password Baru<span className="text-red-700">*</span>
    </label>
    <input
      id="confirm-password"
      className="block w-full bg-[#F1F2F5] rounded-md mt-2 p-2"
      type="password"
      placeholder="Ketik konfirmasi password baru Anda disini ..."
    />
  </div>
  <div className="flex justify-center mt-16 mb-5">
  <button type="button" onClick={closeModal} className="mr-5 items-center bg-slate-400 text-white px-14 py-2 rounded-md">
    Cancel
  </button>
  <button className=" bg-[var(--secondary-color)] text-white px-14 py-2 rounded-md">
    Submit
  </button>
  </div>
</form>
    </dialog>
  );
}
