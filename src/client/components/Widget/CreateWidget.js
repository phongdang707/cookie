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
      <span>Widget name</span>
      <TextField
        value={textFieldValue}
        onChange={handleTextFieldChange}
        clearButton
        onClearButtonClick={handleClearButtonClick}
      />
      <span>
        Name your widget. The name will be displayed only in your admin panel.
      </span>

      <div></div>
      <hr></hr>
      <h1>Adjust settings</h1>
      <SettingAdjust></SettingAdjust>
    </div>
  );
}
