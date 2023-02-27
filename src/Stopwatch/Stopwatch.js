import React, { useEffect, useState } from "react";

import classes from "./Stopwatch.module.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) {
      return;
    }
    const timer = setInterval(() => {
      setTime((time) => {
        return time + 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [start]);

  const min = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const sec = (time % 60).toString().padStart(2, "0");

  return (
    <React.Fragment>
      <div className={classes["stopwatch-background"]}>
        <h2>
          {min} : {sec}
        </h2>
        <button
          className={classes["stopwatch-button"]}
          onClick={() => {
            setStart(false);
            setTime(0);
          }}
        >
          Reset
        </button>
        <button
          className={classes["stopwatch-button"]}
          onClick={() => (start ? setStart(false) : setStart(true))}
        >
          Play/Pause
        </button>
      </div>
    </React.Fragment>
  );
};

export default Stopwatch;
