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

//function to prompt the initial question of employee's role
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
        //conditionals to determine the role and run the corresponding function
        if (response.role === "Engineer"){
          createEngineer()
        } else if(response.role === "Manager"){
          createManager();
        } else if(response.role === "Intern"){
          createIntern();
          // if the user selects "I'm done!"
        } else {
          //if the output folder already exists, render the HTML and overwrite the existing file 
          if (fs.existsSync("./output")) {
            const renderEmployees = render(employees);
            fs.writeFileSync(outputPath, renderEmployees, 'utf-8'); 
            //if the output folder does not exist, make the directory and render the HTML, or throw an error
          } else {
            fs.mkdir("./output", function (err) {
              if (err) {
                throw err;
              } else {
                console.log("New output directory has been successfully created!");
                const renderEmployees = render(employees);
                fs.writeFileSync(outputPath, renderEmployees, 'utf-8'); 
              }
            })
          }
        }

      });
    
}
//calls the employeeRole function
employeeRole();

//function to ask the engineer specific questions
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
      //creates a new Engineer with the information from the user input
      const engineer = new Engineer(response.name, response.id, response.email, response.github);
      //pushes the engineer object into the employees array
      employees.push(engineer);
      employeeRole();
    });
}
//function to ask the manager specific questions
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
      //creates a new manager with the information from the user input
      const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
      //pushes the manager object into the employees array
      employees.push(manager);
      employeeRole();
    });
}
//function to ask the intern specific questions
function createIntern() {
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
        message: "What is the name of the employee's school?",
        name: "school",
      },
    ])
    .then((response) => {
      //creates a new intern with the information from the user input
      const intern = new Intern(response.name, response.id, response.email, response.school);
      //pushes the intern object into the employees array
      employees.push(intern);
      employeeRole();
    });
}
