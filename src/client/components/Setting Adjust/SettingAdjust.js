import React, { useState } from "react";
import { Scrollable } from "@shopify/polaris";
import SidebarExampleSidebar from "../Sidebar/Sidebar";

export default function SettingAdjust() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let onSetSidebarOpen = (open) => {
    setSidebarOpen({ sidebarOpen: open });
  };
  return (
    <div className="setting">
      <div className="setting__cookie">
        <SidebarExampleSidebar></SidebarExampleSidebar>
      </div>
    </div>
  );
}
