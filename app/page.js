"use client";
import LoginForm from "./components/LoginForm";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    background-color: royalblue;
    min-height: 100vh;
`;

export default function Home(){
    return(
        <Container>
            <h1>sign in</h1>
            <LoginForm/>
        </Container>
    );
};