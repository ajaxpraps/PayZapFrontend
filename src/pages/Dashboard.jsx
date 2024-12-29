import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import {jwtDecode} from "jwt-decode";
import { useEffect } from "react";
import axios from "axios";

export const Dashboard = () => {
  
  const [currentMoney,setCurrentMoney]=useState("10,0000");
  const token = localStorage.getItem("token");


  const decodedToken = jwtDecode(token);// Decodes without verifying
  const id = decodedToken?.userId; // Access the id field
  console.log("Extracted ID:", id);

  useEffect(() => {
    console.log("useEffect is running");
    debugger;
    const fetchBalance = async () => {
      try {
        console.log("Fetching account balance...");
        const response = await axios.get(
          "https://payzap.onrender.com/api/v1/account/balance",
          {
            headers: { userId: id },
          }
        );
        setCurrentMoney(response.data.balance);
      } catch (err) {
        console.error("Error fetching balance:", err);
      }
    };

    fetchBalance();
  },[]);
  return (
    <div className="px-32 py-10">
      <Appbar />
      <Balance balance={currentMoney} />
      <Users userId ={id} balance = {currentMoney}/>
    </div>
  );
};
