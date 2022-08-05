import { userRepository } from "./inMemory/user.repository";
import { User } from "./mock/interfaces/user";

const getAllUsers = (): User[] => userRepository.get("users");

describe("GET ALL USERS", () => {
  test("should retrieve all users", () => {
    expect(getAllUsers().length).toBeGreaterThan(0);
  });
});
