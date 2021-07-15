import React from "react";
import { Reset } from "styled-reset";
import styled from "styled-components";
import pages from "./pages";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, rgb(234, 176, 194), rgb(172, 125, 199)); ;
`;
function App() {
    const { MainContainer } = pages;
    return (
        <Container>
            <Reset />
            <MainContainer />
        </Container>
    );
}

export default App;
