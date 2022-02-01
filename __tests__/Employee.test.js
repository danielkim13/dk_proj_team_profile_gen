const Employee = require("../lib/Employee");

// test case for setting up the employee objs (name, id, email)
test("creates an employee object", () => {
  const employee = new Employee("DK", 123, "dk@gmail.com");

  expect(employee.name).toBe("DK");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// test case for getting the employee name.
test("gets employee name", () => {
  const employee = new Employee("DK", 123, "dk@gmail.com");

  expect(employee.getName()).toBe("DK");
});

// test case for getting the employee id.
test("gets employee id", () => {
  const employee = new Employee("DK", 123, "dk@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

// test case for getting the employee email.
test("gets employee email", () => {
  const employee = new Employee("DK", 123, "dk@gmail.com");

  expect(employee.getEmail()).toEqual(expect.any(String));
});

// test case for getting employee role to return as 'Employee'
test("gets employee role as 'employee'", () => {
  const employee = new Employee("DK", 123, "dk@gmail.com");

  expect(employee.getRole()).toBe("Employee");
});
