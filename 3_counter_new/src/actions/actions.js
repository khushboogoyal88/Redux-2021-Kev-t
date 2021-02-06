export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const RESET = "RESET";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const add = () => ({ type: ADD, value: 100 });
export const remove = () => ({ type: REMOVE, value: 100 });
export const reset = () => ({ type: RESET });
export const storeResult = (currentState) => ({
  type: STORE_RESULT,
  value: currentState,
});
export const deleteResult = (id) => ({
  type: DELETE_RESULT,
  id: id,
});
