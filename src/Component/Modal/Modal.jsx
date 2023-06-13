import React from 'react';

const Modal = ({gunsDetails}) => {
    console.log(gunsDetails);
  const{name}=gunsDetails
    return (
        <> 
            <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="modal-box">
                    <button htmlFor="my_modal_4" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </form>
            </dialog>
        </>
    );
};

export default Modal;