import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((val) => {
        setState({ data: val, loading: false });
      });
  }, [url]);
  return state;
};
