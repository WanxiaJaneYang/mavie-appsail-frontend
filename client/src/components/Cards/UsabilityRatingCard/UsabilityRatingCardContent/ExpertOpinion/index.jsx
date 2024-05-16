import {
	Box, Typography, useMediaQuery, Link,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ExpertOpinionHeight from './ExpertOpinionHeight';
import ExpertOpinionLength from './ExpertOpinionLength';

function ExpertOpinion() {
	const expertOpinion = useSelector((state) => state.product.productInfo
		.productDetail.expertOpinion);
	const [showMore, setShowMore] = useState(false);
	const [size, setSize] = useState('default');
	const [opinionLength, setOpinionLength] = useState(ExpertOpinionLength(size));
	const [opinionHeight, setOpinionHeight] = useState(`${ExpertOpinionHeight(size)}px`);
	const [renderShowMore, setRenderShowMore] = useState(false);
	const [renderShowLess, setRenderShowLess] = useState(false);
	const isExtraExtraLargeScreen = useMediaQuery('(min-width:1920px)');
	const extraLargeScreen = useMediaQuery('(min-width:1500px)');
	const largeScreen = useMediaQuery('(min-width:1280px)');
	const mediumScreen = useMediaQuery('(min-width:900px)');
	const smallScreen = useMediaQuery('(min-width:600px)');
	const extraSmallScreen = useMediaQuery('(min-width:300px)');

	useEffect(
		() => {
			if (isExtraExtraLargeScreen) {
				setSize('xxl');
			} else
				if (extraLargeScreen) {
					setSize('xl');
				} else if (largeScreen) {
					setSize('lg');
				} else if (mediumScreen) {
					setSize('md');
				} else if (smallScreen) {
					setSize('sm');
				} else if (extraSmallScreen) {
					setSize('xs');
				} else {
					setSize('default');
				}
			setOpinionLength(ExpertOpinionLength(size));
		},
		[extraLargeScreen, largeScreen, isExtraExtraLargeScreen,
			mediumScreen, smallScreen, size, opinionLength, opinionHeight, extraSmallScreen],
	);

	useEffect(() => {
		if (expertOpinion && expertOpinion.length > opinionLength) {
			setRenderShowMore(true);
		} else {
			setRenderShowMore(false);
		}
	}, [expertOpinion, opinionLength, size]);

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
		if (expertOpinion && expertOpinion.length > opinionLength) {
			if (showMore) {
				return expertOpinion;
			}
			return `${expertOpinion.substring(0, opinionLength)}...`;
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
					color: '#455468',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '16px',
					// textAlign: 'left',
					marginBottom: ['0px', '5px', '10px'], // [mobile, tablet, desktop
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

export default ExpertOpinion;
