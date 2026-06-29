import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "secret-key";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const login = async (email, password) => {
  const normalizedEmail = email.toLowerCase().trim();
  const normalizedAdminEmail = ADMIN_EMAIL.toLowerCase().trim();

  if (normalizedEmail !== normalizedAdminEmail || password !== ADMIN_PASSWORD) {
    return null;
  }

  const payload = { email: normalizedEmail };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });
};

export default {
  login,
};
