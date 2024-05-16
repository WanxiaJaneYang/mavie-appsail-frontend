import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { resetState } from '../../../../../constants';
import theme from '../../../../../theme';
import ApplyFilterButton from '../../../../../components/Buttons/ApplyFilterButton';

function FilterReset() {
	const dispatch = useDispatch();

	const handleReset = () => {
		dispatch(resetState());
	};

	return (
		<Box
			sx={{
				width: '100%',
				paddingBottom: '20px',
				paddingTop: '20px',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
				}}
			>
				<Typography
					sx={{
						fontFamily: 'Inter, sans-serif',
						fontWeight: '600',
						fontSize: '14px',
						color: theme.palette.dark,
						marginLeft: '-1px',
						marginRight: '8px',
					}}
				>
					Filters

				</Typography>
				<Box
					sx={
						{
							display: 'flex',
							flexDirection: 'row',
							gap: '0px',
							alignItems: 'center',
							alignContent: 'center',
						}
					}
				>
					<ApplyFilterButton />
					<Button
						onClick={handleReset}
						style={{
							cursor: 'pointer',
							padding: '-2px',
							marginLeft: '8px',
							fontSize: '12px',
							fontWeight: '500',
						}}
						size="small"
						variant="outlined"
					>
						Reset
					</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default FilterReset;
