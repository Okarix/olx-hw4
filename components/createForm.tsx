'use client';

import { useState } from 'react';
import { useQueryClient, useMutation, QueryClientProvider } from 'react-query';
import { uploadImage } from '@/services/api';
import { createProduct } from '@/services/api';

const CreateForm: React.FC = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [files, setFiles] = useState<File[]>([]);
	const [imageUrls, setImageUrls] = useState<string[]>([]);

	const queryClient = useQueryClient();

	const uploadMutation = useMutation(uploadImage);

	const createProductMutation = useMutation(createProduct, {
		onSuccess: () => {
			queryClient.invalidateQueries('products');
		},
	});

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setFiles(Array.from(event.target.files));
		}
	};

	const handleImageUpload = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event?.preventDefault();

		const uploadedImageUrls = await Promise.all(
			files.map(async file => {
				const imageUrl = await uploadMutation.mutateAsync(file);
				return imageUrl;
			})
		);

		setImageUrls(uploadedImageUrls);
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		if (imageUrls.length > 0) {
			const productData = {
				title,
				description,
				price,
				imageUrls,
			};

			createProductMutation.mutate(productData);
		} else {
			console.log('No images uploaded');
		}
		setTitle('');
		setDescription('');
		setPrice('');
		setImageUrls([]);
	};

	return (
		<form
			className='divide-y divide-gray-200'
			onSubmit={handleSubmit}
		>
			<div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
				<div className='relative'>
					<input
						type='text'
						className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
						placeholder='Название'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>Название</label>
				</div>
				<div className='relative'>
					<input
						type='text'
						className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
						placeholder='Описание'
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>Описание</label>
				</div>
				<div className='relative'>
					<input
						type='number'
						className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
						placeholder='Цена'
						value={price}
						onChange={e => setPrice(e.target.value)}
					/>
					<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>Цена</label>
				</div>
				<div className='relative'>
					<input
						type='file'
						className='peer placeholder-transparent h-10 w-full text-gray-900 focus:outline-none focus:borer-rose-600 mt-2'
						placeholder='Фото'
						onChange={handleFileChange}
						multiple
					/>
					<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm '>Фото</label>
					<button
						onClick={event => {
							handleImageUpload(event);
						}}
						className='items-center box-border cursor-pointer inline-flex justify-center m-0 min-h-[40px] relative no-underline font-bold text-[16px] leading-[18px] bg-[rgb(0,_47,_52)] border-[5px] border-[solid] border-[rgb(0,47,52)] rounded-[4px] text-[rgb(255,_255,_255)] pt-[10px] px-[30px] pb-[8px] w-auto hover:bg-white hover:text-[#002F34] active:bg-slate-300'
					>
						Загрузить изображение
					</button>
					{imageUrls.length > 0 && (
						<div>
							<p>Uploaded Images:</p>
							<ul>
								{imageUrls.map((imageUrl, index) => (
									<li key={index}>{imageUrl}</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
			<div className='pt-8 flex justify-between'>
				<button
					type='submit'
					className='items-center box-border cursor-pointer inline-flex justify-center m-0 min-h-[40px] relative no-underline font-bold text-[16px] leading-[18px] bg-[rgb(0,_47,_52)] border-[5px] border-[solid] border-[rgb(0,47,52)] rounded-[4px] text-[rgb(255,_255,_255)] pt-[10px] px-[30px] pb-[8px] w-auto hover:bg-white hover:text-[#002F34] active:bg-slate-300'
				>
					Добавить объявление
				</button>
			</div>
		</form>
	);
};

export default CreateForm;
