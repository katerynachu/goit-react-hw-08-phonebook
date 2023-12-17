import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';
import { useAuth } from '../hooks/index';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { deepOrange} from '@mui/material/colors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const avatarColor = deepOrange[500];

  const avatarLetter = user.name ? user.name[0].toUpperCase() : '';

  return (
    <div style={{ display: 'flex', alignItems: 'center',gap:'20px' }}>
     <div style={{ display: 'flex',alignItems: 'center'}}>
     <Avatar sx={{ bgcolor: avatarColor, marginRight: '10px' }}>{avatarLetter}</Avatar>
      <p>{user.email}</p>
     </div>
      <Button variant="contained" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
