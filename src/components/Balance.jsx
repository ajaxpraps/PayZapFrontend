export const Balance = ({ balance }) => {
  return (
    <div className="flex items-center px-10 py-7 font-semibold text-xl">
      <div className="">Your balance </div>
      {(balance!="10,0000")&&<div className="pl-4"> Rs. {balance}</div>}
      {(balance=="10,0000")&&<div className="pl-4"> ...loading</div>}
    </div>
  );
};
