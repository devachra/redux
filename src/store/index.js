import "react-redux";

import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (prevState = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: prevState.counter + 1,
      showCounter: prevState.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: prevState.counter + action.value,
      showCounter: prevState.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: prevState.counter - 1,
      showCounter: prevState.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !prevState.showCounter,
      counter: prevState.counter,
    };
  }
  return prevState;
};

const store = createStore(counterReducer);

export default store;
