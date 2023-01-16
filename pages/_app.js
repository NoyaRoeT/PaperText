import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { globalContext } from '../helpers/context/globalContext';

export default function App({ Component, pageProps }) {
	const [supabaseClient] = useState(() => createBrowserSupabaseClient());

	return (
		<ThemeProvider>
			<SessionContextProvider
				supabaseClient={supabaseClient}
				initialSession={pageProps.initialSession}
			>
				<globalContext.Provider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</globalContext.Provider>
			</SessionContextProvider>
		</ThemeProvider>
	);
}
