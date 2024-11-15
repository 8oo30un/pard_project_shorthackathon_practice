import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Page1 from "./Pages/DetailPage/Page1";
import Layout from "./Layout";
import LogginPage from "./Pages/LogginPage/LogginPage";
import { useEffect, useState } from "react";
import { getUserData } from "./AxiosAPI";

function App() {
  const [isLoggedin,setIsLoggedin] = useState(false);

  useEffect(()=>{fetchData();},[]);
  const [userData, setUserData] = useState([]);
  const handleApiError = (error, errorMessage) => {
    console.error(errorMessage, error);
};
  const fetchData = async ()=>{
    try{
      const response = await getUserData();
      setUserData(response.data);
    }catch(error){
      handleApiError(error,"Error fetching data:");
    }
  };
  return (
    <Routes>
      <Route element={<Layout isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>}>
        <Route path="/" element={<Home isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>}></Route>
        <Route path="/page1" element={<Page1 userData={userData}/>}></Route>
        <Route path="/login" element={<LogginPage isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />}/>
      </Route>
      {/* <Route path="/data" element={<data.json />}></Route> */}
    </Routes>
  );
}
export default App;
