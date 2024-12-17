import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { useEffect, useState } from "react";

function App() {

  const [isAusthenticated,setIsAuthenticated]=useState(false);
  useEffect(()=>{
    const token = localStorage.getItem('token');
    setIsAuthenticated(Boolean(token));
  },[]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAusthenticated ? <Dashboard/>:<Signin />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
