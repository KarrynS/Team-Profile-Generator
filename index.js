const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs"); 

const newTeam = [];

//inquirer prompt to enter new manager
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
            validate: async (input) => {
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
    .then(function(teamMember) {
        console.log("Manager", teamMember);
        const newManager = new Manager(
            teamMember.name,
            teamMember.id,
            teamMember.email,
            teamMember.number
        );
        console.log(Manager);
        newTeam.push(newManager);
        createNewMember();
    });
}
createManager();

//inquirer prompt to add a new team member
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

//inquirer prompt for new engineer details
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
            validate: async (input) => {
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
    .then(function (teamMember) {
        console.log("Engineer", teamMember);
        const newEngineer = new Engineer(
            teamMember.name, 
            teamMember.id, 
            teamMember.email, 
            teamMember.github
        );
        newTeam.push(newEngineer);
        createNewMember();
    });
}

//inquirer prompt for new Intern details
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
    .then(function(teamMember) {
        console.log("Intern", teamMember);
        const newIntern = new Intern(
            teamMember.name,
            teamMember.id,
            teamMember.email,
            teamMember.school
        );
        console.log(Intern);
        newTeam.push(newIntern);
        createNewMember();
    })
}
   //render employee cards using their role
   function generateEmployeeCards(newTeam) {
    let cards = [];
    let cardHtml;
    newTeam.forEach((teamMember) => {
        if (teamMember.getRole() === "Manager") {
            cardHtml = 
            `<div class="col mb-4">
                <div class="card text-white bg-dark" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"> ${teamMember.name}</h5>
                        <p class="card-text"><i class="fas fa-mug-hot mr-2"></i>Manager</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMember.id}</li>
                        <li class="list-group-item" ><a href="mailto: ${teamMember.email}" target="_blank">Email: ${teamMember.email}</a></li>
                        <li class="list-group-item">Office Number: ${teamMember.officeNumber}</li>
                    </ul>
                </div>
            </div>
            `
        }
        if (teamMember.getRole() === "Engineer") {
            cardHtml = 
            `<div class="col mb-4">
                <div class="card text-white bg-dark" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"> ${teamMember.name} </h5>
                        <p class="card-text"><i class="fas fa-glasses mr-2"></i>Engineer</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMember.id}</li>
                        <li class="list-group-item" ><a href="mailto: ${teamMember.email}" target="_blank">Email: ${teamMember.email}</a></li>
                        <li class="list-group-item" >Githib:<a href="https://github.com/${teamMember.github}" target="_blank"> ${teamMember.github}</a></li>
                    </ul>
                </div>
            </div>
            `
        }
        if (teamMember.getRole() === "Intern") {
            cardHtml = 
            `<div class="col mb-4">
                <div class="card text-white bg-dark" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${teamMember.name}</h5>
                        <p class="card-text"><i class="fas fa-user-graduate mr-2"></i>Intern</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMember.id}</li>
                        <li class="list-group-item" ><a href="mailto: ${teamMember.email}" target="_blank">Email: ${teamMember.email}</a></li>
                        <li class="list-group-item">School: ${teamMember.school}</li>
                    </ul>
                </div>
            </div>
            `
        }
        cards.push(cardHtml);
    })
    return cards;
}

//rendering HTML
function generateHtml(newTeam) {
    return (
    `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/4b0c0504a3.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.8.2/devicon.min.css">
      <link rel="stylesheet" href="team.css">
    </head>
    <body>
        <!--Heading-->
        <div class="jumbotron jumbotron-fluid bg-dark">
            <div class="container">
              <h1 class="display-4">My Team</h1>
            </div>
        </div>
         <!--Cards-->
         <div class="container">
            <div class="row row-cols-1 row-cols-md-3 ">
               ${generateEmployeeCards(newTeam)}
            </div>
        </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>  
      </body>
    </html>
     `
    )
}

function finalTeam() {
    generateHtml(newTeam);

     //render HTML template to receive generated employee cards
    fs.writeFile("./dist/team.html", generateHtml(newTeam), function(err){
        if(err) {
            return console.log(err);
        }

        console.log("Succesfully written");
    })
}