const Engineer = require("../lib/Engineer");

test("creates github username object", () => {
  const engineer = new Engineer("DK", 123, "dk@gmail.com", "danielkim13");

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets github username", () => {
  const engineer = new Engineer("DK", 123, "dk@gmail.com", "danielkim13");

  expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test("gets role as engineer", () => {
  const engineer = new Engineer("DK", 123, "dk@gmail.com", "danielkim13");

  expect(engineer.getRole()).toEqual("Engineer");
});
