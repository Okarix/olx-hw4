import instance from '@/axios/axios';

export const getProducts = async () => {
	const response = await instance.get('/products');
	return response.data;
};
