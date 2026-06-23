import jwt from "jsonwebtoken";

const login = (email, password) => {
  const validEmail = process.env.ADMIN_EMAIL;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (email !== validEmail || password !== validPassword) {
    return null;
  }

  const payload = { email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

  return token;
};

export default { login };
