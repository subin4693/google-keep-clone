import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useUserContext } from "./context/Context";
import ProtectedRouter from "./ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Bin from "./pages/Bin";

const App = () => {
  const { theme } = useUserContext();
  return (
    <div theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <ProtectedRouter>
              <Home />
            </ProtectedRouter>
          }
        />
        <Route
          path="/archive"
          element={
            <ProtectedRouter>
              <Archive />
            </ProtectedRouter>
          }
        />
        <Route
          path="/bin"
          element={
            <ProtectedRouter>
              <Bin />
            </ProtectedRouter>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
