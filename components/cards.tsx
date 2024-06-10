import Card from './card';

const Cards: React.FC = () => {
	return (
		<main className='grid grid-cols-4 gap-4'>
			<Card
				img='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg'
				title='Cat'
				price={+1000}
				category='animals'
			/>
		</main>
	);
};

export default Cards;
