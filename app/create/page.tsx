const CreatePage: React.FC = () => {
	return (
		<main className='container mx-auto py-12'>
			<h1 className='text-2xl font-semibold'>Создать объявление</h1>

			<form className='divide-y divide-gray-200'>
				<div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
					<div className='relative'>
						<input
							type='text'
							className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
							placeholder='Название'
						/>
						<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>Название</label>
					</div>
					<div className='relative'>
						<input
							type='text'
							className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
							placeholder='Описание'
						/>
						<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>Описание</label>
					</div>
					<div className='relative'>
						<input
							type='number'
							className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
							placeholder='Цена'
						/>
						<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>Цена</label>
					</div>
					<div className='relative'>
						<input
							type='file'
							className='peer placeholder-transparent h-10 w-full text-gray-900 focus:outline-none focus:borer-rose-600 mt-2'
							placeholder='Фото'
						/>
						<label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm '>Фото</label>
					</div>
				</div>
				<div className='pt-8 flex justify-between'>
					<button className='items-center box-border cursor-pointer inline-flex justify-center m-0 min-h-[40px] relative no-underline font-bold text-[16px] leading-[18px] bg-[rgb(0,_47,_52)] border-[5px] border-[solid] border-[rgb(0,47,52)] rounded-[4px] text-[rgb(255,_255,_255)] pt-[10px] px-[30px] pb-[8px] w-auto hover:bg-white hover:text-[#002F34] active:bg-slate-300'>Добавить</button>
				</div>
			</form>
		</main>
	);
};

export default CreatePage;
