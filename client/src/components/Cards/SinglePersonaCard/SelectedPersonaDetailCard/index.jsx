import { useSelector, useDispatch } from 'react-redux';
import {
	IconButton, Card, CardHeader, Typography, CardContent,
} from '@mui/material';
import PropTypes from 'prop-types';
import colors from '../../../../theme/colors';
import CloseIcon from '../../../icons/CloseIcon';
import { setSelectedPersona } from '../../../../features/filters/personaFilterSlice';

function SelectedPersonaCard({ personaId }) {
	const dispatch = useDispatch();
	const personas = useSelector((state) => state.persona.entities);
	const selectedPersonas = useSelector((state) => state.filters.persona);
	const persona = personas[personaId];
	const svg = persona?.roundButtonSelected;
	const clickClose = () => {
		dispatch(setSelectedPersona(
			{
				...selectedPersonas,
				[personaId]: false,
			},
		));
	};

	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: '#D8B2FA',
				width: '100%',
				height: 'auto',
				marginBottom: '16px',
			}}
		>
			<CardHeader
				title={persona?.name || 'Unknown Persona'}
				titleTypographyProps={{
					sx: {
						color: colors.white,
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						fontSize: '18px',
						textAlign: 'left',
					},
				}}
				action={(
					<IconButton
						onClick={clickClose}
					>
						<CloseIcon
							sx={{
								width: '24px',
								height: '24px',
							}}
						/>
					</IconButton>
				)}
			/>
			<CardContent>
				<Typography sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: 400,
					fontSize: '14px',
					textAlign: 'left',
				}}
				>
					{persona?.description || 'No description available'}
				</Typography>
			</CardContent>

		</Card>
	);
}

export default SelectedPersonaCard;

SelectedPersonaCard.propTypes = {
	personaId: PropTypes.string.isRequired,
};
