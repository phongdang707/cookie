import React, { Fragment, useEffect, useState } from "react";
import Content from "../element/Content";
import Button from "../element/Button";
import Cookie from "../element/Cookie";
import { useSelector } from "react-redux";

export default function TopBanner() {
  const state = useSelector((state) => state.app_data.dataSetting);
  console.log("state", state);

  const { justTell } = state.content;
  const { message } = state.content.message.content;

  let button = () => {
    if (justTell == true) {
      return <Button text="OK"></Button>;
    } else if (justTell == false) {
      return (
        <Fragment>
          <Button text="Allow Cookies" data="ask"></Button>
          <Button text="Decline" data="ask"></Button>
        </Fragment>
      );
    }
  };

  return (
    <div className="top-banner">
      <Cookie></Cookie>
      <Content data={message}></Content>
      {button()}
    </div>
  );
}
