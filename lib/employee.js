import fs from 'fs';
import inquirer from 'inquirer';

console.log("loading")

class Employee {
  constructor(name, email, id, role) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
  }

  async promptUpdateEmployee() {
    return await inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the new team members name?',
          name: 'name',
        },
        {
          type: 'input',
          message: 'What is this team members ID number?',
          name: 'ID',
        },
        {
          type: 'input',
          message: 'What is this team members email?',
          name: 'email',
        },
        {
          type: 'list',
          message: 'What is this team members role?',
          name: 'role',
          choices: ['Employee', 'Engineer', 'Manager', 'Intern']
        },
        {
          type: 'input',
          message: 'What is this managers office number',
          name: 'office',
          when: (input) => input.role === "Manager",
        },
        {
          type: 'input',
          message: 'What is this engineers GitHub username?',
          name: 'office',
          when: (input) => input.role === "Engineer",
        },
        {
          type: 'input',
          message: 'What is this interns school/college?',
          name: 'office',
          when: (input) => input.role === "Intern",
        },
      ])
      .then((response) => {

        const { name, ID, role, email } = response;

        this.name = name;
        this.email = email;
        this.id = ID;
        this.role = role;

        // const htmlData =
        //   `<!DOCTYPE html>
        // <html lang="en">
        
        // <head>
        //     <meta charset="UTF-8">
        //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
        //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        //         integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        //     <link rel="preconnect" href="https://fonts.googleapis.com">
        //     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        //     <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">
        //     <link rel="stylesheet" href="./style.css">
        //     <title>Team Generator</title>
        // </head>
        
        // <body>
        //     <div class="jumbotron-fluid myJumbotron">
        //         <div class="container">
        //             <h1 class="myJumbotron myFont">Our Team</h1>
        //         </div>
        //     </div>
        //     <br>
        //     <div class="container">
        //         <div class="row">
        //             <div id="generate-employee-cards" class="col">
        //                 <div class="card myCardEffects myFont" style="width: 18rem;">
        //                     <div class="card-header myCardHeader">
        //                     ${role}
        //                     </div>
        //                     <ul class="list-group list-group-flush">
        //                         <li class="list-group-item">${name}</li>
        //                         <li class="list-group-item">${ID}</li>
        //                         <li class="list-group-item">${email}</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div class="col">
        //                 <div class="card myCardEffects myFont" style="width: 18rem;">
        //                     <div class="card-header myCardHeader">
        //                     ${role}
        //                     </div>
        //                     <ul class="list-group list-group-flush">
        //                     <li class="list-group-item">${name}</li>
        //                     <li class="list-group-item">${ID}</li>
        //                     <li class="list-group-item">${email}</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div class="col">
        //                 <div class="card myCardEffects myFont" style="width: 18rem;">
        //                     <div class="card-header myCardHeader">
        //                     ${role}
        //                     </div>
        //                     <ul class="list-group list-group-flush">
        //                     <li class="list-group-item">${name}</li>
        //                     <li class="list-group-item">${ID}</li>
        //                     <li class="list-group-item">${email}</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div class="col">
        //                 <div class="card myCardEffects myFont" style="width: 18rem;">
        //                     <div class="card-header myCardHeader">
        //                     ${role}
        //                     </div>
        //                     <ul class="list-group list-group-flush">
        //                     <li class="list-group-item">${name}</li>
        //                     <li class="list-group-item">${ID}</li>
        //                     <li class="list-group-item">${email}</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <script src="/index.js"></script>
        //     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        //         integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        //         crossorigin="anonymous"></script>
        // </body>
        
        // </html>`;

        // fs.writeFileSync("./dist/index.html", htmlData, (err) => {
        //   if (err)
        //     console.log(err);
        //   else {
        //     console.log("HTML file written successfully");
        //   }

        });
      };

  }


export default Employee;
