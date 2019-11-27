import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions";

export default () => {
  const { count } = useSelector(store => store.counter);;
  const dispatch = useDispatch();
  const increment = () => dispatch({ type: actions.INCREMENT });
  const decrement = () => dispatch({ type: actions.DECREMENT });

  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </React.Fragment>
  );
};
