import React, { useState } from "react";
import styled from "styled-components";

function SeminarBox(props){
const [check, checkValue] = useState('did you practice?');
const checkPractice = ()=>{
  checkValue('I did it!');
}
return(
  <Box>
    <div>
    {props.name}
    </div>
    <div>
      {check} 
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