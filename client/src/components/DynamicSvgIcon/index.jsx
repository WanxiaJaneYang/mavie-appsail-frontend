import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { Box, Skeleton } from '@mui/material';

function DynamicSvg({ svgData, ...props }) {
	const [hasError, setHasError] = useState(false);
	const [loaded, setLoaded] = useState(false);

	const onImageLoad = () => {
		setLoaded(true);
	};

	const imgStyle = {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
	};

	const handleOnError = () => {
		setHasError(true);
	};

	if (!svgData || hasError) {
		return <ReportProblemOutlinedIcon {...props} />;
	}

	return (
		<Box {...props}>
			{!loaded && <Skeleton variant="circular" width="100%" height="100%" />}
			<img
				src={svgData}
				alt="Dynamic SVG"
				onError={handleOnError}
				style={
					loaded
						? imgStyle
						: {
							display: 'none',
						}
				}
				onLoad={onImageLoad}
			/>
		</Box>
	);
}

DynamicSvg.propTypes = {
	svgData: PropTypes.string.isRequired,
};

export default DynamicSvg;
