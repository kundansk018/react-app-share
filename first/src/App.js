import { useState } from "react";
import "./App.css";
import Login from "./Login";

function App() {
  const [username, setUsername] = useState("");
  const onUserName = (text) => {
    console.log("Test", text);
    setUsername(text);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1> Loging Use {username} </h1>
      <Login onUserName={(text) => onUserName(text)} />
    </div>
  );
}

export default App;
