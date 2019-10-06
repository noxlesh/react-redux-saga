import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import actions from "../../actions";

// export default props => {
//   const { counter, increment, decrement } = props;
export default () => {
  const counter = useSelector(store => store.counter);
  const dispatch = useDispatch();
  const increment = () => dispatch({ type: actions.INCREMENT });
  const decrement = () => dispatch({ type: actions.DECREMENT });
  return (
    <React.Fragment>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </React.Fragment>
  );
};

// export default connect(
//   store => {
//     return {
//       counter: store.counter
//     };
//   },
//   dispatch => {
//     return {
//       increment: () => dispatch({ type: actions.INCREMENT }),
//       decrement: () => dispatch({ type: actions.DECREMENT });
//     };
//   }
// )(Counter);
