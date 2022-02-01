const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // method to get the role to manager.
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
