import { useState } from "react";
import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [labelVisible, setLabelVisible] = useState(false);
  const onLoginClick = () => {
    if (!username) {
      alert("Please enter username");
      return;
    }

    if (!password) {
      alert("Please enter password");
      return;
    }

    setLabelVisible(true);
    props.onUserName(username);
  };
  return (
    <>
      {/* <div className="form table">
        <h1>Login Form..!!</h1>
        <label>Name :</label>
        <input type="text" name="name"></input> <br />
        <label>Password :</label>
        <input type="password" name="pwd"></input>
        <input type="submit" value="Submit"></input>
      </div> */}
      {!labelVisible ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "black",
            padding: 30,
          }}
        >
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            style={{ marginBottom: 20, height: 30 }}
          ></input>

          <input
            type="password"
            class="form-control"
            placeholder="Password"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            style={{ marginBottom: 20, height: 30 }}
          ></input>

          <button
            style={{ marginBottom: 20, height: 30 }}
            onClick={() => onLoginClick()}
          >
            Login{" "}
          </button>
        </div>
      ) : (
        <div>{username + "  " + password}</div>
      )}
    </>
  );
};

export default Login;
