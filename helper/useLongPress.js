import { useState, useEffect } from "react";

export default function useLongPress(callback = () => {}, ms = 150) {
  const [startLongPress, setStartLongPress] = useState(false);

  useEffect(() => {
    let timer;
    if (startLongPress) {
      timer = setTimeout(callback, ms);
    } else {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [callback, ms, startLongPress]);

  return {
    onPressIn: () => setStartLongPress(true),
    onPressOut: () => setStartLongPress(false),
  };
}
