import { User } from "../models/user.model.js";
import { generateHash } from "../utils/passwordUtils.js";
import { comparePasswords } from "../utils/passwordUtils.js";
export const registerUser = async (req, res) => {
  const { name, email, password, address } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already register !" });
    }
    const hashedPassword = await generateHash(password);

    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, address });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(409).json({ message: "Please register to login  !" });
    }
    const validPassword = await comparePasswords(
      password,
      existingUser.password
    );
    if (!validPassword) {
      return res.status(401).json({ message: "Incorrect username/password !" });
    }
    res.status(200).json({ message: "Login successfully !" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {}
  res.status(500).json({ message: "Internal server error !" });
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
  }
};
