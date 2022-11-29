import express from "express";
import validate from "../middleware/validate";
import { getBooks } from '../controlers/book_controlers';
import { addNewBook } from '../controlers/book_controlers';
import { addNewBookSchema } from "../zod_schema/book_schema";


const bookRouter = express.Router();
bookRouter.get(`/`, getBooks)
bookRouter.post('/',validate(addNewBookSchema),addNewBook)

export default bookRouter;
