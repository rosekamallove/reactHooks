import React, { useState } from "react";
import useForm from "./customHooks/useForm";

const UseState = () => {
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* Using Custom UseFrom */
  const [values, handleChange] = useForm({ emailForm: "", passwordForm: "" });

  return (
    <>
      {/*
      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count: currentState.count + 1,
          }))
        }
      >
        count++
      </button>
      */}
      {/* Input Form Example */}
      Input Form Example
      <br />
      <input
        name="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        name="passwar"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      email: {email}
      <br />
      password: {password}
      <br />
      {/*
        => But Wait there's a better way to do all this
           By using custom hooks, say useForm for example
           so, that's what we're gonna do.
      */}
      <br />
      Input Form customHooks
      <br />
      <input
        name="email"
        type="email"
        value={values.emailForm}
        onChange={handleChange}
      />
      <br />
      <input
        name="password"
        type="password"
        value={values.passwordForm}
        onChange={handleChange}
      />
      <br />
      email: {email}
      <br />
      password: {password}
      <br />
    </>
  );
};

export default UseState;
