import users from "./mock/users/users";

describe("GET ALL USERS", () => {
  test("should retrieve all users", () => {
    expect(users.length).toBeGreaterThan(0);
  });
});
