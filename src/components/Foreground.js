import React from "react";
import { useState } from "react";

function Foreground() {
  const [counter, setCounter] = useState(0);
  return (
    <div style={styles.main}>
      <h1>Chrome Ext - Foreground</h1>
      <button onClick={() => setCounter(counter + 1)}>Click: {counter}</button>
    </div>
  );
}

const styles = {
  // main: {
  //     position: 'absolute',
  //     top: '50%',
  //     left: '50%',
  //     transform: 'translate(-50%, -50%)',
  //     zIndex: '1000',
  //     fontSize: '80px',
  //     pointerEvents: 'none'
  // }
};

export default Foreground;
