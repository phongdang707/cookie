import React, { useState, Fragment, useEffect } from "react";
import Sidebar from "react-sidebar";

import SettingStylePage from "../SettingStylePage/SettingStylePage";
import { Button, Icon, Scrollable } from "@shopify/polaris";
import { SettingsMajorMonotone } from "@shopify/polaris-icons";
import SidebarOption from "../SidebarOption/SidebarOption";

const arrStyle = [
  {
    src: "https://elfsight.com/assets/cookie-consent/templates/top-banner.jpg",
    name: "Top Banner",
  },
  {
    src:
      "https://elfsight.com/assets/cookie-consent/templates/center-floating-box.jpg",
    name: "Right Floating Box",
  },
  {
    src: "https://elfsight.com/assets/cookie-consent/templates/top-banner.jpg",
    name: "Center Floating Box",
  },
];

export default function SidebarLeft() {
  let initStyle = {
    mySidebarWidth: "",
    mySidebarDis: "none",
    openNav: "inline-block",
    main: "0%",
    transition: "all 1s ease 0s",
  };
  const [sidebarOpen, setSidebarOpen] = useState(initStyle);

  let open = () => {
    setSidebarOpen({
      mySidebarWidth: "30%",
      main: "30%",
      mySidebarDis: "block",
      openNav: "none",
      transition: initStyle.transition,
    });
  };
  let close = () => {
    setSidebarOpen(initStyle);
  };

  const todoItems = arrStyle.map((item, index) => (
    <SidebarOption data={item} key={index}></SidebarOption>
  ));

  return (
    <div className="setting__background">
      <div
        style={{
          display: sidebarOpen.mySidebarDis,
          width: sidebarOpen.mySidebarWidth,
        }}
        id="mySidebar"
      >
        <h1>Select a template to start with</h1>
        <div style={{ height: "400px", overflow: "auto" }}>{todoItems}</div>

        <Button primary onClick={close}>
          Close
        </Button>
      </div>
      <div
        id="main"
        style={{
          marginLeft: sidebarOpen.main,
          transition: sidebarOpen.transition,
        }}
      >
        <div>
          <div
            style={{
              display: sidebarOpen.openNav,
            }}
            id="openNav"
            onClick={open}
          >
            <Icon backdrop={true} source={SettingsMajorMonotone} />
          </div>

          <div>
            <SettingStylePage></SettingStylePage>
          </div>
        </div>
      </div>
    </div>
  );
}
