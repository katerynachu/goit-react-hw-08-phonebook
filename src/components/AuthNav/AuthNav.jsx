// import css from './AuthNav.module.css';

import { NaLinkStyled, Wrapper } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <Wrapper>
      <NaLinkStyled to="/register">
        Register
      </NaLinkStyled>
      <NaLinkStyled to="/login">
        Log In
      </NaLinkStyled>
    </Wrapper>
  );
};
