import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchPage } from "../../actions/app_data";

import DataTableExample from "../Table/Table";
import { Button } from "@shopify/polaris";

export default function HomePage() {
  const dispatch = useDispatch();
  return (
    <div className="HomePage">
      <div className="HomePage__Heading">Widgets</div>
      <Button
        id="HomePage__btn"
        primary
        onClick={() => dispatch(switchPage(2))}
      >
        Create widget
      </Button>
      <p className="HomePage__Intro">
        Create, edit or remove your widgets. Press install to place them on the
        required page.
      </p>
      <DataTableExample></DataTableExample>
    </div>
  );
}
