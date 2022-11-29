import { prisma } from "../config/db";
import { Books } from "@prisma/client";
import { Response, Request } from "express";

//Get Books
export const getBooks= async(res:Response ,req:Request)=>{
  try {
    const getBooks = await prisma.books.findMany();
    return res.status(200).json(getBooks);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mrssage: "Server Error !",
    });
  }
}

//Add new Book
export const addNewBook= async(res:Response ,req:Request)=>{
  try{
    const NewBook=req.body as Books;
    await prisma.books.create({data: NewBook})
    return res.status(201).json({
      message: "Book added !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mrssage: "Server error !",
    });
  }

  }
