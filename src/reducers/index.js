import { combineReducers } from "redux";
import actions from "../actions";

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT_STORE:
      return { count: ++state.count };
    case actions.DECREMENT_STORE:
      return { count: --state.count };
    default:
      return state;
  }
};

export default combineReducers({
  counter,
});

