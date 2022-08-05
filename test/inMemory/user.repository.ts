import { InMemoryDatabase } from "in-memory-database";
import users from "../mock/users/users";

const userRepository = new InMemoryDatabase();
userRepository.set("users", users);

export { userRepository };
