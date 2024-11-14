import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Page1 from "./Pages/DetailPage/Page1";
import Layout from "./Layout";
import LogginPage from "./Pages/LogginPage/LogginPage";
import { useState } from "react";

function App() {
  const [isLoggedin,setIsLoggedin] = useState(false);
  return (
    <Routes>
      <Route element={<Layout isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>}>
        <Route path="/" element={<Home isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/login" element={<LogginPage isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />}/>
      </Route>
    </Routes>
  );
}
export default App;
