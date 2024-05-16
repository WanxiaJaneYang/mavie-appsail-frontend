import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { setCurrentProduct } from '../../../../features/filters/productListSlice';
import theme from '../../../../theme';

function ProductSelector() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const currentProduct = useSelector((state) => state.filters.product.currentProduct);
	const productList = useSelector((state) => state.filters.product.products);
	const { productId, clientId } = useParams();

	const handleChange = (event) => {
		const selectedProduct = productList.find((product) => product.id === event.target.value);
		dispatch(setCurrentProduct(selectedProduct));
		navigate(`/client/${clientId}/product/${selectedProduct.id}/metrics`);
	};

	const selectedValue = currentProduct ? currentProduct.id : '';

	useEffect(() => {
		if (productId) {
			const urlProduct = productList.find((product) => product.id === productId);
			if (urlProduct && urlProduct.id !== (currentProduct && currentProduct.id)) {
				dispatch(setCurrentProduct(urlProduct));
			}
		} else if (currentProduct) {
			navigate(`/client/${clientId}/product/${currentProduct.id}/metrics`);
		}
	}, [productId, productList, currentProduct, dispatch, navigate, clientId]);

	return (

		<Select
			value={selectedValue}
			onChange={handleChange}
			displayEmpty
			inputProps={{ 'aria-label': 'Without label' }}
			sx={
				{
					marginLeft: '0px',
					marginBottom: '10px',
					marginTop: '10px',
					width: '100%',
					height: '35px',
					textAlign: 'left',
					paddingLeft: '0px',
				}
			}
		>
			{productList?.length > 0 ? productList.map((product) => (
				<MenuItem
					key={product.id}
					value={product.id}
					// sx={
					// 	{
					// 		fontFamily: 'Inter, sans-serif',
					// 		fontWeight: '400',
					// 		alignContent: 'start',
					// 	}
					// }
				>
					{product.name}

				</MenuItem>
			))
				: (
					<MenuItem
						value=""
						disabled
						sx={
							{
								fontFamily: 'Inter, sans-serif',
								fontWeight: '400',
								alignContent: 'start',
							}
						}
					>
						<Typography
							sx={
								{
									color: theme.palette.text.disabled,
								}
							}
						>
							No products available
						</Typography>
					</MenuItem>
				)}
		</Select>
	);
}

export default ProductSelector;
