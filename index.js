//IMPORTS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import fs from 'fs';
import inquirer from 'inquirer';
import Employee from './lib/employee.js';
// import Engineer from './lib/engineer.js';
// import Intern from './lib/intern.js';
// import Manager from './lib/manager.js';
// const Employee = require('./lib/employee.js');

//VARIABLES////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addAnotherEmployee() {
    inquirer.prompt([
        {
        type: 'confirm',
        name: 'add',
        message: 'Enter another team member? ',
        }
    ])  
        .then((response) => {
            if (response.add === true) {
                main();
            } else {
                console.log("here i am");
                return
            };
    })
}

async function main() {
  var employeeList = [];
  var numOfEmployees = 4;

  for (let index = 0; index < numOfEmployees; index++) {
    const newEmployee = new Employee();
    await newEmployee.promptUpdateEmployee();
    employeeList.push(newEmployee);
  }

  console.log(employeeList);
  const allStaffCards = createStaffCards(employeeList);
  generateEmployeeHTML(allStaffCards);
}

function createStaffCards(employeeList) { 
    let staffMembers = "";
    var addThisCard = "";
    // var officeNum = "";
    // var gitHubStuff = "";
    // var schoolID = "";
    for (let index = 0; index < employeeList.length; index++) {
        const teamMember = employeeList[index];
        if (teamMember.office) {
            addThisCard =  
            `<div id="generate-employee-cards" class="col">
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
            </div>`;
        } else if (teamMember.github) {
            addThisCard =  
            `<div id="generate-employee-cards" class="col">
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
            </div>`;        
        } else if (teamMember.school) {
            addThisCard =  
            `<div id="generate-employee-cards" class="col">
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
            </div>`
        } else {
            `<div id="generate-employee-cards" class="col">
                <div class="card myCardEffects myFont" style="width: 18rem;">
                    <div class="card-header myCardHeader">
                    Team Member
                    </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${teamMember.name}</li>
                    <li class="list-group-item">ID: ${teamMember.id}</li>
                    <li class="list-group-item">Email: ${teamMember.email}</li>
                    <li class="list-group-item">Office: ${teamMember.school}</li>             
                </ul>
            </div>`
        };
        staffMembers += addThisCard;
    } 
    return staffMembers;
};

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
      };

//LOGIC/////////////////////////////////////////////////////////////////////////////////////////////////////////
// main();
addAnotherEmployee();
