import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../hooks/index';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};