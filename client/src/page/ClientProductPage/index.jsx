import {
	Grid, Box, useMediaQuery, Drawer,
} from '@mui/material';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductSidebar from './components/ProductSidebar';
import theme from '../../theme';
import FloatingButtons from './components/FloatingButton';
import { getPersona, getProductFilter, getSurveyDomains } from '../../thunk';
import { setCurrentProduct } from '../../features/filters/productListSlice';
import { setIsSurvey, setCurrentSurvey } from '../../features/filters/surveySlice';

function ClientProductPage() {
	const ref = useRef();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { productId, surveyId } = useParams();
	const { loading, error } = useSelector((state) => state.auth);
	const { currentProduct, products } = useSelector((state) => state.filters.product);
	const {
		isSurvey, currentSurvey,
		surveyList, selectedRelatedProductIds,
	} = useSelector((state) => state.filters.survey);

	const [isSidebarOpen, setIsSidebarOpen] = useState(isMobile);
	const handleSidebarOpen = () => {
		setIsSidebarOpen(true);
	};
	const handleSidebarClose = () => {
		setIsSidebarOpen(false);
	};

	const onScroll = () => {
		ref.current.scrollTop = 0;
	};

	const renderSidebar = () => {
		if (isMobile) {
			return (
				<Drawer
					anchor="left"
					onClose={handleSidebarClose}
					open={isSidebarOpen}
					variant="temporary"
					PaperProps={{
						sx: {
							width: 350,
							top: 0,
							height: '100vh',
						},
					}}
				>
					<ProductSidebar
						onMobileClose={handleSidebarClose}
					/>
				</Drawer>
			);
		}

		return (
			<Grid
				item
				md={3}
				lg={3}
				sx={{
					height: '100vh',
					// overflow: 'auto',
				}}
			>
				<ProductSidebar />
			</Grid>
		);
	};

	useEffect(
		() => {
			if (!loading && !error) {
			// if productlist is not empty,
				if (products?.length > 0) {
				// if currentProduct is null, set currentProduct to the first product in the list
					if (!currentProduct) {
						dispatch(setCurrentProduct(products[0]));
					}
				} else if (surveyList?.length > 0) {
				// no product list, but survey list is not empty
					if (!isSurvey) {
					// if isSurvey is false, set isSurvey to true
						dispatch(setIsSurvey(true));
					}
					if (!currentSurvey) {
					// if currentSurvey is null, set currentSurvey to the first survey in the list
						dispatch(setCurrentSurvey(surveyList[0]));
					}
				// } else {
				// // if both product list and survey list are empty, navigate to noAccess page
				// 	navigate(`/client/${userId}/noAccess`);
				}
			}
		},
		[products, surveyList, currentProduct,
			currentSurvey, isSurvey, navigate, dispatch, loading, error],
	);

	useEffect(
		() => {
			if (productId) {
				dispatch(getProductFilter(productId));
				dispatch(getPersona(productId));
			} else if (surveyId && selectedRelatedProductIds?.length > 0) {
				dispatch(getSurveyDomains({ surveyId, productIds: selectedRelatedProductIds }));
			}
		},
		[productId, dispatch, surveyId, selectedRelatedProductIds],
	);
	return (
		<Grid
			container
			sx={
				{
					height: '100vh',
					margin: '0px',
					padding: '0px',
					overflow: 'hidden',
				}
			}
		>
			{renderSidebar()}
			<Grid
				item
				xs={12}
				sm={12}
				md={9}
				lg={9}
			>
				<Box
					ref={ref}
					sx={
						{
							width: '100%',
							display: 'flex',
							height: '100vh',
							flexDirection: 'column',
							justifyContent: 'start',
							overflow: 'auto',
							scrollBehavior: 'smooth',
							marginTop: '10px',
							marginBottom: '10px',
							// alignItems: 'center',
						}
					}
				>
					<Outlet />
					{/* {renderFloatingButton()} */}
					{/* {!isMobile && <ScrollToTopButton onClick={onScroll} />} */}
					<FloatingButtons handleMenuClick={handleSidebarOpen} handleScrollToTopClick={onScroll} />
				</Box>
			</Grid>
		</Grid>
	);
}
export default ClientProductPage;
