import React from 'react'
import { useAuth } from '../hooks/index';
import { LinkStyled, MainTitle, UserName, WrapperBg } from './MainBg.styled';
import bgImage from './bg.jpg'; 
export default function MainBg() {
    const { isLoggedIn,user  } = useAuth();
  return (
    <WrapperBg style={{ backgroundImage: `url(${bgImage})` }}>
      {isLoggedIn ? (
        <MainTitle>
          Welcome back <UserName>{user.name}</UserName>! Your contacts were waiting for you.
        </MainTitle>
      ) : (
        <MainTitle>
          Welcome! Enter your contact network and <LinkStyled to="/register">let's start building connections!</LinkStyled>

        </MainTitle>
      )}
    </WrapperBg>
  );

}
