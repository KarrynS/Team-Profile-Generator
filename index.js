const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs"); 
const employeeDetails = [];

function createManager(){
    return inquirer.prompt([
        {
            type: "input",
            name: "name", 
            message: "What is manager's name?", 
            validate: async (input) => {
                if (input === "" || !isNaN(input)) {
                    return "Please enter first and last name"
                }
            return true;
            }
        },

        {
            type: "input", 
            name: "id", 
            message: "What is your employee id?", 
            vaildate: async (input) => {
                if (isNaN(input)) {
                    return "Please enter an employee number";
                }
            return true;
            }
        },

        {
            type: "input", 
            name: "email", 
            message: "What is your email address?", 
            validate: async (input) => {
                if (input === "" || !isNaN(input)) {
                    return "Please enter a valid email address";
                }
            return true;
            }
        },
        {
            type: "input", 
            name : "number",
            message: "What is your office number?",
            validate: async (input) => {
                if (isNaN(input)) {
                    return "Please enter a valid phone number";
                }
            return true;
            }
        },
    ])


}
createManager();