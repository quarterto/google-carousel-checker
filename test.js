import 'dotenv/config';
import checkCarousel from './src';
import util from 'util';

checkCarousel({
	searchAnalyticsUrl: 'www.ft.com',
	query: {
		rowLimit: 8,
	},
	auth: {
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		refreshToken: process.env.REFRESH_TOKEN,
	},
	excludeQueries: [
		'financial times',
		'ft',
		'ft.com',
		'financialtimes',
	],
}).then(a => util.inspect(a, {depth: null}), e => e.stack);// .then(console.log);
