import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient());

    return (
        <ThemeProvider>
            <SessionContextProvider
                supabaseClient={supabaseClient}
                initialSession={pageProps.initialSession}
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SessionContextProvider>
        </ThemeProvider>
    );
}
