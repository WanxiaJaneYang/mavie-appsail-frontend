import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
	Typography, Box, Divider,
} from '@mui/material';
import { useState } from 'react';
import DomainGeneral from './DomainGeneralV2';
import FeatureList from './FeatureList';
import Toggle from '../../../Toggle';
import DomainExpertOpinion from './DomainExpertOpinion';

function DomainCardContent({ domainId }) {
	const filter = useSelector((state) => state.filters.toggle);
	const [importanceRatingOn, setImportanceRatingOn] = useState(false);

	return (
		<Box sx={{
			height: '100%',
		}}
		>
			<DomainGeneral
				domainId={domainId}
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
			{
				filter.featuresOn && (
					<FeatureList
						domainId={domainId}
						importanceRatingOn={importanceRatingOn}
					/>
				)
			}
			<Box
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
			</Box>

			{filter.expertOpinionsOn && (
				<DomainExpertOpinion domainId={domainId} />
			)}
		</Box>
	);
}

export default DomainCardContent;

DomainCardContent.propTypes = {
	domainId: PropTypes.string.isRequired,
};
