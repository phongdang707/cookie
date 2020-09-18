import React from "react";

export default function Button(props) {
  console.log("props", props);
  return <div class={`btn-ok ${props.data}`}>{props.text}</div>;
}
