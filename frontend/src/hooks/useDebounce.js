import { useEffect, useRef } from "react";

export default function useDebounce(callback, delay, dependencies) {
  const handler = useRef();

  useEffect(() => {
    if (handler.current) clearTimeout(handler.current);

    handler.current = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(handler.current);
  }, dependencies);
}
