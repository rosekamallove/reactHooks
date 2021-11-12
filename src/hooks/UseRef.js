import React, { useEffect, useRef, useState } from "react";
import { useForm } from "./customHooks/useForm";
import { useFetch } from "./customHooks/useFetch";

const UseRef = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  /**** UseRef ***************/
  const inputRef = useRef();
  // Can store count of something, and it will
  // not cause a re-render, like useState
  //
  // We can use to check if a compenent is mounted
  // or not before setting it's state in the cleanup
  // function of the useEffect

  return (
    <>
      <div>{loading ? "loading..." : data}</div>
      <br />
      <div> Count:{count} </div>
      <br />
      <button onClick={() => setCount((c) => c + 1)}>count</button>
      <br />
      <br />
      <input
        ref={inputRef}
        name="email"
        type="email"
        placeholder={"email"}
        value={values.email}
        onChange={handleChange}
      />
      <br />
      <input
        name="password"
        type="password"
        placeholder={"password"}
        value={values.password}
        onChange={handleChange}
      />
      <br />
      <br />
      email: {values.email}
      <br />
      password: {values.password}
      <br />
      <hr />
      <h3>UseRef Example</h3>
      <button
        onClick={() => {
          console.log(inputRef.current);
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
    </>
  );
};

export default UseRef;
