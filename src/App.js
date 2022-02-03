import "./style/App.scss";
import Login from "./Component/Login";

import Register from "./Component/Register";
import Dashboard from "./Component/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./container/store";
import ProtectedRoute from "./Component/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
