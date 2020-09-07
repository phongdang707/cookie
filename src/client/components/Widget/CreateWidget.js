import React, { Fragment, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { switchPage } from "../../actions/app_data";
import { Button, TextField, Icon, Layout } from "@shopify/polaris";
import SettingAdjust from "../Setting Adjust/SettingAdjust";
import { MobileBackArrowMajorMonotone } from "@shopify/polaris-icons";

export default function CreateWidget() {
  const [value, setValue] = useState("");
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    []
  );

  const handleClearButtonClick = useCallback(() => setTextFieldValue(""), []);

  const handleChange = useCallback((newValue) => setValue(newValue), []);
  const dispatch = useDispatch();

  return (
    <div className="WidgetPage">
      <p
        variant="contained"
        color="primary"
        onClick={() => dispatch(switchPage(1))}
      >
        <Button plain icon={MobileBackArrowMajorMonotone}>
          Back to list
        </Button>
      </p>
      <p className="WidgetPage__Head">Create Widget</p>
      <p className="WidgetPage__Intro">
        Configure and save your widget. And then install it.
      </p>
      <hr></hr>
      <div className="WidgetNameArea">
        <span className="WidgetNameArea__Name">Widget name</span>
        <input className="WidgetNameArea__Input"></input>
        <p className="WidgetNameArea__Intro">
          Name your widget. The name will be displayed only in your admin panel.
        </p>
      </div>
      {/* <TextField
        value={textFieldValue}
        onChange={handleTextFieldChange}
        clearButton
        onClearButtonClick={handleClearButtonClick}
      /> */}

      <hr></hr>
      <div className="WidgetNameArea__Name">Adjust settings</div>
      <SettingAdjust></SettingAdjust>
    </div>
  );
}
