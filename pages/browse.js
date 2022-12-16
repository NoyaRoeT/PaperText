import Head from "next/head";
import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";
import BooksTable from "../components/BooksTable/BooksTable";
import BooksTableItem from "../components/BooksTable/BooksTableItem";

export default function Browse() {
    return (
        <>
            <Head>
                <title>PaperText | Browse Novels</title>
            </Head>
            <AdvancedSearch />
            <BooksTable>
                <BooksTableItem />
                <BooksTableItem />
                <BooksTableItem />
            </BooksTable>
        </>
    );
}
