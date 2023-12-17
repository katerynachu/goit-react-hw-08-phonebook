import { useAuth } from '../hooks/useAuth';
import { LinkStyled, NavWrap } from './Navigation.styled';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    < NavWrap>
      <LinkStyled  to="/">
        Home
      </LinkStyled>
      {isLoggedIn && (
        <LinkStyled to="/contacts">
          Contacts
        </LinkStyled>
      )}
    </ NavWrap >
  );
};
