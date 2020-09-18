import React, { useState } from "react";
import { Scrollable } from "@shopify/polaris";
import SidebarExampleSidebar from "../Sidebar/Sidebar";
import SidebarLeft from "../SidebarLeft/SidebarLeft";
import SidebarRight from "../SidebarRight/SidebarRight";

export default function SettingAdjust() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let onSetSidebarOpen = (open) => {
    setSidebarOpen({ sidebarOpen: open });
  };
  return (
    <div className="setting">
      {/* <div className="setting__cookie">
        <SidebarExampleSidebar></SidebarExampleSidebar>
      </div> */}
      <SidebarLeft></SidebarLeft>
      <SidebarRight></SidebarRight>
    </div>
  );
}
