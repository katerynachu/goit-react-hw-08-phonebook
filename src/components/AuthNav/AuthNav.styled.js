import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NaLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  color: grey;
  transition: text-shadow 0.6s linear;

  &:hover {
    text-shadow: #fc0 1px 0 10px;
  }
  &.active{
    color: #1976d2;
  }
`;
