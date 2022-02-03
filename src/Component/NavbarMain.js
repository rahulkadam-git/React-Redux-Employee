import React from "react";
import Logout from "./Logout";
import { logoutAction } from "../container/actions";
import { useDispatch } from "react-redux";

export default function NavbarMain() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction);
  };
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <h3 className="nav-heading">Employee portal</h3>
          <Logout onLogout={logout} />
        </nav>
      </header>
    </div>
  );
}
