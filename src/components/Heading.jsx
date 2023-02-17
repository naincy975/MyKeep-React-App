import React from "react";
import { FcTodoList } from "react-icons/fc";
const Heading = () => {
  return (
    <>
      <h1>
        <FcTodoList className="icon1" />
        Welcome to <strong style={{ color: "#6868e9" }}>MyKeep</strong> App!!
        <FcTodoList className="icon2" />
      </h1>
    </>
  );
};
export default Heading;
