class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // method to get name from inquirer input
  getName() {
    return this.name;
  }

  // method to get id from inquirer input.
  getId() {
    return this.id;
  }

  // method to get email from inquirer input.
  getEmail() {
    return this.email;
  }

  // method getting the role as an employee
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
