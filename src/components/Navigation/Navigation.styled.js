import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const LinkStyled = styled(NavLink)`
text-decoration:none;
font-weight:600;
color: grey;
transition: text-shadow .6s linear;

&:hover{
    text-shadow: #FC0 1px 0 10px;
    }
    &.active{
    color: #1976d2;
  }
`
export const NavWrap = styled.nav`
display:flex;
gap: 20px;
`