import React, { Fragment, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { switchPage } from "../../actions/app_data";
import { Button, TextField } from "@shopify/polaris";
import SettingAdjust from "../Setting Adjust/SettingAdjust";
import { Input } from "@material-ui/core";

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
    <Fragment>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(switchPage(1))}
      >
        Back to list
      </Button>
      <div>Creat eWidget</div>
      <p>Configure and save your widget. And then install it.</p>
      <hr></hr>
      <div>
        <TextField
          label="Store name"
          value={textFieldValue}
          onChange={handleTextFieldChange}
          clearButton
          onClearButtonClick={handleClearButtonClick}
        />
        <p>
          Name your widget. The name will be displayed only in your admin panel.
        </p>
      </div>
      <hr></hr>
      <h1>Adjust settings</h1>
      <SettingAdjust></SettingAdjust>
    </Fragment>
  );
}
