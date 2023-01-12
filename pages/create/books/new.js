import AuthorEditBookPanel from "../../../components/AuthorEditBookPanel/AuthorEditBookPanel";
import { useEffect } from "react";

const test_data = {
    title: "Testing fallback true for getStaticPaths",
    synopsis: "Testing the /books POST API",
    genre: "genre 1",
    tags: ["tag 1", "tag 3"],
    author_id: "455fd961-2284-447f-81fa-2b2e7a790f4a",
    image_url: "/test_img1.webp",
};
export default function AuthorAddBookPage() {
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/books", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(test_data),
            });
        };
        fetchData();
    }, []);

    return <AuthorEditBookPanel />;
}
