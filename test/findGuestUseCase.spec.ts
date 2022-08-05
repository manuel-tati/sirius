import { User } from "./mock/interfaces/user";
import users from "./mock/users/users";

describe("FIND GUEST", () => {
  const user: User = {
    id: "76bf6d92-14cb-11ed-861d-0242ac120002",
    firstName: "Terry",
    lastName: "Medhurst",
    age: 50,
    gender: "male",
    email: "atuny0@sohu.com",
    phone: "+63 791 675 8914",
  };

  test("should return guest by uuid", () => {
    const getGuestByUuid = findGuestUseCase(
      "76bf6d92-14cb-11ed-861d-0242ac120002"
    );
    expect(user).toStrictEqual(getGuestByUuid);
  });
});

const findGuestUseCase = (uuid: string): User => {
  const user = users.filter((usr) => usr.id === uuid).map((usr) => usr);
  return user[0];
};
