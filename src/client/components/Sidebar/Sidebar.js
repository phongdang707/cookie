import React, { useState, Fragment } from "react";
import Sidebar from "react-sidebar";

import SettingStylePage from "../SettingStylePage/SettingStylePage";
import { Button } from "@shopify/polaris";

export default function SidebarLeft() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let RenderSideBarContent = () => {
    return (
      <Fragment>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setSidebarOpen(false)}
        >
          Close sidebar
        </Button>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setSidebarOpen(false)}
        >
          Sang trái
        </Button>
      </Fragment>
    );
  };
  return (
    <div className="setting__background">
      <Sidebar
        sidebar={<RenderSideBarContent></RenderSideBarContent>}
        open={sidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => setSidebarOpen(true)}
        >
          Open sidebar
        </Button>
        <SettingStylePage></SettingStylePage>
      </Sidebar>
    </div>
  );
}
