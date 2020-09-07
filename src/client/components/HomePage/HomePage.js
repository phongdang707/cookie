import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchPage } from "../../actions/app_data";

import DataTableExample from "../Table/Table";
import { Button, Heading, Layout } from "@shopify/polaris";

export default function HomePage() {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Layout>
        <Layout.Section>
          <Heading>Widgets</Heading>
        </Layout.Section>
        <Layout.Section secondary>
          <Button primary onClick={() => dispatch(switchPage(2))}>
            Create widget
          </Button>
        </Layout.Section>
      </Layout>
      <p>
        Create, edit or remove your widgets. Press install to place them on the
        required page.
      </p>
      <DataTableExample></DataTableExample>
    </Fragment>
  );
}
