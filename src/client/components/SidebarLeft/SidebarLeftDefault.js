import React, { Fragment } from "react";
import SidebarOption from "../SidebarOption/SidebarOption";
import { useDispatch } from "react-redux";
import { changeSidebarLeft } from "../../actions/app_data";
var classNames = require("classnames");
export default function SidebarLeftDefault() {
  const dispatch = useDispatch();
  const arrStyle = [
    {
      src:
        "https://elfsight.com/assets/cookie-consent/templates/top-banner.jpg",
      name: "Top Banner",
    },
    {
      src:
        "https://elfsight.com/assets/cookie-consent/templates/right-floating-box.jpg",
      name: "Right Floating Box",
    },
    {
      src:
        "https://elfsight.com/assets/cookie-consent/templates/center-floating-box.jpg",
      name: "Center Floating Box",
    },
    {
      src:
        "https://elfsight.com/assets/cookie-consent/templates/left-floating-box.jpg",
      name: "Left Floating Box",
    },
    {
      src:
        "https://elfsight.com/assets/cookie-consent/templates/bottom-banner.jpg",
      name: "Bottom Banner",
    },
  ];

  let classNameItem = classNames(
    { ItemOptionStyle: true },
    { backgroundStyle: false }
  );

  const todoItems = arrStyle.map((item, index) => (
    <SidebarOption data={{ item, classNameItem }} key={index}></SidebarOption>
  ));
  return (
    <Fragment>
      <div className="h1">Select a template to start with</div>
      <div className="list">{todoItems}</div>
      <div className="continue">
        <div
          className="btn-continue"
          onClick={() => {
            dispatch(changeSidebarLeft(true));
          }}
        >
          Continue with this template{" "}
        </div>
      </div>
    </Fragment>
  );
}
