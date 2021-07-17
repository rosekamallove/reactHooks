import React, { useEffect, useState } from "react";
import { useForm } from "./customHooks/useForm";
import { useFetch } from "./customHooks/useFetch";

const UseState = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}`);
  /*
  useEffect(
    () => {
      console.log("render");

      const oneMouseMove = (e) => {
        console.log(e);
      };
      window.addEventListener("mousemove", oneMouseMove);

      return () => {
        window.removeEventListener("mousemove", oneMouseMove);
      };
    },
    [
      values.password,
    ] /* dependency array -> render component when this changes*/
  /*
  ); */
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

export default UseState;
