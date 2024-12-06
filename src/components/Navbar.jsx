import React,{ useState } from 'react';
import styled from 'styled-components'

const Container  = styled.div`
    height:60px;
    background-color:black;
    display:flex;
    align-items:center;

`;

const Left = styled.div`
flex: 3;
padding-left:50px;

`;

const Right = styled.div`
flex: 2;
padding-right:5px;
`;




function Navbar(){

    return(
        <>
        <Container>
            <Left>left</Left>
            <Right>right</Right>
        </Container>
        </>
    );
}

export default Navbar