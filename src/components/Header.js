import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav'

function Header(props) {
  return <MainHeder>
    <NavLink to='/'  
    onClick={() => props.setProgress(100)}>
      <img src="./images/logo.png" alt="my logo" className='logo' />
    </NavLink>
    <Nav setProgress={props.setProgress}/>
  </MainHeder>
}
const MainHeder = styled.header` 
padding: 0 3rem;
 height: 80px;
 background-color:${({ theme }) => theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
.logo{
 height: 55px;
 width:55px
}
// @media (max-width:${({ theme }) => theme.media.mobile}) { 
// } 
`;
export default Header
