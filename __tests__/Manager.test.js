const Manager = require("../lib/Manager");

test("creates office number object", () => {
  const manager = new Manager("DK", 123, "dk@gmail.com", 9);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets the role as manager", () => {
  const manager = new Manager("DK", 123, "dk@gmail.com", 9);

  expect(manager.getRole()).toBe("Manager");
});
