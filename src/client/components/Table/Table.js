import React from "react";
const { Page, Card, DataTable } = require("@shopify/polaris");

function DataTableExample() {
  const rows = [
    // ["Emerald Silk Gown", "$875.00", 124689, 140, "$122,500.00"],
    // ["Mauve Cashmere Scarf", "$230.00", 124533, 83, "$19,090.00"],
    // [
    //   "Navy Merino Wool Blazer with khaki chinos and yellow belt",
    //   "$445.00",
    //   124518,
    //   32,
    //   "$14,240.00",
    // ],
  ];

  return (
    <Card>
      <DataTable
        columnContentTypes={[
          "text",
          "numeric",
          "numeric",
          "numeric",
          "numeric",
        ]}
        headings={["Name", "Installation", "Last Update", "Actions", "Enabled"]}
        rows={rows}
      />
    </Card>
  );
}
export default DataTableExample;
