import axios from 'axios';

const devBaseUrl = 'http://localhost:7001',
	prodBaseUrl = '182.92.215.68',
	NODE_ENV = process.env.NODE_ENV;

axios.defaults.baseURL = NODE_ENV === 'production' ? prodBaseUrl : devBaseUrl;
// axios.defaults.withCredentials = true; //允许携带cookie

// axios.interceptors.request.use(
// 	config => {
// 		return config;
// 	},
// 	err => Promise.reject(err)
// );

// axios.interceptors.response.use(
// 	res => {
// 		return res.data;
// 	},
// 	err => Promise.reject(err)
// );

export default axios;
