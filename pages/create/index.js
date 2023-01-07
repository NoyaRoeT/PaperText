import getServerSideSession from "../../helpers/auth/getServerSideSession";

const Create = () => {
    return <></>;
};

export default Create;

export const getServerSideProps = async (ctx) => {
    const session = await getServerSideSession(ctx);

    if (!session) {
        return {
            props: {},
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }

    return {
        props: {},
        redirect: {
            permanent: false,
            destination: "/create/books",
        },
    };
};
