import Link from 'next/link';

const Header: React.FC = () => {
	return (
		<header className='  h-[71px] bg-[#002F34]'>
			<div className='flex container mx-auto justify-between items-center'>
				<Link href='/'>
					<img
						className='w-[101px] h-[71px] object-contain'
						src='./logo.png'
						alt='Logo'
					/>
				</Link>
				<Link href='/create'>
					<button className='items-center cursor-pointer justify-center m-0 h-[40px] relative no-underline font-bold text-[16px] leading-[18px] bg-[#FFFFFF] border-[solid] border-[5px] border-[#FFFFFF] rounded-[4px] text-[#002F34] px-5 hover:bg-[#002F34] hover:text-white active:bg-slate-400'>Подать объявление</button>
				</Link>
			</div>
		</header>
	);
};

export default Header;
