import React, { Fragment, useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import "./style.scss";
import { changeMessage } from "../../../actions/app_data";

export default function Message() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  let hanldeInputMessage = (e) => {
    setMessage(e.target.value);
  };
  let submitMessage = () => {
    dispatch(changeMessage(message));
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
