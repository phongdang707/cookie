import React, { Fragment, useEffect, useState } from "react";
import SidebarOption from "../SidebarOption/SidebarOption";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import SidebarLeftCustom from "../SidebarLeftCustom/SidebarLeftCustom";
import SidebarLeftDefault from "./SidebarLeftDefault";
import axios from "axios";

export default function SidebarLeft() {
  const sidebarCustom = useSelector(
    (state) => state.app_data.sidebaLeft.showAll
  );
  const [state, setstate] = useState(sidebarCustom);

  useEffect(() => {
    setstate(sidebarCustom);
    axios
      .get(`/admin/getAllTheme`)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.log(err));
  }, [sidebarCustom]);

  let switchSidebar = () => {
    if (state == true) {
      return <SidebarLeftCustom></SidebarLeftCustom>;
    } else {
      return <SidebarLeftDefault></SidebarLeftDefault>;
    }
  };

  return <div className="sideBarLeft">{switchSidebar()}</div>;
}
