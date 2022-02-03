import React, { useEffect, useState } from "react";
import NavbarMain from "./NavbarMain";

import { useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserDetails from "./userDetails";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [eCode, seteCode] = useState("");
  const [userType, setUserType] = useState("");

  // const check = useSelector((state) => state.isLoggedIn);
  // console.log(check);
  const navigate = useNavigate();
  const store = useStore();
  const route = () => {
    //const token = localStorage.getItem("token-key");
    const user = localStorage.getItem("user");
    const retriveUser = JSON.parse(user);
    setName(retriveUser.Name);
    setSurname(retriveUser.Surname);
    seteCode(retriveUser.eCode);
    setUserType(retriveUser.userType);

    return user ? true : false;
  };
  useEffect(() => {
    if (!route()) {
      navigate("/");
    }
  }, [route]);

  let userDetails = {
    name,
    eCode,
    surName,
    userType,
  };

  return (
    <div>
      <NavbarMain />
      <UserDetails userDetails={userDetails} />
    </div>
  );
}
