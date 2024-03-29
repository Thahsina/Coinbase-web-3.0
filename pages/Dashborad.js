import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar'

const Dashborad = ({ address }) => {
  return (
    <Wrapper>
        <Sidebar />
        <MainContainer>
        <Header walletAddress = {address}/>
        <Main />
        </MainContainer>
        
     </Wrapper>
  
  )
    
  
}

export default Dashborad;


const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #0a0b0d;
    color: white;
    overflow : hidden;
    
`

const MainContainer = styled.div`
    flex: 1;
    

`