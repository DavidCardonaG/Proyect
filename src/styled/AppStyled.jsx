import styled from 'styled-components';

const AppBody = styled.div`
width: 380px;
height: 480px;
background:#fff;
box-shadow: 0 10px 15px rgba(179,179,179,.7);
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 7px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding:1rem;
`
const AppTitle = styled.h1`
color:#ce8f1c;
font-size: 24px;
margin:auto;
text-decoration: underline;
font-style: italic;
`
const AppImg = styled.img`
width: 200px;
heigth: 100px;
margin:auto;
margin-top:1rem;
`
const AppH3 = styled.h3`
color:#ce8f1c;
font-size:20px;
margin:auto;
margin-top:1rem;
font-style:italic;

`
const AppContai = styled.div`
width:400px;
height:200px;
margin:auto;
margin-top:2rem;
`
const AppLink = styled.div`
text-decoration:none;
color:#ce8f1c;
font-size:20px;
margin-top:1rem;

`
export const Body = AppBody
export const Title = AppTitle
export const IMG = AppImg
export const H3 = AppH3
export const Contai = AppContai
export const LINK = AppLink