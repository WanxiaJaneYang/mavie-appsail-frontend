import LogoutIcon from '@mui/icons-material/Logout';
import { LoadingButton } from '@mui/lab';
import cookie from 'react-cookies';
import { useDispatch, useSelector } from 'react-redux';
import theme from '../../../theme';
import { logout } from '../../../thunk';

function LogoutButton() {
	const dispatch = useDispatch();
	const { logoutPending } = useSelector((state) => state.auth);
	const clickLogout = () => {
		cookie.remove('isLoggedIn', { path: '/' });
		cookie.remove('user_id', { path: '/' });
		cookie.remove('productList', { path: '/' });
		cookie.remove('access_token', { path: '/' });
		cookie.remove('refresh_token', { path: '/' });
		dispatch(logout());
	};

	return (
		<LoadingButton
			fullWidth
			variant="outlined"
			sx={{
				mt: 2,
				mb: 2,
				borderRadius: {
					xs: 40,
					sm: 40,
					md: 52,
				},
				height: {
					xs: 26,
					sm: 28,
					md: 30,
				},

				backgroundColor: theme.palette.primary.main,
				color: theme.palette.primary.contrastText,
				'&:hover': {
					backgroundColor: theme.palette.primary.light,
				},

			}}
			startIcon={<LogoutIcon />}
			loading={logoutPending}
			onClick={clickLogout}
		>
			Logout
		</LoadingButton>
	);
}

export default LogoutButton;
