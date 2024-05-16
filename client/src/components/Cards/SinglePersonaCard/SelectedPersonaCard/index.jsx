import { useSelector, useDispatch } from 'react-redux';
import {
	IconButton, Box, CardContent, CardHeader, Typography, Card,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import PersonaPopup from '../../../Popup/PersonaPopup';
import colors from '../../../../theme/colors';
import CloseIcon from '../../../icons/CloseIcon';
import DynamicSvg from '../../../DynamicSvgIcon';
import { setSelectedPersona } from '../../../../features/filters/personaFilterSlice';

function SelectedPersonaCard({ personaId }) {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const onIconClick = () => {
		setOpen(true);
	};
	const handlePopupClose = () => {
		setOpen(false);
	};
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
		<>
			<Card
				sx={{
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: colors.grey,
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
					<DynamicSvg
						onClick={onIconClick}
						svgData={svg}
						sx={{
							width: ['48px', '52px', '60px', '64px'],
							height: ['48px', '52px', '60px', '64px'],
						}}
					/>
				</CardContent>
			</Card>
			<PersonaPopup personaId={personaId} open={open} onClose={handlePopupClose} />
		</>

	);
}

export default SelectedPersonaCard;

SelectedPersonaCard.propTypes = {
	personaId: PropTypes.string.isRequired,
};
