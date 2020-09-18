import React from "react";
import { useSelector } from "react-redux";
import CenterFloatingBox from "./StyleComponent/CenterFloatingBox";
import RightFloatingBox from "./StyleComponent/RightFloatingBox";
import TopBanner from "./StyleComponent/TopBannerComponent";

export default function SidebarRight() {
  const name = useSelector((state) => state.app_data.name);

  let RenderStyle = () => {
    console.log("name", name);
    switch (name) {
      case "Top Banner":
        return <TopBanner></TopBanner>;
      case "Right Floating Box":
        return <RightFloatingBox></RightFloatingBox>;
      case "Center Floating Box":
        return <CenterFloatingBox></CenterFloatingBox>;
      // case "Left Floating Box":
      //   return
      default:
        return <div>errors</div>;
    }
  };
  return (
    <div className="sideBarRight">
      <RenderStyle></RenderStyle>
    </div>
  );
}
