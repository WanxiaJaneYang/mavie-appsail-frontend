import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
	Dialog, Card, CardHeader, CardContent, IconButton,
} from '@mui/material';
import CoDesignerSurveyCard from '../../Cards/CodesignerSurveyCard';

import CloseIcon from '../../icons/CloseIcon';
import theme from '../../../theme';

function PersonaPopup({ open, onClose }) {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			maxWidth="lg"
			sx={{
				'& .MuiDialog-paper': {
					maxHeight: '95vh',
				},

			}}
		>
			<Card
				elevation={0}
				sx={{
					padding: '18px',
					marginBottom: '0px',
				}}
			>
				<CardHeader
					title="Persona Survey"
					titleTypographyProps={{
						sx: {
							color: theme.palette.primary.grey,
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: '22px',
							textAlign: 'left',
						},
					}}
					action={(
						<IconButton
							onClick={onClose}
							sx={{
								'& .MuiSvgIcon-root': {
									width: '40px',
									height: '40px',
									padding: '0px',
								},
							}}
						>
							<CloseIcon />
						</IconButton>

					)}
				/>
				<CardContent sx={{
					padding: '0px',
					width: '100%',
					overflow: 'auto',
					paddingTop: '18px',
					paddingLeft: '18px',
					paddingRight: '18px',
					paddingBottom: '0px',
					maxHeight: '80vh',
				}}
				>
					<CoDesignerSurveyCard />
				</CardContent>
			</Card>
		</Dialog>
	);
}

PersonaPopup.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default PersonaPopup;
