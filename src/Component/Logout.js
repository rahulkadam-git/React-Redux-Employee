import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="logout">
      <Link to="/" onClick={onLogout}>
        Logout
      </Link>
    </div>
  );
}
