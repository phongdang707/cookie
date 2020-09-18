import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCompliance } from "../../../actions/app_data";
import { MdKeyboardArrowRight } from "react-icons/md";
import { changeChildPage } from "../../../actions/app_data";

export default function Content() {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.app_data.dataSwitchPage);
  let handleSetOpt = (e) => {
    if (e.target.value == "justTell") {
      dispatch(changeCompliance(true));
    } else {
      dispatch(changeCompliance(false));
    }
  };

  // const { dataSwitchPage } = state;

  return (
    <div className="content">
      <div className="small">COMPLIANCE TYPE</div>
      <label className="container">
        Just tell users that you use cookies
        <input
          type="radio"
          defaultChecked="checked"
          name="radio"
          value="justTell"
          onChange={(e) => handleSetOpt(e)}
        />
      </label>
      <label className="container">
        Ask users to opt into cookies
        <input
          type="radio"
          name="radio"
          value="askUser"
          onChange={(e) => handleSetOpt(e)}
        />
      </label>
      <div
        className="container"
        onClick={() => dispatch(changeChildPage("message", true))}
      >
        Message
        <div className="arrow-right">
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className="container">
        Policy
        <div className="arrow-right">
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className="container">
        Confirmation Button{" "}
        <div className="arrow-right">
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className="container">
        Cookie Icon{" "}
        <div className="arrow-right">
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
}
