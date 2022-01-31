import React from "react";
import Logout from "./Logout";
import { logoutAction } from "../container/actions";
import { useDispatch } from "react-redux";

export default function NavbarMain() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction);
  };
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <h3 className="nav-heading">Employee portal</h3>
          <Logout onLogout={handleLogout} />
        </nav>
      </header>
    </div>
  );
}
