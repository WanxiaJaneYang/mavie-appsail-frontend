import {
	Grid, Box, useMediaQuery, Drawer,
} from '@mui/material';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductSidebar from '../ClientProductPage/components/ProductSidebar';
import theme from '../../theme';
import FloatingButtons from '../ClientProductPage/components/FloatingButton';
import {
	getPersona, getProductFilter,
	getShareProductAccessInfo,
	getShareSurveyAccessInfo,
	getSurveyDomains,
} from '../../thunk';
import { setCurrentProduct } from '../../features/filters/productListSlice';
import { setIsSurvey, setCurrentSurvey } from '../../features/filters/surveySlice';

function SharePage() {
	const ref = useRef();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const {
		isSurvey, currentSurvey,
		surveyList,
	} = useSelector((state) => state.filters.survey);
	const productIds = currentSurvey?.relatedProductList?.map((product) => product?.id);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { productId, surveyId } = useParams();
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
			if (productId) {
				dispatch(getProductFilter(productId));
				dispatch(getPersona(productId));
			} else if (surveyId && productIds?.length > 0) {
				dispatch(getSurveyDomains({
					surveyId,
					productIds,
				}));
				dispatch(setIsSurvey(true));
			}
		},
		[productId, surveyId, dispatch, productIds],
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
export default SharePage;
