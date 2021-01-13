// requires the employee class from employee.js
const Employee = require("./Employee");

// engineer class becomes an extension of the parent Employee class
class Engineer extends Employee {
    //constructor with name, id, email, and github properties
    constructor (name, id, email, github) {
        // inherits name, id, and email from the Employee parent class
        super (name, id, email);
        this.github = github;
    }
    // "getters" that return github and role
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
    }


// exports the engineer class
module.exports = Engineer;