import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../thunk';
import theme from '../../theme';
// import Login from '../../components/Login';
import LoginForm from '../../components/Login/LoginForm';
import logo from '../../images/logo.png';

const defaultTheme = theme;

export default function SignInSide() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const { userId } = useSelector((state) => state.auth);

	useEffect(
		() => {
			if (userId) {
				navigate(`/client/${userId}`);
			} else {
				dispatch(auth({ suppressed: true }));
			}
		},
		[userId, location, navigate, dispatch],
	);

	return (
		<ThemeProvider theme={defaultTheme}>
			<Grid container component="main" sx={{ height: '100vh' }}>
				<CssBaseline />
				<Grid
					item
					xs={12}
					sm={8}
					md={6}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box
						component={Paper}
						elevation={6}
						sx={{
							width: { xs: '100%', md: '95%', lg: '90%' },
							height: { xs: '100%', md: '95%', lg: '90%' },
							p: 3,
						}}
					>
						<LoginForm />
					</Box>
				</Grid>
				<Grid item xs={false} sm={4} md={6} sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
					<Box component="img" src={logo} sx={{ maxHeight: '70%', maxWidth: '70%' }} alt="Company Logo" />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
