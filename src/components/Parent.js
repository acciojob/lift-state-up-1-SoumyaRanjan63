// Parent.js
import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
 
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div className="parent">
      <Child showModal={showModal} onOpenModal={handleOpenModal} />
    </div>
  );
};

export default Parent;
