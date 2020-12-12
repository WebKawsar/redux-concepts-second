import React, { useReducer } from 'react';



const UseReducerHook = () => {

    
  const initialState = {
    count: 0
  }

  const reducer = (state, action) => {
    
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 }

      case "DECREMENT":
        return { count: state.count - 1 }
    
      default:
        return state;
    }

  }

  const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{textAlign: "center"}}>

            <h2>UseReducer count: {state.count}</h2>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>

        </div>
    );
};

export default UseReducerHook;