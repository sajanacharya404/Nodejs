import { Book } from "../models/book.model.js";
import { User } from "../models/user.model.js";
import { CustomError } from "../utils/customError.js";

export const createBook = async (req, res) => {
  const id = req.id;
  try {
    const { title, description } = req.body;
    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(404).json({ message: "USER NOT FOUND!" });
    }

    const book = new Book({
      title,
      description,
      createdBy: id,
    });
    await book.save();
    userExists.books.push(book._id);
    await userExists.save();

    res.status(201).json(book);
  } catch (error) {
    throw new CustomError("Internal Server Error !", 500);
  }
};
