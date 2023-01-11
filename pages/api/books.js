import { handleGetBooks, handlePostBooks } from "../../apiControllers/books";

export default function handler(req, res) {
    const method = req.method;
    // wjeqlwejqlwejklqwej
    switch (method) {
        case "GET":
            handleGetBooks(req, res);
            break;
        case "POST":
            handlePostBooks(req, res);
            break;
        default:
            res.send("You received this");
    }
}
