import React from "react";
import Parent from "./Parent";

const Child = ({ showModal, onOpenModal }) => {
  return (
    <div>
      <button onClick={onOpenModal}>Show Modal</button>
      {showModal && <div className="modal">This is a modal</div>}
    </div>
  );
};

export default Child;