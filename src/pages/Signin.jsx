import { Heading } from "../components/Heading";
import { Subheading } from "../components/Subheading";
import { InputBox } from "../components/InputBox";
import { ButtonComponent } from "../components/ButtonComponent";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 flex justify-center items-center w-full h-screen">
      <div className="flex flex-col bg-white w-1/4 justify-center items-center rounded-md py-5">
        <Heading heading={"Sign in"} />
        <Subheading text={"Enter your credentials to access your account"} />
        <InputBox
          onChange={(e) => {
            setUsername(e.target.value);
          }}lh  
          title={"Email"}
          placeholder={"user@email.com"}
          type={"email"}
        />
        <InputBox
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          title={"Password"}
          placeholder={"password"}
          type={"password"}
        />
        <ButtonComponent
          onClick={async () => {
            try {
              const response = await axios.post(
                "https://payzap.onrender.com/api/v1/user/signin",
                { username, password }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            } catch (error) {
              debugger;
              if (error.response) {        
                console.error("Error:", error.response.data.message);
                alert(error.response.data.message);
              } else {
                console.error("Unexpected Error:", error);
                alert("Something went wrong. Please try again.");
              }
            }
          }
        }
          text={"Sign in"}
        />
        <BottomWarning
          label={"Don't have an account?"}
          buttonText={"Sign up"}
          to={"/signup"}
        />
      </div>
    </div>
  );
};
