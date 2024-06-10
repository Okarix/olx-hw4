'use client';

import CreateForm from '@/components/createForm';
import { QueryClientProvider, QueryClient } from 'react-query';

const CreatePage: React.FC = () => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<main className='container mx-auto py-12'>
				<h1 className='text-2xl font-semibold'>Создать объявление</h1>
				<CreateForm />
			</main>
		</QueryClientProvider>
	);
};

export default CreatePage;
