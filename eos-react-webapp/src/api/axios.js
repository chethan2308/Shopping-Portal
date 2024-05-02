import axios from 'axios';

export default axios.create({
	baseURL: 'http://eos-gateway-api-service:5555',
});
