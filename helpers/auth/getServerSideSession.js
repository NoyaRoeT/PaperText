import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

const getServerSideSession = async (ctx) => {
    const supabase = createServerSupabaseClient(ctx);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return { session, supabase };
};

export default getServerSideSession;
