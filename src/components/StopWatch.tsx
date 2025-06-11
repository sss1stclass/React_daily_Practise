import { Box } from "@mui/material";
import { useRef, useState } from "react";

function StopWatch() {
  const [seconds, setSeconds] = useState(10);
  const timerRef = useRef<any>(null);
  const reset = () => {
    stop();
    setSeconds(0);
  };
  const start = () => {
    if (timerRef.current == null) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };
  const stop = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
    }
    timerRef.current = null;
  };

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={3}>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Time: {seconds}s</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </Box>
  );
}
export default StopWatch;