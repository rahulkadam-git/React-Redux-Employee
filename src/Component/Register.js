import React, { useState } from "react";
import { registerAction } from "../container/actions";
import RegisterForm from "./registerForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [eCode, seteCode] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      surname,
      userType,
      eCode,
      password,
    };
    // const user = {
    //   name: "Anil",
    //   surname: "kadam",
    //   userType: "admin",
    //   eCode: "1001",
    //   password: "admin1234",
    // };
    const validate = dispatch(registerAction(newUser));
    validate
      .then((data) => {
        navigate("/");
      })
      .catch((error) => console.log(error));

    // console.log(newUser);
  };

  let registerData = {
    handleSubmit,
    setUserType,
    setName,
    setPassword,
    setSurname,
    seteCode,
  };

  return (
    <div id="login" className="App">
      <div className="container">
        <div className="row login-box">
          <RegisterForm registerState={registerData} />
        </div>
      </div>
    </div>
  );
}
