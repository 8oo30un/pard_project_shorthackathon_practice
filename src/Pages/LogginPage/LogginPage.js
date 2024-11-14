import { useNavigate } from "react-router-dom";

const LogginPage = ({isLoggedin,setIsLoggedin})=>{
  const navigator =useNavigate();
  const handleLoggin = ()=>{
    setIsLoggedin(true);
    alert("로그인 완료");
    navigator("/");
  };
  const handleLoggedOut = ()=>{
    setIsLoggedin(false);
    // navigator("/");
  };

  return(
    <div>
      <p>loggin</p>
      <h1>{isLoggedin? "true":"false"}</h1>
      <button onClick={handleLoggin}>login</button>
      <button onClick={handleLoggedOut}>logout</button>
    </div>
  );
}

export default LogginPage;