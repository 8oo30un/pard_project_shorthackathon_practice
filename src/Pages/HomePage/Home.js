
import { useEffect, useState } from "react";
import { Body, BodyBox, BodyText, Contents, MenuBar, MenuBtn, StateText, SubTitle1, SubTitle2, Title } from "./titleMyComponent";
import img1 from './images.png';
import SeminarBox from "./seminarBox";
import { useNavigate } from "react-router-dom";

function Home({isLoggedin}) {
  const [current, setCurrent] = useState(0);
  const updateCurrent = () => {
    setCurrent((prev) => prev + 1);
  };
  const resetCurrent = () => {
    setCurrent((prev) => 0);
  };


  const [inputText,setInputText]=useState('얼른 끝내고 쉬자');
  // const handleInputText = (event)=>{
  //   setInputText(event.target.value);
  // };
  const handleButton = ()=>{
    alert(inputText);
  };

  const navigator = useNavigate();
  const handleDetailPage = () =>{
    navigator("/page1");
  };

const handelLogin = ()=>{
  if(!isLoggedin){
      alert("개인정보입니다!로그인 필요");
      navigator("/login");}
      else navigator("/page1");
  };
  return (
    <Contents>
      <Title>
        <SubTitle1>Short Hackathon Practice</SubTitle1>
        <SubTitle2>Kim Woohyun</SubTitle2>
        <img src={img1} width="190px"></img>
      </Title>
      <Body>
        <MenuBar>
          <MenuBtn onClick={handleDetailPage}>1</MenuBtn>
          <MenuBtn onClick={handelLogin}>2</MenuBtn>
          <MenuBtn>3</MenuBtn>
          <MenuBtn>4</MenuBtn>
        </MenuBar>
        <BodyText>
          <p>study seminar  <br /> git  <br /> search <br /> <br/>log: {isLoggedin? "true":"false"}</p>
        </BodyText>
        <StateText>
          <p>stress {current}</p>
          <div>
            <button onClick={updateCurrent}>up</button>
            <button onClick={resetCurrent}>reset</button>
            <button onClick={handleButton}>solution</button>
          </div>
        </StateText>
        <BodyBox>
        <SeminarBox name="seminar1"></SeminarBox>
        <SeminarBox name="seminar2"></SeminarBox>
        <SeminarBox name="seminar3"></SeminarBox>
        <SeminarBox name="seminar4"></SeminarBox>
        <SeminarBox></SeminarBox>
        </BodyBox>
      </Body>
    </Contents>
  );
}
export default Home;
