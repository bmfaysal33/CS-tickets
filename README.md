

# 🔗 Live Link: **<a href="https://cs-tickets.surge.sh/" target="_blank"><strong>https://cs-tickets.surge.sh/</strong></a>**
 





## React Questions & Answers

### 1. What is JSX, and why is it used?

**Answer:**
JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows developers to write HTML-like code inside JavaScript. JSX makes the code more readable, easier to write, and helps React efficiently create and manage UI components.



### 2. What is the difference between State and Props?

**Answer:**

* **Props** are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component.
* **State** is used to store and manage data within a component. State can be updated, and when it changes, the component re-renders.



### 3. What is the useState hook, and how does it work?

**Answer:**
The `useState` hook is a React Hook that allows functional components to use state. It returns an array with two values: the current state and a function to update that state. When the state is updated, React re-renders the component.

Example:

```js
const [count, setCount] = useState(0);
```


### 4. How can you share state between components in React?

**Answer:**
State can be shared between components by lifting the state up to their common parent component and passing it down through props. For larger applications, the Context API or state management libraries like Redux can be used.



### 5. How is event handling done in React?

**Answer:**
Event handling in React is done using camelCase event names and passing a function as the event handler. React events work similarly to JavaScript events but are written in JSX.

Example:

```js
<button onClick={handleClick}>Click Me</button>
```

