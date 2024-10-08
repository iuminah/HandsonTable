"use client";
import React from "react";
import { HotTable, HotTableProps } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";
import { userData } from "../data/userData";

registerAllModules();

type GridProps = {
  data: typeof userData;
};

export default function Table(props: GridProps) {
  const currentDate = new Date();

  // Format the date as needed (e.g., YYYY-MM-DD)
  const formattedDate = currentDate.toLocaleDateString();
  console.log("aaa");

  return (
    <div>
      <HotTable
        className="custom-table"
        data={props.data}
        rowHeaders={true}
        colHeaders={["Họ và tên", "Age", "Other"]}
        cell={[
          {
            row: 0,
            col: 0,
            className: "custom-cell",
          },
        ]}
        licenseKey="non-commercial-and-evaluation" // for non-commercial use only
      />
      <div>DATE : {formattedDate}</div>
    </div>
  );
}
