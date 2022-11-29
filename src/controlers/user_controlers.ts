import { prisma } from "../config/db";
import { Users } from "@prisma/client";
import { Response, Request } from "express";

//Get Users
export const getUser= async(res:Response ,req:Request)=>{
  try {
  const getAllUsers = await prisma.users.findMany();
  return res.status(200).json(getAllUsers);
} catch (error) {
  console.log(error);
  return res.status(500).json({
    mrssage: "Server error !",
  });
}
}

//Add new User
export const addNewUser= async(res:Response ,req:Request)=>{
  try {
    const newUser = req.body as Users;
    await prisma.users.create({
      data: newUser,
    });
    return res.status(200).json({
      message: "User added !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mrssage: "Server Error !",
    });
  }
}

