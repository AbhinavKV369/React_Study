import {useReducer} from "react"

const useReducers = () => {
  const initialState = { count: 0 };

  function reducer(state, action) {
    if (action.type === "INCREMENT") {
      return { count: state.count + 1 };
    }
    if (action.type === "DECREMENT") {
      return { count: state.count - 1 };
    }
    if (action.type === "input") {
      return { count: action.payload };
    }
    if (action.type === "RESET") {
      return { count: 0 };
    }
    return state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <input
        type="Number"
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
        value={state.count}
      />
    </div>
  );
}

export default useReducers;
