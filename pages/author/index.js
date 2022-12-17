const Author = () => {
    return <></>;
};

export default Author;

export const getServerSideProps = async () => {
    return {
        props: {},
        redirect: {
            permenant: false,
            destination: "/author/books",
        },
    };
};
