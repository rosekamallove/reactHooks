import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { useForm } from "./customHooks/useForm";
import { useFetch } from "./customHooks/useFetch";

const UseLayoutEffect = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const inputRef = useRef();
  const [rect, setRect] = useState({});
  const divRef = useRef();

  useLayoutEffect(() => {
    setRect(divRef.current.getBoundingClientRect());
  }, [data]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{loading ? "loading..." : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
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
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <br />
      email: {values.email}
      <br />
      password: {values.password}
      <br />
    </>
  );
};

export default UseLayoutEffect;
