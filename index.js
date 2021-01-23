const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs"); 

const newTeam = [];

function createManager(){
    inquirer.prompt([
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
    .then(function(response) {
        console.log("Manager", response);
        const newManager = new Manager(
            response.name,
            response.id,
            response.email,
            response.number
        );
        console.log(Manager);
        newTeam.push(newManager);
        createNewMember();
    });
}
createManager();

function createNewMember() {
    return inquirer.prompt([
        {
            type: "list",
            name: "newMember",
            message: "Would you like to add a team member?",
            choices: [
                "Yes, add a new Engineer",
                "Yes, add a new Intern",
                "No, my team is complete"
            ],
            default: "Yes, add a new Engineer",
        },
    ])
    .then(function(data){
        switch (data.newMember) {
            case "Yes, add a new Engineer":
                createEngineer();
                break;
            case "Yes, add a new Intern":
                createIntern();
                break;
            case "No, my team is complete":
                finalTeam();
        }
    });
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name", 
            message: "What is engineer's name?", 
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
            message: "What is engineer's employee id?", 
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
            message: "What is engineer's email address?", 
            validate: async (input) => {
                if (input === "" || !isNaN(input)) {
                    return "Please enter a valid email address";
                }
            return true;
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is engineer's Github username?",
            validate: async (input) => {
                if (input === "") {
                    return "Please enter a valid Github username";
                }
            return true;
            }
        }
    ])
    .then(function (response) {
        console.log("Engineer", response);
        const newEngineer = new Engineer(
            response.name, 
            response.id, 
            response.email, 
            response.github
        );
        newTeam.push(newEngineer);
        createNewMember();
    });
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name", 
            message: "What is intern's name?", 
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
            message: "What is intern's employee id?", 
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
            message: "What is intern's email address?", 
            validate: async (input) => {
                if (input === "" || !isNaN(input)) {
                    return "Please enter a valid email address";
                }
            return true;
            }
        },
        {
            type: "input",
            name: "school",
            message: "Name of intern's school?",
            validate: async (input) => {
                if (input === "") {
                    return "Please enter a school name";
                }
            return true;
            }
        }
    ])
    .then(function(response) {
        console.log("Intern", response);
        const newIntern = new Intern(
            response.name,
            response.id,
            response.email,
            response.school
        );
        console.log(Intern);
        newTeam.push(newIntern);
        createNewMember();
    })
}

function finalTeam() {
    console.log(newTeam);
    fs.writeFile("./dist/team.html", newTeam, function(err){
        if(err) {
            return console.log(err);
        }
    }) .catch(function(err) {
        console.log(err);
    });
}