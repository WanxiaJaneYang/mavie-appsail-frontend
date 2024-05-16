import { Box, Typography } from '@mui/material';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductIntroCard from '../../components/Cards/ProductIntroCard';
import BrandCard from '../../components/Cards/BrandCard';
import {
	getProductInfo,
	getCodesigners,
}
	from '../../thunk';
import CodesignerCard from '../../components/Cards/CoDesignerCard';

function IndividualProductPage() {
	// if path is /client/:id/product/:id and id changes, then we need to fetch the new product
	const { productId } = useParams();
	const dispatch = useDispatch();
	const personaEntities = useSelector((state) => state.persona.entities);

	useEffect(() => {
		dispatch(getProductInfo(productId));
	}, [productId, dispatch]);

	useEffect(
		() => {
			if (personaEntities && personaEntities?.length !== 0) {
				dispatch(getCodesigners({ productId }));
			}
		},
		[personaEntities, dispatch, productId],
	);
	return (
		<Box
			sx={{
				width: '100%',
				height: 'auto',
				justifyContent: 'start',
				paddingRight: '16px',
				paddingLeft: '16px',
				gap: '16px',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<BrandCard />
			<Typography
				sx={
					{
						color: '#455468',
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						fontSize: '18px',
						textAlign: 'left',
						marginTop: '16px',
						marginBottom: '16px',
					}
				}
			>
				Product
			</Typography>
			<ProductIntroCard />
			{/* <GeneralPersonaCard /> */}
			{/* <PersonaPopup open /> */}
			{personaEntities && personaEntities.length !== 0 && <CodesignerCard />}
			<Outlet />
		</Box>

	);
}

export default IndividualProductPage;
