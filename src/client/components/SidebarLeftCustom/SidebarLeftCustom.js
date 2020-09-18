import { Card, Tabs } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Message from "./PageChild/Message";
import "./style.scss";
import Content from "./TabItem/Content";
import Layout from "./TabItem/Layout";
import Style from "./TabItem/Style";

const tabs = [
  {
    id: "content",
    content: "CONTENT",
    accessibilityLabel: "CONTENT",
    panelID: "content",
  },
  {
    id: "layout",
    content: "LAYOUT",
    panelID: "layout",
  },
  {
    id: "style",
    content: "STYLE",
    panelID: "style",
  },
];

export default function SidebarLeftCustom() {
  const [selected, setSelected] = useState(0);
  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );
  const state = useSelector((state) => state.app_data.sidebaLeft);
  console.log("state", state);

  // let tabsItem = () => {
  //   switch (selected) {
  //     case 0:
  //       return <Content></Content>;
  //     case 1:
  //       return <Layout></Layout>;
  //     case 2:
  //       return <Style></Style>;
  //     default:
  //       break;
  //   }
  // };

  let switchPage = () => {
    // switch (selected) {
    //   case 0:
    //     return (
    //       <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
    //         <Content></Content>
    //       </Tabs>
    //     );
    //   case 1:
    //     return (
    //       <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
    //         <Layout></Layout>
    //       </Tabs>
    //     );
    //   case 2:
    //     return (
    //       <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
    //         <Style></Style>
    //       </Tabs>
    //     );
    //   default:
    //     break;
    // }
    if (selected == 0 && state.message == false) {
      return (
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <Content></Content>
        </Tabs>
      );
    }
    if (selected == 1) {
      return (
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <Layout></Layout>
        </Tabs>
      );
    }
    if (selected == 2) {
      return (
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <Style></Style>
        </Tabs>
      );
    }
    if (selected == 0 && state.message == true) {
      return <Message></Message>;
    }
    if (state.policy == true) {
    }
    if (state.confirm == true) {
    }
    if (state.button == true) {
    }
    if (state.cookieIcon == true) {
    }
  };

  return <Card>{switchPage()}</Card>;
}
