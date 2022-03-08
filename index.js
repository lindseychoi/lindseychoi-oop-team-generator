import fs from 'fs';
import inquirer from 'inquirer';
import Employee from './lib/employee.js';
// import Engineer from './lib/engineer.js';
// import Intern from './lib/intern.js';
// import Manager from './lib/manager.js';
// const Employee = require('./lib/employee.js');

async function main() {

  var employeeList = [];
  var numOfEmployees = 4;

  for (let index = 0; index < numOfEmployees; index++) {
    const newEmployee = new Employee();
    await newEmployee.promptUpdateEmployee();
    employeeList.push(newEmployee);
  }

  console.log(employeeList);
  generateEmployeeHTML(employeeList);
}

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
                    <div id="generate-employee-cards" class="col">
                        <div class="card myCardEffects myFont" style="width: 18rem;">
                            <div class="card-header myCardHeader">
                            ${employeeList[0].role}
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${employeeList[0].name}</li>
                                <li class="list-group-item">${employeeList[0].id}</li>
                                <li class="list-group-item">${employeeList[0].email}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card myCardEffects myFont" style="width: 18rem;">
                            <div class="card-header myCardHeader">
                            ${employeeList[1].role}
                            </div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">${employeeList[1].name}</li>
                            <li class="list-group-item">${employeeList[1].id}</li>
                            <li class="list-group-item">${employeeList[1].email}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card myCardEffects myFont" style="width: 18rem;">
                            <div class="card-header myCardHeader">
                            ${employeeList[2].role}
                            </div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">${employeeList[2].name}</li>
                            <li class="list-group-item">${employeeList[2].id}</li>
                            <li class="list-group-item">${employeeList[2].email}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card myCardEffects myFont" style="width: 18rem;">
                            <div class="card-header myCardHeader">
                            ${employeeList[3].role}
                            </div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">${employeeList[3].name}</li>
                            <li class="list-group-item">${employeeList[3].id}</li>
                            <li class="list-group-item">${employeeList[3].email}</li>
                            </ul>
                        </div>
                    </div>
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

main();

//use .map to write a drawing function that puts the info from each object onto the html page on a card    