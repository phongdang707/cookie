import React from "react";
import { useSelector } from "react-redux";
import A from "./A";

export default function Content(props) {
  return (
    <div class="content">
      {props.message} <A></A>
    </div>
  );
}
