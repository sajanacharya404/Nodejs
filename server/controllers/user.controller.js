import { User } from "../models/user.model.js";
export const registerUser = async (req, res) => {
  const { name, email, password, address } = req.body;
  try {
    const existingUser = await User.find({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already register !" });
    }
    const user = new User({ name, email, password, address });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).josn({ message: "Internal server error !" });
  }
};
