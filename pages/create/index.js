const Create = () => {
    return <></>;
};

export default Create;

export const getServerSideProps = async () => {
    return {
        props: {},
        redirect: {
            permenant: false,
            destination: "/create/books",
        },
    };
};
