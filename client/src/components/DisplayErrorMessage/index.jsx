/* eslint-disable react/no-array-index-key */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import ErrorMessage from './ErrorMessage';

function DisplayErrorMessage() {
	const errorMessages = useSelector((state) => state.error.messages);

	return (
		<div>
			{errorMessages?.map((message, index) => {
				if (typeof message === 'string') {
					<ErrorMessage
						message={message}
						index={index}
						open
						key={`error-message-${index}`}
					/>;
				} else {
					<ErrorMessage
						message="An error occurred. Please try again later."
						index={index}
						open
						key={`error-message-${index}`}
					/>;
				}
			})}
		</div>
	);
}

export default DisplayErrorMessage;
