/* eslint-disable brace-style */
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import SingleCoDesignerHead from './SingleCoDesignerHead';

function CodesignerCardContent() {
	const { ids } = useSelector((state) => state.codesigner);
	const cardNumber = ids?.length || 0;
	const theme = useTheme();
	// Define the breakpoints for different devices
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
	const isDesktop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
	const gapSize = 2; // Gap size in percentage of the container's width

	const getCardWidth = () => {
		let widthPerCard;
		// for mobile
		if (isMobile) {
			if (cardNumber <= 6) {
				widthPerCard = 15;
			} if (cardNumber <= 14) {
				widthPerCard = (100 - ((cardNumber / 2) * gapSize)) / cardNumber;
			} else {
				widthPerCard = (100 - ((cardNumber / 2.5) * gapSize)) / cardNumber;
			}
		}
		// for tablet
		else if (isTablet) {
			if (cardNumber <= 8) {
				widthPerCard = 12;
			} else if (cardNumber <= 18) {
				widthPerCard = (100 - ((cardNumber / 2) * gapSize)) / cardNumber;
			} else {
				widthPerCard = (100 - ((cardNumber / 2.5) * gapSize)) / cardNumber;
			}
		}

		// for desktop
		else if (isDesktop) {
			if (cardNumber <= 10) {
				widthPerCard = 15;
			} else if (cardNumber <= 20) {
				widthPerCard = (100 - ((cardNumber / 2) * gapSize)) / cardNumber;
			} else {
				widthPerCard = (100 - ((cardNumber / 2.5) * gapSize)) / cardNumber;
			} }
		// for desktop and larger
		else if (cardNumber <= 6) {
			widthPerCard = 12;
		}
		else if (cardNumber <= 10) {
			widthPerCard = (100 - ((cardNumber - 1) * gapSize)) / cardNumber;
		}
		else if (cardNumber <= 20) {
			widthPerCard = (100 - ((cardNumber / 2) * gapSize)) / cardNumber;
		} else {
			widthPerCard = (100 - ((cardNumber / 2.5) * gapSize)) / cardNumber;
		}
		return `${widthPerCard}%`;
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				width: '100%',
				height: 'auto',
				justifyContent: 'start',
				gap: 0.5, // 2% gap between each item
			}}
		>
			{ids?.map((id) => (
				<Box
					key={`codesigner-${id}`} // The key prop should be here
					sx={{
						maxWidth: {
							lg: '8%', md: '10%', xs: '15%',
						},
						width: getCardWidth(),
						height: 'auto',
						padding: 1, // Optional: add some padding inside each item
						boxSizing: 'border-box', // Ensures the padding doesn't add to the width
					}}
				>
					<SingleCoDesignerHead coDesignerId={id} />
				</Box>
			))}
		</Box>
	);
}

export default CodesignerCardContent;
