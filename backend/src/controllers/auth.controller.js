import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
    res.json({ token, user_id: user.id, user_name: user.name, user_email: user.email });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.compare(password)))
    return res.status(400).json({ msg: "Credenciales inválidas" });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });
  res.json({ token, user_id: user.id, user_name: user.name, user_email: user.email });
};
