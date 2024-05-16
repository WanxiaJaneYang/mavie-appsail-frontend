import {
	Card, CardHeader, CardContent, Dialog, IconButton, Divider, Box,
} from '@mui/material';
import { useState } from 'react';
import propType from 'prop-types';
import CloseIcon from '../../icons/CloseIcon';
import MavyTab, { MavyTabs } from '../../MavyTab';
import ShareLinkTabContent from './ShareLinkTabContent';
import theme from '../../../theme';
import SharePDFContent from './SharePDFTabContent';

function SharedLinkCard({ open, handleClose }) {
	const [tabValue, setTabValue] = useState('link');
	const renderTabContent = () => {
		if (tabValue === 'link') {
			return <ShareLinkTabContent />;
		}
		if (tabValue === 'pdf') {
			return <SharePDFContent />;
		}
		return null;
	};
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			sx={{
				'& .MuiDialog-paper': {
					maxHeight: '98vh',
				},
			}}
		>
			<Card
				sx={{
					width: '100%', // Adjust as needed, or use maxWidth for responsiveness
					maxWidth: '95vw',
					minWidth: '600px',
					minHeight: '30vh',
					position: 'relative',
					overflow: 'auto',
				}}
				elevation={0}
			>
				<CardHeader
					sx={{
						paddingBottom: '0px',
						position: 'sticky',
						topY: 0,
						zIndex: 10,
					}}
					titleTypographyProps={{
						sx: {
							color: theme.palette.darkest,
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: '18px',
							textAlign: 'left',
						},
					}}
					title="Share Report"
					action={(
						<IconButton onClick={handleClose}>
							<CloseIcon />
						</IconButton>
					)}
				/>
				<CardContent
					sx={{
						width: '100%',
						padding: '15px',
						height: '100%',
					}}
				>
					<MavyTabs value={tabValue} sx={{ maxHeight: '30px' }} aria-label="shareCardTab">
						<MavyTab
							label="Link"
							value="link"
							onClick={() => setTabValue('link')}
						/>
						<MavyTab label="PDF" value="pdf" onClick={() => setTabValue('pdf')} />
					</MavyTabs>
					<Divider sx={{ marginBottom: '25px' }} />

					{renderTabContent()}

				</CardContent>
			</Card>

		</Dialog>
	);
}

export default SharedLinkCard;

SharedLinkCard.propTypes = {
	open: propType.bool.isRequired,
	handleClose: propType.func.isRequired,
};
