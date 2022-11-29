import express from "express";
import validate from "../middleware/validate";
import { getLoans } from '../controlers/loan_controlers'; //for get
import { addLoan,lendBook,lendedBooks } from '../controlers/loan_controlers'; //for post
import { addLoanSchema ,loanSchema } from "../zod_schema/loan_schema";

const loanRouter = express.Router();
loanRouter.get('/', getLoans);
loanRouter.post('/', validate(addLoanSchema),addLoan);
loanRouter.post('/', validate(loanSchema), lendBook);
loanRouter.post('/', validate(loanSchema), lendedBooks);

export default loanRouter;