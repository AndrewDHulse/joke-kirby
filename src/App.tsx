import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h2>www.theRealKirby.biz</h2>
      {/* Fake buy now card with thumbnail */}
      <div
        style={{
          width: "300px",
          height: "400px",
          backgroundColor: "black",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          background: "red",
        }}
      >
        {/* Price needs to be prominent */}
        <div>
          <h1>Kirby Air Riders!</h1>
          <p>Price: $90 USD</p>
          <img
            src="public/kirby.png"
            alt="Kirby"
            style={{ width: "50%", height: "50%", objectFit: "cover" }}
          />
          <button>Buy now!</button>
        </div>
      </div>
    </>
  );
}

export default App;
