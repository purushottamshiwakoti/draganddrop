import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./services/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
