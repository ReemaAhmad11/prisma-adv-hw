import express from "express";
import validate from "../middleware/validate";
import { getUser } from '../controlers/user_controlers';
import { addNewUser } from '../controlers/user_controlers';
import { addNewUserSchema } from "../zod_schema/user_shcema";

const userRouter = express.Router();
userRouter.get(`/`, getUser);
userRouter.post(`/`,validate(addNewUserSchema), addNewUser);


export default userRouter;
