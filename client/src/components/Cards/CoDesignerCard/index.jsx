import { useSelector } from 'react-redux';
import {
	Accordion, Typography, AccordionSummary, AccordionDetails, Skeleton,
} from '@mui/material';
import colors from '../../../theme/colors';
import CodesignerCardContent from './CoDesignerCardContent';
import ExpandGreyIcon from '../../icons/ExpandGreyIcon';

function CodesignerCard() {
	const { loading, error, ids } = useSelector((state) => state.codesigner);
	const getCardContentRendered = () => {
		if (error) {
			return (
				<Typography
					sx={{
						color: colors.white,
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						fontSize: '14px',
						textAlign: 'start',
					}}
				>
					{error}
				</Typography>
			);
		}
		if (loading) {
			return <Skeleton variant="rectangular" width="100%" height="100px" />;
		}
		// case when there are no corresponding personas
		if (!loading && (ids === null || ids.length === 0)) {
			return (
				<Typography
					sx={{
						color: colors.white,
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						fontSize: '14px',
						textAlign: 'start',
					}}
				>
					Not enough data to show
				</Typography>
			);
		}
		// case when there are corresponding personas
		return (
			<CodesignerCardContent />
		);
	};

	return (
		<Accordion
			sx={
				{
					backgroundColor: colors.grey,
				}
			}
			disableGutters
			defaultExpanded
		>
			<AccordionSummary
				expandIcon={(
					<ExpandGreyIcon
						fontSize="large"
						sx={{ padding: '0px', width: '40px', height: '40px' }}
					/>
				)}
				aria-controls="usability-header"
				id="usability-header"
				sx={{
					padding: '16px',
				}}
			>
				<Typography
					sx={{
						color: colors.white,
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						fontSize: '18px',
						textAlign: 'start',
					}}
				>
					Selected Personas
				</Typography>
			</AccordionSummary>
			<AccordionDetails sx={
				{
					display: 'flex',
					flexDirection: 'column',
					paddingTop: '0px',
					paddingBottom: '0px',
					marginTop: '-16px',
				}
			}
			>
				{getCardContentRendered()}
			</AccordionDetails>
		</Accordion>

	);
}

export default CodesignerCard;
