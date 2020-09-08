import React, { useState, useEffect, useCallback } from "react";
import { Scrollable } from "@shopify/polaris";
import { useSelector, useDispatch } from "react-redux";
import { changeStyleSelected } from "../../actions/app_data";
var classNames = require("classnames");

export default function SidebarOption(props) {
  const name = useSelector((state) => state.app_data.name);
  const dispatch = useDispatch();
  console.log("name", name);
  const [background, setBackground] = useState(props.data.classNameItem);
  useEffect(() => {
    if (name == props.data.item.name) {
      setBackground(
        classNames({ ItemOptionStyle: true }, { backgroundStyle: true })
      );
    } else {
      setBackground(
        classNames({ ItemOptionStyle: true }, { backgroundStyle: false })
      );
    }
  }, [name]);

  return (
    <div
      className={background}
      onClick={() => {
        dispatch(changeStyleSelected(props.data.item.name));
      }}
    >
      <img src={props.data.item.src} />
      <p>{props.data.item.name}</p>
    </div>
  );
}
