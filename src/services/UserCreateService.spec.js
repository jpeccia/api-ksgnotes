const AppError = require("../utils/AppError");

const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");

describe("UserCreateService", () => {
  let userRepositoryInMemory = null;
  let userCreateService = null;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userCreateService = new UserCreateService(userRepositoryInMemory);
  });

  it("user should be created", async () => {
    const user = {
      name: "User Test",
      email: "user@test.com",
      password: "123",
    };

    const userCreated = await userCreateService.execute(user);

    expect(userCreated).toHaveProperty("id");
  });

  it("user not should be created with exists email", async () => {
    const user1 = {
      name: "User Test1",
      email: "user@test.com",
      password: "123",
    };

    const user2 = {
      name: "User Test2",
      email: "user@test.com",
      password: "456",
    };

    await userCreateService.execute(user1);
    await expect(userCreateService.execute(user2)).rejects.toEqual(
      new AppError("Este email já está em uso.")
    );
  });
});
