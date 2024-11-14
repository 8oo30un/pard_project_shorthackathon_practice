import React from "react";
import styled from "styled-components";

export const Title =styled.div`
display: flex;
flex-direction: column;
width: 200px;
height: 100vh;
border: 5px black solid;
justify-content: space-between;
align-items:initial;
// padding-left: 15px;
// padding-right: 15px;
`;

export const SubTitle1 =styled.div`
display: flex;
font-size: 25px;
width: 100%;
text-align:left;
justify-content: center;
align-items: center;
height:100vh;
writing-mode: vertical-lr; /* 세로 방향, 오른쪽에서 왼쪽으로 */
// text-orientation: upright; /* 문자가 직립 상태로 표시됨 */
border-bottom: 5px solid black;
`;

export const SubTitle2 =styled.div`
display: flex;
font-size: 25px;
width: 100%;
text-align: center;
align-items: center;
height:250px;
justify-content: center;
border-bottom: 5px solid black;
`;

export const Contents=styled.div`
background-color: mediumslateblue;
display: flex;
justify-content: left;
width:100%;
height:100vh;
`;

export const Body =styled.div`
display: flex;
flex-direction: column;
font-size: 40px;
align-items: center;
width:100%;
height: 100vh;
border-bottom: 5px solid black;

`;

export const MenuBar =styled.div`
width:100%;
display: flex;
font-size: 40px;
border: 5px black solid;
margin-top: -3px;
`;

export const MenuBtn =styled.button`
display: flex;
font-size: 40px;
width:100%;
`;

export const BodyText =styled.div`
display: flex;
font-size: 25px;
justify-content: center;
align-items:baseline;
// text-align: center;
width:100%;
height: 25vh;
`;

export const BodyBox =styled.div`
display: flex;
width:100%;
height:100vh;
flex-direction: column;
justify-content:  space-between;
align-items:center;
padding: 20px;
`;

export const StateText= styled.div`
display: flex;
font-size:25px;
width:250px;
height:100px;
align-items:baseline;
justify-content: space-between;
border: 5px solid black;
padding : 10px;
`;

