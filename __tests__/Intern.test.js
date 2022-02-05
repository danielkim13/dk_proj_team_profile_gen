const Intern = require("../lib/Intern");

test("creates school object", () => {
  const intern = new Intern("DK", 123, "dk@gmail.com", "Virginia Tech");

  expect(intern.school).toEqual(expect.any(String));
});

test("gets school name", () => {
  const intern = new Intern("DK", 123, "dk@gmail.com", "Virginia Tech");

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("gets role as intern", () => {
  const intern = new Intern("DK", 123, "dk@gmail.com", "Virginia Tech");

  expect(intern.getRole()).toBe("Intern");
});
