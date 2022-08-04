describe("CREATE USER", () => {
  test("should create user", () => {
    const user: User = {
      id: Math.floor(Math.random() * 100000),
      firstName: "Kaillan",
      lastName: "Tumelia",
      email: "kaillan@test.com",
      password: "123",
    };
    const createUser = createUserUseCase(user);
    expect(createUser).toBe(user);
  });

  test("should not create if there is already a user with that email", () => {
    const user: User = {
      id: Math.floor(Math.random() * 100000),
      firstName: "User003",
      lastName: "Test",
      email: "test001@test.com",
      password: "123",
    };

    expect(() => createUserUseCase(user)).toThrow(
      "there is already a user with that email"
    );
  });
});

interface User {
  id?: string | number;
  firstName: string;
  lastName: string;
  username?: string | undefined;
  email: string;
  password: string;
}

const users: User[] = [
  {
    id: Math.floor(Math.random() * 100000),
    firstName: "Test001",
    lastName: "User",
    email: "test001@test.com",
    password: "123",
  },
  {
    id: Math.floor(Math.random() * 100000),
    firstName: "Test002",
    lastName: "User",
    email: "test002@test.com",
    password: "123",
  },
];

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
