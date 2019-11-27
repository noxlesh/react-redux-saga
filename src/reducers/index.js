import { combineReducers } from "redux";
import actions from "../actions";

const initialState = {
  counter: 0,
};

const count = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT_STORE:
      return { counter: ++state.counter };
    case actions.DECREMENT_STORE:
      return { counter: --state.counter };
    default:
      return state;
  }
};

export default combineReducers({
  count,
});

