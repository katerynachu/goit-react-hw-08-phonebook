import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const LinkStyled = styled(Link)`
text-decoration:none;
font-style:italic;
color: #1976d2;
`
export const WrapperBg = styled.div`
  background-image: url(${props => props.bgImage});
  position:relative;
  background-size: contain;
  background-repeat:no-repeat;
  background-position: top;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const MainTitle = styled.h1`
max-width: 430px;
position:absolute;
top: 30px;
right: 0;
`
export const UserName = styled.span`
color: #1976d2;
font-weight:600px;
font-style:italic;
`
