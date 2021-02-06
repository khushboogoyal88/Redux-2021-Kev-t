import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { storeResult, deleteResult } from "../actions/actions";

const Results = () => {
  const results = useSelector((state) => state.rts.results);
  const dispatch = useDispatch();
  const currentCounter = useSelector((state) => state.ctr.counter);

  return (
    <div>
      <button onClick={() => dispatch(storeResult(currentCounter))}>
        Store result
      </button>
      <ul>
        {results.map((item) => (
          <li onClick={() => dispatch(deleteResult(item.id))} key={item.id}>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
