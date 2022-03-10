//IMPORTS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import fs from 'fs';
import inquirer from 'inquirer';
import Engineer from './lib/engineer.js';
import Intern from './lib/intern.js';
import Manager from './lib/manager.js';

//VARIABLES////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//no global variables 

//FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//function to find out if the user wants to add another employee
async function addAnotherEmployee() {
    return await inquirer.prompt([
        {
        type: 'confirm',
        name: 'add',
        message: 'Enter another team member? ',
        default: 'Yes',
        }
    ])
        .then((response) => {
            return response.add;
        })
}

//function with the inquirer prompt that takes in the user's information
async function promptUpdateEmployee() {
    return await inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the new team members name?',
          name: 'name',
          default: 'Hazel',
        },
        {
          type: 'input',
          message: 'What is this team members ID number?',
          name: 'id',
          default: '42',
        },
        {
          type: 'input',
          message: 'What is this team members email?',
          name: 'email',
          default: 'myEmail@42.com',
        },
        {
          type: 'list',
          message: 'What is this team members role?',
          name: 'role',
          choices: ['Engineer', 'Manager', 'Intern']
        },
        {
          type: 'input',
          message: 'What is this managers office number',
          name: 'office',
          default: '424242',
          when: (input) => input.role === "Manager",
        },
        {
          type: 'input',
          message: 'What is this engineers GitHub username?',
          name: 'github',
          default: 'githubNAME',
          when: (input) => input.role === "Engineer",
        },
        {
          type: 'input',
          message: 'What is this interns school/college?',
          name: 'school',
          default: 'CSU',
          when: (input) => input.role === "Intern",
        },
      ])
      .then((response) => {
        return response;
      });
    };

//rendering function that creates the staff member cards based on the employee object the user created
function createStaffCards(employeeList) { 
    let staffMembers = "";
    var addThisCard = "";
    for (let index = 0; index < employeeList.length; index++) {
        const teamMember = employeeList[index];
        if (teamMember.office) {
            addThisCard =  
            `
            <div id="generate-employee-cards" class="col">
                <div class="card myCardEffects myFont" style="width: 18rem;">
                    <div class="card-header myCardHeader">
                    ${teamMember.role}
                    </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${teamMember.name}</li>
                    <li class="list-group-item">ID: ${teamMember.id}</li>
                    <li class="list-group-item">Email: ${teamMember.email}</li>
                    <li class="list-group-item">Office: ${teamMember.office}</li>
                </ul>
            </div>
            `
            ;
        } else if (teamMember.github) {
            addThisCard =  
            `
            <div id="generate-employee-cards" class="col">
                <div class="card myCardEffects myFont" style="width: 18rem;">
                    <div class="card-header myCardHeader">
                    ${teamMember.role}
                    </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${teamMember.name}</li>
                    <li class="list-group-item">ID: ${teamMember.id}</li>
                    <li class="list-group-item">Email: ${teamMember.email}</li>
                    <li class="list-group-item">Office: ${teamMember.github}</li>
                </ul>
            </div>
            `
            ;        
        } else if (teamMember.school) {
            addThisCard =  
            `
            <div id="generate-employee-cards" class="col">
                <div class="card myCardEffects myFont" style="width: 18rem;">
                    <div class="card-header myCardHeader">
                    ${teamMember.role}
                    </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${teamMember.name}</li>
                    <li class="list-group-item">ID: ${teamMember.id}</li>
                    <li class="list-group-item">Email: ${teamMember.email}</li>
                    <li class="list-group-item">Office: ${teamMember.school}</li>             
                </ul>
            </div>
            `
            ;
        };
        staffMembers += addThisCard;
    } 
    return staffMembers;
};

//the fs write file function that generates the main portion of the HTML page
function generateEmployeeHTML(employeeList) {  
  const htmlData =
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
        <title>Team Generator</title>
    </head>
    
    <body>
        <div class="jumbotron-fluid myJumbotron">
            <div class="container">
                <h1 class="myJumbotron myFont">Our Team</h1>
            </div>
        </div>
        <br>
        <div class="container">
            <div class="row">
            ${employeeList}     
            </div>
        </div>
        <script src="/index.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`;

    fs.writeFileSync("./dist/index.html", htmlData, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("HTML file written successfully");
        }
    });
}

//the main function of the application that calls the other functions and passes the necessary data around so that it is able to be used
async function main() {
    var employeeList = [];
    var createEmployees = true;

    while (createEmployees) {
        var newEmployee;
        const { name, id, role, email, office, github, school } = await promptUpdateEmployee();
        
        if (role === "Engineer") {
            newEmployee = new Engineer();
            newEmployee.github = github;
        } else if (role === "Intern") {
            newEmployee = new Intern();
            newEmployee.school = school;
        } else if (role === "Manager") {
            newEmployee = new Manager();
            newEmployee.office = office;
        }

        newEmployee.name = name;
        newEmployee.id = id;
        newEmployee.role = role;
        newEmployee.email = email;

        employeeList.push(newEmployee);
        createEmployees = await addAnotherEmployee();
    }

    console.log(employeeList);
    const allStaffCards = createStaffCards(employeeList);
    generateEmployeeHTML(allStaffCards);
}

//LOGIC/////////////////////////////////////////////////////////////////////////////////////////////////////////
main();
