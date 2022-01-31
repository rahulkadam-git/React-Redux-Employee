import React, { useState } from "react";
import LoginForm from "./loginForm";
import { useDispatch, useStore } from "react-redux";
import { loginAction, registerAction } from "../container/actions";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [eCode, seteCode] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState("");

  const dispatch = useDispatch();
  const store = useStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userCredential = {
      eCode,
      password,
    };
    //const userdata = { eCode: "1001", password: "admin1234" };
    const login = dispatch(loginAction(userCredential));
    login
      .then((data) => {
        console.log(data);
        navigate("/dashboard");
      })
      .catch((error) => setError(error.err));
    //console.log(store.getState());
    //console.log(userCredential);
  };

  let loginData = {
    handleSubmit,
    setPassword,
    seteCode,
    setError,
    errorMessage,
  };

  return (
    <div id="login" className="App">
      <div className="container">
        <div className="row login-box">
          <LoginForm loginState={loginData} />
        </div>
      </div>
    </div>
  );
}
