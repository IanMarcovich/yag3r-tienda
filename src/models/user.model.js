import fs from "fs/promises";
import path from "path";

const usersFile = path.resolve("src/data/users.json");

const readUsers = async () => {
  const content = await fs.readFile(usersFile, "utf8");
  return JSON.parse(content || "[]");
};

const writeUsers = async (users) => {
  await fs.writeFile(usersFile, JSON.stringify(users, null, 2), "utf8");
};

const findUserByEmail = async (email) => {
  const normalizedEmail = email.toLowerCase().trim();
  const users = await readUsers();
  return users.find((user) => user.email === normalizedEmail) || null;
};

const createUser = async ({ email, passwordHash, salt }) => {
  const normalizedEmail = email.toLowerCase().trim();
  const users = await readUsers();
  const newUser = {
    id: Date.now().toString(),
    email: normalizedEmail,
    passwordHash,
    salt,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  await writeUsers(users);
  return newUser;
};

export default {
  findUserByEmail,
  createUser,
};
