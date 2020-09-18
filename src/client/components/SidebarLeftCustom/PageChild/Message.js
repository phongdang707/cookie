import React, { Fragment } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import "./style.scss";

export default function Message() {
  const dispatch = useDispatch();
  let hanldeInputMessage = (e) => {
    console.log(e.target.value);
  };
  let submitMessage = () => {
    dispatch();
  };
  return (
    <div className="message">
      <div className="header">
        <HiOutlineArrowNarrowLeft /> Message
      </div>
      <div class="small">MESSAGE</div>
      <div className="header-input">
        <input onChange={(e) => hanldeInputMessage(e)}></input>
      </div>
      <div className="btn-submit" onClick={() => submitMessage()}>
        Save
      </div>
    </div>
  );
}
