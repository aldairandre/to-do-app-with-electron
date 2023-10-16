import React from "react";
import AddTask from "./AddTask";
import TestForm from "./TestForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <h1 className="text-5xl w-full text-center">Create Task</h1>
      <div className="max-w-md m-auto mt-10">
        {/* <AddTask /> */}
        <TestForm/>
      </div>
    </div>
  );
};

export default page;
