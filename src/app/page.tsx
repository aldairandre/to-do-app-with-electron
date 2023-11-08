import React from "react";
import { DataTable } from "./components/table-tasks/data-table";
import { columns } from "./components/table-tasks/columns";
import { FAKEDATA } from "./components/table-tasks/fakeData";

export default function Home() {

  return (
    <>
      <h1 className="text-5xl w-full text-center mt-12 mb-12">Tasks</h1>
      <DataTable columns={columns} data={FAKEDATA} />
    </>
  );
}
