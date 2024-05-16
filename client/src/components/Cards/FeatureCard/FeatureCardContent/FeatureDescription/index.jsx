import { Box, Typography, Link } from '@mui/material';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function FeatureDescription({ description }) {
	const [renderShowMore, setRenderShowMore] = useState(false);
	const [renderShowLess, setRenderShowLess] = useState(false);
	const [showMore, setShowMore] = useState(false);
	const getFeatureDescription = () => {
		if (!description || description.length === 0) {
			return 'No description provided.'; // or return null to render nothing
		}
		// if too long, truncate
		if (description?.length > 100 && !showMore) {
			return `${description.substring(0, 100)}`;
		}
		return description;
	};
	const toggleShowMore = () => {
		setShowMore(!showMore);
		setRenderShowMore(false);
		setRenderShowLess(true);
	};

	const toggleShowLess = () => {
		setShowMore(!showMore);
		setRenderShowMore(true);
		setRenderShowLess(false);
	};

	const descriptionHeight = () => {
		if (!showMore) {
			return 'auto';
		}
		if (description && description.length > 100) {
			return '100px';
		}
		return 'auto';
	};
	useEffect(
		() => {
			if (description && description.length > 100) {
				setRenderShowMore(true);
			}
		},
		[description],
	);
	return (
		<Box
			sx={{ overflow: 'auto', height: descriptionHeight() }}
		>
			<Typography
				sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: 500,
					fontSize: ['12px', '13px', '14px'], // [mobile, tablet, desktop
					textAlign: 'left',
					color: '#455468',
					// marginTop: '-20px',
					marginBottom: '10px',
				}}
			>
				{getFeatureDescription() }
				{renderShowMore && (
					<Link
						underline="none"
						sx={{
							fontFamily: 'Inter, sans-serif',
							fontWeight: 500,
							fontSize: ['12px', '13px', '14px'], // [mobile, tablet, desktop
							textAlign: 'left',
							color: '#8393A8',
							marginTop: '-20px',
							marginBottom: '10px',
							cursor: 'pointer',

						}}
						onClick={toggleShowMore}
					>
						...Show More
					</Link>
				)}
				{renderShowLess && (
					<Link
						underline="none"
						sx={{
							fontFamily: 'Inter, sans-serif',
							fontWeight: 500,
							fontSize: ['12px', '13px', '14px'], // [mobile, tablet, desktop
							textAlign: 'left',
							color: '#8393A8',
							marginTop: '-20px',
							marginBottom: '10px',
							cursor: 'pointer',
						}}
						onClick={toggleShowLess}
					>
						Show Less
					</Link>
				)}
			</Typography>
		</Box>

	);
}
export default FeatureDescription;

FeatureDescription.propTypes = {
	description: PropTypes.string.isRequired,
};
