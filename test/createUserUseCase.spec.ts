import { User } from "./mock/interfaces/user";
import users from "./mock/users/users";

describe("CREATE USER", () => {
  test("should create user", () => {
    const user: User = {
      id: "830cbd7a-14cb-11ed-861d-0242ac120002",
      firstName: "Eleanora",
      lastName: "Price",
      age: 37,
      gender: "female",
      email: "umcgourty9@jalbum.net",
      phone: "+60 184 408 0824",
    };
    const createUser = createUserUseCase(user);
    expect(createUser).toBe(user);
  });

  test("should not create if there is already a user with that email", () => {
    const user: User = {
      id: "897c2cb8-14cb-11ed-861d-0242ac120002",
      firstName: "Demetrius",
      lastName: "Corkery",
      age: 22,
      gender: "male",
      email: "nloiterton8@aol.com",
      phone: "+86 356 590 9727",
    };

    expect(() => createUserUseCase(user)).toThrow(
      "there is already a user with that email"
    );
  });
});

const createUserUseCase = (user: User) => {
  const checkIfEmailAlreadyExists = users.some(
    (usr) => usr.email === user.email
  );

  if (checkIfEmailAlreadyExists) {
    throw new Error("there is already a user with that email");
  }

  users.push(user);
  return user;
};
