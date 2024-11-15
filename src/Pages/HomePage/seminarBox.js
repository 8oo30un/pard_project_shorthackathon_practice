import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { stateCheck } from "../../Atom";

function SeminarBox(props){
const [seminarCheck,setSeminarCheck]  = useRecoilState(stateCheck);
const checkPractice = ()=>{
  setSeminarCheck('I did it!');
}
return(
  <Box>
    <div>
    {props.name}
    </div>
    <div>
      {seminarCheck} 
      <button onClick={checkPractice}>check</button>
    </div>
  </Box>
);
}
SeminarBox.defaultProps = {name: "put name"}

export const Box= styled.div`
display: flex;
font-size:20px;
width:50%;
height:100;
justify-content:space-between;
padding: 20px;
border: 1px solid black;
`;

export default SeminarBox;