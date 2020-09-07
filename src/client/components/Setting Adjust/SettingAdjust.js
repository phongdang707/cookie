import React, { useState } from "react";
import { Scrollable } from "@shopify/polaris";
import SidebarExampleSidebar from "../Sidebar/Sidebar";

export default function SettingAdjust() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let onSetSidebarOpen = (open) => {
    setSidebarOpen({ sidebarOpen: open });
  };
  return (
    <div>
      <div className="setting">
        <div className="setting__cookie">
          <Scrollable shadow style={{ height: "400px" }}>
            <SidebarExampleSidebar></SidebarExampleSidebar>
          </Scrollable>
        </div>
      </div>
    </div>
  );
}
