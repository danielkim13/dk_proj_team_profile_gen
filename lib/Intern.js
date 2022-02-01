const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }

  //   method to get school name.
  getSchool() {
    return this.school;
  }

  //   method to get the role as Intern.
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
