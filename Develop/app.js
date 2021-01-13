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

// array of questions for user input
// function createTeam() {}
// const questions = [
//     {
//         type: "input",
//         message: "What is the employee's name?",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "What is the employee's ID?",
//         name: "id"
//     },
//     {
//         type: "input",
//         message: "Please enter the employee's email address?",
//         name: "email"
//     },
//     {
//         type: "list",
//         message: "What is the employee's ID?",
//         choices: ["Engineer", "Manager", "Intern"],
//         name: "role"
//     },

// ]

function createEmployee() {
    inquirer.prompt([
        
            {
                type: "input",
                message: "What is the employee's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the employee's ID?",
                name: "id"
            },
            {
                type: "input",
                message: "Please enter the employee's email address?",
                name: "email"
            },
            {
                type: "list",
                message: "What is the employee's ID?",
                choices: ["Engineer", "Manager", "Intern"],
                name: "role"
            }
    ]).then((response) => {
        console.log(response);
    })
}

createEmployee();
// asks specific questions based on what the user choices for role?
//series of functions (if/else embedded)
//are you done? array of employees that passes into the render function -- renders the HTML page
//.then call another function that is defined elsewhere
//

//

// uses the inquirer package to prompt with questions
// function init(){
//     inquirer.prompt(questions).then((response) => {
//         console.log(response);
//     })
// }

// init();

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
