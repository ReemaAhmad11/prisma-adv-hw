import express from "express";
import userRouter from "./routers/user_router";
import bookRouter from './routers/book_router';
import loanRouter from './routers/loan_router';
import 'dotenv/config'
import { connectDB } from "./config/db";

const app = express();
connectDB();
app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/book', bookRouter);
app.use('/api/v1/loan', loanRouter);

const PORT = process.env.port || 5005;
app.listen(PORT, () => {
  console.log("Server Run on Port : " + PORT);
});