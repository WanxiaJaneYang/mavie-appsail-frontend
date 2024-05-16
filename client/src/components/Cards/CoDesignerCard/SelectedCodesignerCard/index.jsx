import { useSelector, useDispatch } from 'react-redux';
import {
	IconButton, Box, CardContent, CardHeader, Typography, Card,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import PersonaPopup from '../../../Popup/PersonaPopup';
import colors from '../../../../theme/colors';
import CloseIcon from '../../../icons/CloseIcon';
import DynamicSvg from '../../../DynamicSvgIcon';
import RoundButton from './RoundButton';

function SelectedCodesignerCard({ codesignerId, clickClose }) {
	const codesigners = useSelector((state) => state.codesigner.entities);
	// const selectedPersonas = useSelector((state) => state.filters.persona);
	const codesigner = codesigners[codesignerId];
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const onIconClick = () => {
		setOpen(true);
	};
	const getCursorStyle = (codesigner?.report) ? 'pointer' : 'default';
	const handlePopupClose = () => {
		setOpen(false);
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
					title={codesigner?.name || 'Unknown Codesigner'}
					titleTypographyProps={{
						sx: {
							color: colors.white,
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: '18px',
							textAlign: 'left',
						},
					}}
					// action={(
					// 	<IconButton
					// 		onClick={clickClose}
					// 	>
					// 		<CloseIcon
					// 			sx={{
					// 				width: '24px',
					// 				height: '24px',
					// 			}}
					// 		/>
					// 	</IconButton>
					// )}
				/>
				<CardContent>
					<RoundButton
						onClick={codesigner?.report ? onIconClick : null}
						svgData={codesigner?.profile}
						sx={{
							width: ['48px', '52px', '60px', '64px'],
							height: ['48px', '52px', '60px', '64px'],
							cursor: { getCursorStyle },
						}}
						disabled={!codesigner?.report}
					/>

				</CardContent>
			</Card>
			<PersonaPopup codesignerId={codesignerId} open={open} onClose={handlePopupClose} />
		</>

	);
}

export default SelectedCodesignerCard;

// proptype
SelectedCodesignerCard.propTypes = {
	codesignerId: PropTypes.string.isRequired,
	clickClose: PropTypes.func.isRequired,
};
