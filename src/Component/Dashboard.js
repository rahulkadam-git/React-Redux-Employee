import React, { useEffect } from "react";
import NavbarMain from "./NavbarMain";

import { useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const check = useSelector((state) => state.isLoggedIn);

  const navigate = useNavigate();
  const store = useStore();
  const route = () => {
    const token = localStorage.getItem("token-key");
    return token ? true : false;
  };
  useEffect(() => {
    if (!route()) {
      navigate("/");
    }
  }, [route, navigate]);

  return (
    <div>
      <NavbarMain />
    </div>
  );
}
