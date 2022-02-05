const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  //   method to get engineer github username.
  getGitHub() {
    return this.github;
  }

  //   method to get the role as Engineer.
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
