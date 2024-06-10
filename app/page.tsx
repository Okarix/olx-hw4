'use client';

import Cards from '@/components/cards';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function HomePage() {
	const queryClient = new QueryClient();

	return (
		<main className='container mx-auto py-12'>
			<QueryClientProvider client={queryClient}>
				<Cards />
			</QueryClientProvider>
		</main>
	);
}
