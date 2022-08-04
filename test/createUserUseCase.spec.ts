import { User } from "./mock/interfaces/user";
import users from "./mock/users/users";

describe("CREATE USER", () => {
  test("should create user", () => {
    const user: User = {
      id: Math.floor(Math.random() * 100000),
      firstName: "Eleanora",
      lastName: "Price",
      maidenName: "Cummings",
      age: 37,
      gender: "female",
      email: "umcgourty9@jalbum.net",
      phone: "+60 184 408 0824",
      username: "umcgourty9",
      password: "i0xzpX",
      birthDate: "1958-08-11",
      image: "https://robohash.org/aliquamcumqueiure.png",
      bloodGroup: "O+",
    };
    const createUser = createUserUseCase(user);
    expect(createUser).toBe(user);
  });

  test("should not create if there is already a user with that email", () => {
    const user: User = {
      id: Math.floor(Math.random() * 100000),
      firstName: "Demetrius",
      lastName: "Corkery",
      maidenName: "Gleason",
      age: 22,
      gender: "male",
      email: "nloiterton8@aol.com",
      phone: "+86 356 590 9727",
      username: "nloiterton8",
      password: "HTQxxXV9Bq4",
      birthDate: "1971-03-11",
      image: "https://robohash.org/excepturiiuremolestiae.png",
      bloodGroup: "A+",
    };

    expect(() => createUserUseCase(user)).toThrow(
      "there is already a user with that email"
    );
  });
});

const createUserUseCase = (user: User) => {
  user.username = generateUserName(user.firstName, user.lastName);
  const checkIfEmailAlreadyExists = users.some(
    (usr) => usr.email === user.email
  );

  if (checkIfEmailAlreadyExists) {
    throw new Error("there is already a user with that email");
  }

  users.push(user);
  return user;
};

const generateUserName = (firstName: string, lastName: string): string => {
  const username = firstName.concat(lastName);
  return username.toLowerCase();
};
