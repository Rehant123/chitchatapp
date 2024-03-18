import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import { Toaster } from "react-hot-toast";
import { AuthContext, useAuthContext } from "./context/AuthContext.jsx";
function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="h-screen p-4 flex items-center justify-center">
      <Routes>
        <Route path="/"  element={authUser ?<Home/>: <Navigate to =  "/login" />}></Route>
        <Route path="/login"  element={authUser ?<Navigate to = "/"/>:<Login/>}></Route>
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        ></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
