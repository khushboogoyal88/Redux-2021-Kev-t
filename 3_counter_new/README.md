1. Npm install redux

2. Npm install react-redux

3. Prep store

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

4. Make reducer (reducers / Counter.js)

```js
const reducer = (state = initialState, action) => {
  return state;
};
const initialState = {
  counter: 0,
};
export default reducer;
```

5. Connect reducer with the store

```js
import counterReducer from "./reducers/Counter.js";
const store = createStore(counterReducer);
```

6. Connect Counter.js with the state (useSelector)

```js
import React from "react";
import { useSelector } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  );
};
export default Counter;
```

7. Add buttons if there is no buttons yet in Counter.js

8. Add actions

```js
export const INCREASE = "INCREASE";
```

9. Add dispatchers

```js
import { useSelector, useDispatch } from "react-redux";
import \* as actionTypes from "../actions";

const increase = () => ({ type: actionTypes.INCREASE }); //note that you can do it directly to the onclick also

const Counter = () => {
const dispatch = useDispatch();
return (

<div>
<h1>Counter: {counter}</h1>
<button onClick={() => dispatch(increase())}>Increase one</button>
</div>
);
};
export default Counter;
```

10. Edit reducer

```js
const reducer = (state = initialState, action) => {
switch (action.type) {
case actionTypes.INCREASE:
return { ...state, counter: state.counter + 1 };
return state;
};
```

11. Add all other buttons also. But before that. Let's clean actions. It will start look messy and should not be in Counter.

Actions.js

```js
export const INCREASE = "INCREASE";

export const increase = () => ({ type: INCREASE });
```

Counter.js

```js
import { increase } from "../actions/actions";
```

12. Make all buttons

Counter.js

```js
import { increase, decrease, add, remove, reset } from "../actions/actions";

<button onClick={() => dispatch(increase())}>Increase one</button>
<button onClick={() => dispatch(decrease())}>Decrease one</button>
<button onClick={() => dispatch(add())}>Add five</button>
<button onClick={() => dispatch(remove())}>Remove five</button>
<button onClick={() => dispatch(reset())}>Reset</button>
```

Reducer.js

```js
switch (action.type) {
case actionTypes.INCREASE:
return { ...state, counter: state.counter + 1 };
case actionTypes.DECREASE:
return { ...state, counter: state.counter - 1 };
case actionTypes.ADD:
return { ...state, counter: state.counter + 5 };
case actionTypes.REMOVE:
return { ...state, counter: state.counter - 5 };
}
return state;
};
```

Actions.js

```js
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const RESET = "RESET";
export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});
export const add = () => ({
  type: ADD,
});
export const remove = () => ({
  type: REMOVE,
});
export const reset = () => ({
  type: RESET,
});
```

13. Currently we do add and remove 5 manually. Quite bad idea. Remember with actions you can send whatever to reducer? Modify your actions and send data out as action.value

```js
Actions.js;
export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});
export const add = () => ({
  type: ADD,
  value: 5,
});
export const remove = () => ({
  type: REMOVE,
  value: 5,
});
export const reset = () => ({
  type: RESET,
});
```

Reducer.js

```js
switch (action.type) {
  case actionTypes.INCREASE:
    return { ...state, counter: state.counter + 1 };
  case actionTypes.DECREASE:
    return { ...state, counter: state.counter - 1 };
  case actionTypes.ADD:
    return { ...state, counter: state.counter + action.value };
  case actionTypes.REMOVE:
    return { ...state, counter: state.counter - action.value };
  case actionTypes.RESET:
    return { ...state, counter: 0 };
}
```

14. Next step is to store results. For that add button and list placeholder for store results

```js
import React from "react";
const Results = () => {
  return (
    <div>
      <button>Store results</button>
      <ul>
        <li>Here will be our list</li>
      </ul>
    </div>
  );
};
export default Results;
```

15. Make (test) array to resultReducer.js

```js
const reducer = (state = initialState, action) => {
  return state;
};
const initialState = {
  results: [
    { id: "1", value: "Meie kassil kriimud silmad" },
    { id: "2", value: "kutsus lapsi lugema" },
  ],
};
export default reducer;
```

16. Combine reducers in index.js

```js
import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer.js";
import resultsReducer from "./reducers/resultsReducer.js";
const rootReducer = combineReducers({
  counter: counterReducer,
  results: resultsReducer,
});
const store = createStore(rootReducer);
```

17. Show results in list:

```js
import { useSelector } from "react-redux";

const Results = () => {
  const results = useSelector((state) => state.results.results);
  return (
    <div>
      <button>Store results</button>
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};
export default Results;
```

Fix also counter.js

```js
const counter = useSelector((state) => state.counter.counter);
```

18. Make actions

```js
export const STORE_RESULTS = "STORE_RESULTS";

export const storeResult = () => ({ type: STORE_RESULTS });
```

19. Add dispatchers

```js
import { useSelector, useDispatch } from "react-redux";
import { storeResult } from "../actions/actions";

const Results = () => {
const results = useSelector((state) => state.results.results);
const dispatch = useDispatch();

return (
<div>
<button onClick={() => dispatch(storeResult())}>Store results</button>
<ul>
{results.map((item) => (
<li key={item.id}>{item.value}</li>
))}
</ul>
</div>
```

20. Check current counter and send it to action as value

```js
const currentState = useSelector((state) => state.counter.counter);

return (
<div>
<button onClick={() => dispatch(storeResult(currentState))}>
Store results
</button>
```

21. Take data as value in actions.js

```js
export const storeResult = (currentState) => ({
  type: STORE_RESULTS,
  value: currentState,
});
```

22. Modify resultsReducer.js

```js
import \* as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
switch (action.type) {
case actionTypes.STORE_RESULTS:
return {
...state,
results: state.results.concat({
id: new Date(),
value: action.value,
}),
};
}
return state;
};
const initialState = {
results: [
{ id: "1", value: "Meie kassil kriimud silmad" },
{ id: "2", value: "kutsus lapsi lugema" },
],
};
export default reducer;
```

23. Remove items from array. First edit actions.js

```js
export const DELETE_RESULTS = "DELETE_RESULTS";

export const deleteResult = (id) => ({
  type: DELETE_RESULTS,
  id: id,
});
```

24. Send out id of the item id

```js
import { storeResult, deleteResult } from "../actions/actions";

<li onClick={() => dispatch(deleteResult(item.id))} key={item.id}>
  {item.value}
</li>;
```

25. Update resultsReducer.js

```js
case actionTypes.DELETE_RESULTS:
const updatedArray = state.results.filter(
(result) => result.id !== action.id
);
return {
...state,
results: updatedArray,
};
}
```
