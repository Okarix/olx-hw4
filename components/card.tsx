interface ICardProps {
	title: string;
	img: string;
	category: string;
	price: number;
}

const Card: React.FC<ICardProps> = ({ title, img, category, price }: ICardProps) => {
	return (
		<div className='w-[310px] h-[300px] shadow-md cursor-pointer bg-white'>
			<img
				src={`${img}`}
				alt='Image'
				className='h-2/3 w-full object-contain'
			/>
			<div className='p-2 flex flex-col items-start gap-1'>
				<h2 className='text-[14px]  text-[#002F34] '>{title}</h2>
				<b className='text-[16px] text-[#002F34] font-bold'>{price}</b>
				<span className='text-[11px] text-[#406367]'>{category}</span>
			</div>
		</div>
	);
};

export default Card;
