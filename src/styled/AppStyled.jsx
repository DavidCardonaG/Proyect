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

export const Body = AppBody