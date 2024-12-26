import React, { useReducer } from "react";

const Reducer = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload };
      }
      default: {
        return state;
      }
    }
    // return {count : state.count +1}
  };
  const [state, dispatch] = useReducer(reducer, initialState, third);

  // const [count, setCount] = useState(0);
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>decrease</button>
      <br />
      <input
        type="number"
        value={state.count}
        onChange={(e) => dispatch({ type: "input", payload: e.target.value })}
      />
    </>
  );
};

export default Reducer;

/*
useReducer is similar to useState.
useState Provides state & setter function. But useReducer provides state and dispatch function.

the useReducer hook accepts 2 arguments
1. reducer function
2. initial state

and Returns: Current state and dispatch method

the reducer function specifies how the state gets updated.


// ==================================================================================


The useReducer hook in React is an alternative to useState for managing state in functional components. It is particularly useful for managing complex state logic that involves multiple sub-values or when the next state depends on the previous one.

Key Features of useReducer
Centralized state management: Keeps state logic in a single place.
Predictable updates: Uses reducers similar to Redux or the reduce method in JavaScript.
Ideal for complex logic: Helps when state transitions are complex or dependent.
Syntax
javascript
Copy code
const [state, dispatch] = useReducer(reducer, initialState, init);
Parameters:
reducer: A function that specifies how the state is updated based on the action.

javascript
Copy code
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error('Unknown action type');
    }
};
initialState: The initial value of the state.

javascript
Copy code
const initialState = { count: 0 };
init (optional): A function to lazily initialize the state. Useful for expensive calculations.

Returns:
state: The current state.
dispatch: A function to dispatch actions to update the state.
Example: Counter with useReducer
javascript
Copy code
import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error('Unknown action type');
    }
};

const Counter = () => {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};

export default Counter;
When to Use useReducer
Complex state transitions:
When useState becomes unwieldy due to multiple state variables or logic.
Multiple related state updates:
For example, toggling between different tabs or managing form state.
Predictable state logic:
Ensures state updates are consistent and traceable, especially in larger applications.
Advanced Example: Todo List
javascript
Copy code
import React, { useReducer } from 'react';

const reducer = (todos, action) => {
    switch (action.type) {
        case 'add':
            return [...todos, { id: Date.now(), text: action.text, completed: false }];
        case 'toggle':
            return todos.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case 'delete':
            return todos.filter(todo => todo.id !== action.id);
        default:
            throw new Error('Unknown action type');
    }
};

const TodoApp = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [text, setText] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'add', text });
        setText('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={text} onChange={e => setText(e.target.value)} />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            onClick={() => dispatch({ type: 'toggle', id: todo.id })}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch({ type: 'delete', id: todo.id })}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
Key Points
The reducer function must always return a new state; it should not mutate the current state.
Combine useReducer with Context API for global state management.
Use useReducer for logic-heavy components; stick to useState for simpler cases.
By using useReducer, you can organize and manage state transitions in a cleaner and more maintainable way.

*/
