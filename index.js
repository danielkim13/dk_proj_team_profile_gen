// required for node and npm
const fs = require("fs");
const inquirer = require("inquirer");

// required library constructors.
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Team array where data will be pushed to.
const teamArray = [];

const promptManager = () => {
  console.log(`================================================
       Team Profile Generator initiated
================================================`);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the team manager's name (Required)",
        validate: (name) => {
          if (name.length > 0 && isNaN(name)) {
            return true;
          } else {
            console.log("Please enter manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the team manager's identification number (Required)",
        validate: (id) => {
          if (id.length > 0 && !isNaN(id)) {
            return true;
          } else {
            console.log("Please enter manager's ID number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the team manager's e-mail address(Required)",
        validate: (email) => {
          // using regular expression to validate e-mail
          const regexPattern = /.+@\w+[.].+/;
          const valid = regexPattern.test(email);

          if (email.length > 0 && valid) {
            return true;
          } else {
            console.log("Please enter a valid manager's e-mail address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the team manager's office number (Required)",
        validate: (officeNumber) => {
          if (officeNumber.length > 0 && !isNaN(officeNumber)) {
            return true;
          } else {
            console.log("Please enter manager's office number!");
            return false;
          }
        },
      },
    ])
    .then((managerData) => {
      // destructure
      const { name, id, email, officeNumber } = managerData;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
    });
};

// employee prompt function.
const promptEmployee = () => {
  console.log(`========================================
    add an employee
========================================`);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "billet",
        message: "Select the employee's job title.",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Enter the employee's name (Required)",
        validate: (name) => {
          if (name.length > 0 && isNaN(name)) {
            return true;
          } else {
            console.log("Please enter employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's identification number (Required)",
        validate: (id) => {
          if (id.length > 0 && !isNaN(id)) {
            return true;
          } else {
            console.log("Please enter employee's ID number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee's e-mail address(Required)",
        validate: (email) => {
          // using regular expression to validate e-mail
          const regexPattern = /.+@\w+[.].+/;
          const valid = regexPattern.test(email);

          if (email.length > 0 && valid) {
            return true;
          } else {
            console.log("Please enter a valid employee's e-mail address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's github username.",
        when: ({ billet }) => billet === "Engineer",
        validate: (gitHub) => {
          if (gitHub.length > 0) {
            return true;
          } else {
            console.log("Please enter a valid github username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school name.",
        when: ({ billet }) => billet === "Intern",
        validate: (school) => {
          if (school.length > 0) {
            return true;
          } else {
            console.log("Please enter the school name!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "addEmployee",
        message: "Additional employee?",
        default: true,
      },
    ])
    .then((employeeData) => {
      const { billet, name, id, email, github, school, addEmployee } = employeeData;

      let employee;

      if (billet === "Engineer") {
        employee = new Engineer(name, id, email, github);
      }

      if (billet === "Intern") {
        employee = new Intern(name, id, email, school);
      }

      teamArray.push(employee);

      if (addEmployee) {
        return promptEmployee();
      } else {
        // generate HTML file.
        return teamArray;
      }
    });
};

promptManager()
  .then(promptEmployee)
  .then((teamArray) => {
    writeHTML(teamArray);
  });
