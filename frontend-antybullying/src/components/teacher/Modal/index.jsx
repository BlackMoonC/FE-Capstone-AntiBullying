import {useRef, useEffect} from 'react'

export default function index({openModal, closeModal, children}) {
    const ref = useRef()

    useEffect(() => {
        if(openModal){
            ref.current.showModal();
        } else {
            ref.current.close();
        }
    }, [openModal]) 
  return (
    <dialog ref={ref}>
        {children}
        <button type="button" onClick={closeModal}>Close</button>
    </dialog>
  )
}
