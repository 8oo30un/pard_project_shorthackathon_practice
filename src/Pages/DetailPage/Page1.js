import { Link, useNavigate } from "react-router-dom";

function Page1(){

  const navigator = useNavigate();
  const handleHomePage = () =>{
    navigator("/");
  };

  return(
    <div>
      <h1>Page1</h1>
      <button onClick={handleHomePage}>back to the Home</button>
    </div>
  );
}

export default Page1;