const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { create } = require("domain");
const { defaultCipherList } = require("constants");

//array to store employee information from user input
let employees = [];

function employeeRole() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is the employee's role?",
        choices: ["Engineer", "Manager", "Intern", "I'm done!"],
        name: "role",
      },
    ])
    .then((response) => { 

        if (response.role === "Engineer"){
          createEngineer()
        } else if(response.role === "Manager"){
          createManager();
        } else {
          const renderEmployees = render(employees);
          fs.writeFileSync(outputPath, renderEmployees, 'utf-8');
        }

    
      // switch (response.role){
      //   case "Engineer":
      //     createEngineer();
      //   case "Manager":
      //     createManager();
      //   // case 'Intern':
      //   //   createIntern();
      //   default:
      //     const renderEmployees = render(employees);
      //     fs.writeFileSync(outputPath, renderEmployees, 'utf-8');

      });
    
}

employeeRole();

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employee's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter the employee's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the employee's Github username?",
        name: "github",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(response.name, response.id, response.email, response.github);
      employees.push(engineer);
      console.log(employees);
      employeeRole();
    });
}

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employee's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter the employee's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the employee's office number?",
        name: "officeNumber",
      },
    ])
    .then((response) => {
      const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
      employees.push(manager);
      console.log(employees);
      employeeRole();
    });
}






//abstract the final question about more team members


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
