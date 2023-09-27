import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Box from "./Box";

function App() {
  const [favBev, setFavBev] = useState("");

  const selectBT = () => {
    setFavBev("bubble tea");
  };

  return (
    <>
      <Header></Header>
      <p>Select yoru favorite beverage</p>
      <button onClick={selectBT}>Choose Bubble Tea</button>
      <button onClick={() => setFavBev("Coffee")}>Choose Coffee</button>
      <Box bgColor="green">Your favorite beverage is {favBev}</Box>
      <Box bgColor="blue">
        <h2>Mary has a little lamb</h2>
      </Box>
    </>
  );
}

export default App;
