import React from "react";
import CounterButtons from "./Buttons/CounterButtons";
import CounterValue from "./Counter/CounterValue";

const ManageCounter = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">Manage Your Counter App</h1>

      <CounterValue />

      {/* Buttons */}
      <CounterButtons />
    </div>
  );
};

export default ManageCounter;
