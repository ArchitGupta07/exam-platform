"use client";
import Modal from "@/components/modal/modal";
import React, { useState } from "react";
// import Modal from "../components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <div>
      <h1>Next.js Modal Example</h1>
      <button onClick={toggleModal}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>This is a Modal!</h2>
        <p>You can put any content here, like forms, text, or buttons.</p>
      </Modal>
    </div>
  );
}
