import React from "react";
import Heading from "./Heading";
import AddItem from "./AddItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todo = () => {
  return (
    <>
      <div className="container">
        <ToastContainer />
        <Heading />
        <AddItem />
      </div>
    </>
  );
};

export default Todo;
