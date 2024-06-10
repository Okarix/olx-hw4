import instance from '@/axios/axios';
import axios from 'axios';

export const getProducts = async () => {
	const response = await instance.get('/products');
	return response.data;
};

export const uploadImage = async (file: File): Promise<string> => {
	const formData = new FormData();
	formData.append('file', file);

	const response = await axios.post('https://api.escuelajs.co/api/v1/files/upload', formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});

	console.log(response);

	return response.data.location;
};

export const createProduct = async (data: any) => {
	const response = await instance.post('/products', data);
	console.log(response.data);
	return response.data;
};
