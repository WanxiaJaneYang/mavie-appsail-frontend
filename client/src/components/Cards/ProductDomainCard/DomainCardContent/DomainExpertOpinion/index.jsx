import {
	Typography, Box, Link, useMediaQuery,
} from '@mui/material';
import propType from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ExpertOpinionHeight from './ExpertOpinionHeight';

function DomainExpertOpinion({ domainId, productId }) {
	const ratingData = useSelector((state) => state.comparison.rating.data);
	const expertOpinion = ratingData?.[productId]?.domainRatings?.[domainId]?.expertOpinion;
	const [showMore, setShowMore] = useState(false);
	const [size, setSize] = useState('default');
	const [opinionHeight, setOpinionHeight] = useState(`${ExpertOpinionHeight(size)}px`);
	const [renderShowMore, setRenderShowMore] = useState(false);
	const [renderShowLess, setRenderShowLess] = useState(false);
	const extraLargeScreen = useMediaQuery('(min-width:1920px)');
	const largeScreen = useMediaQuery('(min-width:1280px)');
	const mediumScreen = useMediaQuery('(min-width:900px)');
	const smallScreen = useMediaQuery('(min-width:600px)');

	useEffect(
		() => {
			if (extraLargeScreen) {
				setSize('xl');
			}
			if (largeScreen) {
				setSize('lg');
			}
			if (mediumScreen) {
				setSize('md');
			}
			if (smallScreen) {
				setSize('sm');
			} else {
				setSize('default');
			}
		},
		[extraLargeScreen, largeScreen, mediumScreen, smallScreen],
	);

	useEffect(() => {
		if (expertOpinion && expertOpinion.length > 100) {
			setRenderShowMore(true);
		}
	}, [expertOpinion]);

	const toggleShowMore = () => {
		setShowMore(!showMore);
		setOpinionHeight('auto');
		setRenderShowMore(false);
		setRenderShowLess(true);
	};
	const toggleShowLess = () => {
		setShowMore(!showMore);
		setOpinionHeight(`${ExpertOpinionHeight(size)}px`);
		setRenderShowMore(true);
		setRenderShowLess(false);
	};

	const getExpertOpinionContent = () => {
		if (expertOpinion && expertOpinion.length > 100) {
			if (showMore) {
				return expertOpinion;
			}
			return `${expertOpinion.substring(0, 100)}...`;
		}
		if (expertOpinion) {
			return expertOpinion;
		}
		return 'No expert opinion available';
	};
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				padding: '0px',
				marginBottom: '10px',
				height: opinionHeight,
			}}
		>
			<Typography
				sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '14px',
					textAlign: 'left',
					marginBottom: '10px',
				}}
			>
				Expert Opinions
			</Typography>
			<Typography
				sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: 500,
					fontSize: '14px',
					textAlign: 'left',
					color: '#455468',
				}}
			>
				{getExpertOpinionContent()}
				{renderShowMore && (
					<Link
						underline="none"
						onClick={toggleShowMore}
						sx={
							{
								fontFamily: 'Inter, sans-serif',
								fontWeight: 500,
								fontSize: '12px',
								color: '#8393A8',
								cursor: 'pointer',
							}
						}
					>
						Show More
					</Link>
				)}
				{renderShowLess && (
					<Link
						underline="none"
						onClick={toggleShowLess}
						sx={{
							fontFamily: 'Inter, sans-serif',
							fontWeight: 500,
							fontSize: '12px',
							color: '#8393A8',
							cursor: 'pointer',
						}}
					>
						Show Less
					</Link>
				)}
			</Typography>
		</Box>
	);
}

export default DomainExpertOpinion;

DomainExpertOpinion.propTypes = {
	domainId: propType.string.isRequired,
	productId: propType.string.isRequired,
};
