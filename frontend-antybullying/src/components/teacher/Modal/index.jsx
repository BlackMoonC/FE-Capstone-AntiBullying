import { useRef, useEffect, useState } from "react";
import Form from "./Form";

export default function index({ openModal, closeModal }) {
  let [choosenModal, setChoosenModal] = useState(true);
  let [message, setMessage] = useState("");

  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
  }, [openModal]);

  const closeNotification = () => {
    setChoosenModal(true);
    closeModal();
  };

  const handleInput = (inputMessage) => {
    setMessage(inputMessage);
    setChoosenModal(false);
  };

  return (
    <dialog ref={ref} className="p-8 w-7/12 text-left">
      {choosenModal === true ? (
        <Form close={closeModal} doneHandleInput={handleInput} />
      ) : (
        <div className="text-center">
          <h1 className="text-4xl mb-3">{message}</h1>
          <button
            onClick={closeNotification}
            className=" bg-[var(--secondary-color)] text-white px-14 py-2 rounded-md">
            Next
          </button>
        </div>
      )}
    </dialog>
  );
}
