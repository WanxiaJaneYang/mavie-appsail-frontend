import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../theme';

const MavyTab = styled(Tab)({
	'&.Mui-selected': {
		backgroundColor: theme.palette.primary.main, //
		color: theme.palette.primary.contrastText,
		borderRadius: '5px 5px 0px 0px',
	},
	'&.MuiTab-root': {
		fontFamily: 'Inter, sans-serif',
		fontWeight: 600,
		fontSize: '16px',
		textAlign: 'left',
		justifyContent: 'center',
		textTransform: 'none',
		padding: '0px',
		margin: '0px',
		minWidth: '70px',
		minHeight: '36px',
	},

});

const MavyTabs = styled(Tabs)({
	'& .MuiTabs-indicator': {
		display: 'none',
	},
	'&.MuiTabs-root': {
		minHeight: '36px',
	},

});
export default MavyTab;

export { MavyTabs };
