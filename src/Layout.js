import styled from "styled-components";
import img1 from "./Pages/HomePage/images.png"
import { Outlet, useNavigate } from "react-router-dom";

function Layout({isLoggedin,setIsLoggedin}) {
  const navigator = useNavigate();
  const handleHomePage = () =>{
    navigator("/");
  };
  const handleLoggedOut = ()=>{
    setIsLoggedin(false);
    alert("로그아웃");
  };
  return (<div>
    <Title>
      <SubTitle1 onClick={handleHomePage}>Short Hackathon Practice</SubTitle1>
      <SubTitle2 onClick={handleLoggedOut}>log out</SubTitle2>
      <a href="https://we-pard.com" target="_blank">
      <img src={img1} width="30px"></img>
      </a>
    </Title>
    <main>
      <Outlet /></main>
  </div>);
}

export const Title = styled.div`
display: flex;
flex-direction: column;
width: 30px;
height: 30vh;
border: 5px solid black;
justify-content: space-between;
align-items: initial;
position: fixed; /* 화면에 고정 */
right: 0; /* 오른쪽에 위치 */
top: 50%; /* 상단에 위치 */
background-color: #f0f0f0; /* 배경색 */
`;

export const SubTitle1 = styled.div`
display: flex;
font-size: 15px;
width: 100%;
text-align:left;
justify-content: center;
align-items: center;
height:100vh;
writing-mode: vertical-lr; /* 세로 방향, 오른쪽에서 왼쪽으로 */
// text-orientation: upright; /* 문자가 직립 상태로 표시됨 */
border-bottom: 5px solid black;
`;

export const SubTitle2 = styled.div`
display: flex;
writing-mode: vertical-lr;
font-size: 15px;
width: 100%;
text-align: center;
height:250px;
justify-content: center;
border-bottom: 5px solid black;
`;

export default Layout;