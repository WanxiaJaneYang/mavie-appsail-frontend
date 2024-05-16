import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
	Typography, Box, Divider,
} from '@mui/material';
import { useState } from 'react';
import UpperBody from './UpperBody';
import DomainList from './DomainList';
import Toggle from '../../../Toggle';
import ExpertOpinion from './ExpertOpinion';

function CardContent({ productId }) {
	const { expertOpinionsOn } = useSelector((state) => state.filters.toggle);
	const [importanceRatingOn, setImportanceRatingOn] = useState(false);

	return (
		<Box sx={{
			height: '100%',
			width: '100%',
		}}
		>
			<UpperBody
				productId={productId}
				importanceRatingOn={importanceRatingOn}
			/>
			<Divider
				sx={
					{
						marginTop: '16px',
						marginBottom: '16px',
						border: '1px solid #E0E0E0',
					}
				}
			/>

			<DomainList
				productId={productId}
				importanceRatingOn={importanceRatingOn}
			/>

			{/* <Box
				sx={
					{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'end',
						padding: '0px',
					}
				}
			>
				<Typography>
					Importance Rating
				</Typography>
				<Toggle
					value={importanceRatingOn}
					onChange={() => setImportanceRatingOn(!importanceRatingOn)}
				/>
			</Box> */}

			{expertOpinionsOn && (
				<ExpertOpinion productId={productId} />
			)}
		</Box>
	);
}

export default CardContent;

CardContent.propTypes = {
	productId: PropTypes.string.isRequired,
};
