import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import DynamicSvg from '../../../../DynamicSvgIcon';
import PersonaSVG from '../../../../../images/svg/PersonaSVG.svg';

function RoundButton({ onClick, svgData, ...props }) {
	const styles = () => {
		if (!svgData) {
			return {
				maxWidth: '40%',
				maxHeight: '40%',
				// paddingBottom: '5px',
			};
		}

		return null;
	};
	return (
		<Box
			{...props}
		>
			<div
				style={{
					borderRadius: '50%', // Ensures the button is round
					border: 'none', // Removes the default border
					backgroundColor: '#D9D9D9', // Sets the button color to white
					padding: '0px', // Removes default padding
					cursor: onClick ? 'pointer' : 'default', // Changes the cursor to a pointer if the button is clickable
					outline: 'none', // Removes the outline to keep the design clean
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'center',
					boxShadow: `
                        2px 2px 2px rgba(0, 0, 0, 0.2),
                        4px 4px 2px rgba(0, 0, 0, 0.1)
                    `, // Multiple layers of shadows for elevation effect

				}}
			>
				<DynamicSvg
					onClick={onClick}
					svgData={svgData || PersonaSVG}
					style={{
						...styles(),
					}}
					{...props}
				/>
			</div>
		</Box>
	);
}

export default RoundButton;

RoundButton.propTypes = {
	svgData: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	// eslint-disable-next-line react/forbid-prop-types, react/require-default-props
	sx: PropTypes.object,
};
