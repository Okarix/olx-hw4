import Card from './card';
import { getProducts } from '@/services/api';
import { useQuery } from 'react-query';
import Skeleton from './skeleton';

interface IProduct {
	id: number;
	title: string;
	image: string;
	category: string;
	price: number;
}

const Cards: React.FC = () => {
	const { data: products, error, isLoading } = useQuery('products', getProducts);

	if (isLoading) return <Skeleton />;
	if (error) return <div className='mx-auto my-5'>Ошибка загрузки данных...</div>;

	return (
		<main className='grid grid-cols-4 gap-4'>
			{products.map((product: IProduct) => {
				return (
					<Card
						key={product.id}
						{...product}
					/>
				);
			})}
		</main>
	);
};

export default Cards;
