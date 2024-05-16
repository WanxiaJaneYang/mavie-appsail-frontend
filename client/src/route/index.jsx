import LoginPage from '../page/LoginPage';
import NotFoundPage from '../page/NotFoundPage';
import ClientProductPage from '../page/ClientProductPage';
import IndividualProductPage from '../page/IndividualProductPage';
import ProtectedRoute from './ProtectedRoute';
import ProductMetricPage from '../page/ProductMetricPage';
import ShareRoute from './ShareRoute';
import SharePage from '../page/SharePage';
import TestPage from '../page/TestPage';
import MultipleProductInfoPage from '../page/MultipleProductInfoPage';
import MultipleProductMetricPage from '../page/MultipleProductMetricPage';
import NoAccessPage from '../page/NoAccessPage';

const routes = [
	{
		path: '/',
		element: <LoginPage />,
	},
	{
		path: '/test',
		element: <TestPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/share',
		element: <ShareRoute />,
		children: [
			{
				path: '',
				element: <SharePage />,
				children: [
					{
						path: 'product/:productId',
						element: <IndividualProductPage />,
						children: [
							{
								path: 'metrics',
								element: <ProductMetricPage />,
							},
						],
					},
					{
						path: 'survey/:surveyId',
						element: <MultipleProductInfoPage />,
						children: [
							{
								path: 'metrics',
								element: <MultipleProductMetricPage />,
							},
						],
					},
				],

			},
		],
	},
	{
		path: '/client/:clientId',
		element: <ProtectedRoute />,
		children: [
			{
				path: '',
				element: <ClientProductPage />,
				children: [
					{
						path: 'product/:productId',
						element: <IndividualProductPage />,
						children: [
							{
								path: 'metrics',
								element: <ProductMetricPage />,
							},
						],
					},
					{
						path: 'survey/:surveyId',
						element: <MultipleProductInfoPage />,
						children: [
							{
								path: 'metrics',
								element: <MultipleProductMetricPage />,
							},
						],
					},
					{
						path: 'noAccess',
						element: <NoAccessPage />,
					},
				],

			},

		],
	},
	{
		path: '/*',
		element: <NotFoundPage />,
	},
];
export default routes;
