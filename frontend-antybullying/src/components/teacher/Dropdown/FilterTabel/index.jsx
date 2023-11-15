import { useState } from "react";

function index({ inputDropdown }) {
  const [tindakan, setTindakan] = useState("Filter");
  const [show, setShow] = useState(false);
  const optionTindakan = [
    {
      title: "Selesai",
      message: "selesai",
    },
    {
      title: "Belum Diproses",
      message: "belum diproses",
    },
    {
      title: "Sedang Diproses",
      message: "sedang diproses",
    },
  ];

  const changeInput = (value) => {
    setTindakan(value.title);
    inputDropdown(value.message);
    setShow(false);
  };

  return (
    <>
      <div className="w-1/6">
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="flex w-full items-center justify-between mb-3 bg-[var(--secondary-color)] shadow-md text-white px-14 py-2 rounded-md">
          <p className="mr-5">{tindakan}</p>
          {show !== true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </button>
        {show && (
          <div className="bg-[var(--secondary-color)] absolute shadow-md text-white rounded-md ">
            {optionTindakan.map((item, i) => (
              <div
                onClick={() => changeInput(item)}
                className="hover:bg-slate-300 rounded-md px-14 py-2 hover:text-black"
                key={i}>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default index;
