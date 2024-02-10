import React, { useState } from "react";
import { database } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/subsciption");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/subsciption");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = ()=>{
    history("/reset");
  }
  return (
    <div className="App">
      {/* Registration and login Screen */}
      <div className="row">
        <div
          className={login ? "activeColor pointer" : "pointer"}
          onClick={() => setLogin(false)}
        >
          SignUp
        </div>
        <div
          className={!login ? "activeColor pointer" : "pointer"}
          onClick={() => setLogin(true)}
        >
          SignIn
        </div>
      </div>
      <h1>{login ? "SignIn" : "SignUp"}</h1>
      <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        <input name="email" placeholder="Email" />
        <br />
        <input name="password" type="password" placeholder="Password" />
        <br />
        <p onClick={handleReset}>Forgot Password?</p>
        <br />
        <button>{login ? "SignIn" : "SignUp"}</button>
      </form>

      {/* Styling */}
      <style>
        {`
        .App {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .row {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .pointer {
          cursor: pointer;
          margin: 0 10px;
          padding: 5px;
        }

        .activeColor {
          color: blue; /* Change to your desired active color */
        }

        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 5px;
          max-width: 300px;
        }

        input {
          margin-bottom: 10px;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        button {
          padding: 10px 15px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }

        p {
          cursor: pointer;
          color: blue; /* Change to your desired link color */
        }

        p:hover {
          text-decoration: underline;
        }
      `}
      </style>
    </div>
  );
}
export default Register;