const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("DK", 123, "dk@gmail.com");

  expect(employee.name).toBe("DK");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
