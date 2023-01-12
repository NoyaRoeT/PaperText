import { handleGetBooks, handlePostBooks } from "../../apiControllers/books";

export default async function handler(req, res) {
    const method = req.method;
    switch (method) {
        case "GET":
            await handleGetBooks(req, res);
            break;
        case "POST":
            await handlePostBooks(req, res);
            break;
        default:
            res.send("You received this");
            break;
    }
}
