import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increase, decrease, add, remove, reset } from "../actions/actions";

const Counter = () => {
  const counter = useSelector((state) => state.ctr.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>Counts: {counter}</h1>
        <button onClick={() => dispatch(increase())}>Increase one</button>
        <button onClick={() => dispatch(decrease())}>Decrease one</button>
        <button onClick={() => dispatch(add())}>Add hundred</button>
        <button onClick={() => dispatch(remove())}>Remove hundred</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
