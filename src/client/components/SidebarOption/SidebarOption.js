import React, { useState } from "react";
import { Scrollable } from "@shopify/polaris";

export default function SidebarOption(props) {
  const [background, setBackground] = useState("");

  return (
    <div
      className="ItemOptionStyle"
      style={{
        backgroundColor: background,
      }}
      onClick={() => {
        console.log("phong");
        setBackground("linear-gradient(180deg, #ffa450 0%, #ff4177 100%)");
      }}
    >
      <img src={props.data.src} />
      <p>{props.data.name}</p>
    </div>
  );
}
