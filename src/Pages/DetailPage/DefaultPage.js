import { Link, useNavigate, useParams } from "react-router-dom";

function DefaultPage(){

  const navigator = useNavigate();
  const id = useParams();
  const handleHomePage = () =>{
    navigator("/");
  };

  return(
    <div>
      <h1>Page{id.id}</h1>
      <button onClick={handleHomePage}>back to the Home</button>
    </div>
  );
}

export default DefaultPage;