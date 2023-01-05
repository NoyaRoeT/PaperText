import getServerSideSession from "../../helpers/auth/getserverSideSession";

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
                permenant: false,
                destination: "/",
            },
        };
    }

    return {
        props: {},
        redirect: {
            permenant: false,
            destination: "/create/books",
        },
    };
};
