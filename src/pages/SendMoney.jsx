import { InputBox } from "../components/InputBox";
import { ButtonComponent } from "../components/ButtonComponent";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const SendMoney = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const balance = searchParams.get("balance");
  const name = searchParams.get("name");

  const [amount, setAmount] = useState(0);

  return (
    <div className="bg-slate-300 flex flex-col justify-center items-center h-screen">
      <div className="bg-white w-1/3 flex flex-col justify-center items-center rounded-md py-10">
        <div className="text-4xl font-extrabold pb-5">Send Money</div>
        <div className="flex items-center  my-5">
          <div className="rounded-full flex justify-center items-center cursor-pointer bg-slate-200 h-11 w-11">
            <div className="text-xl font-medium"> {name[0]}</div>
          </div>
          <div className="pl-4 font-bold text-2xl">{name}</div>
        </div>
        <InputBox
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          title={"Amount (in Rs)"}
          placeholder={"Enter amount"}
          type={"number"}
        />
        <ButtonComponent
          onClick={async() => {
            if(amount<=0 || parseInt(amount, 10)>parseInt(balance, 10)){
              alert(" The amount you want send is either negative or more than your current balance ");
            }else{
              await axios.post(
                "https://payzap.onrender.com/api/v1/account/transfer",
                {
                  to: id,
                  amount,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );
              navigate("/dashboard");
            }
           
          }}
          text={"Initiate Transfer"}
        />
      </div>
    </div>
  );
};
