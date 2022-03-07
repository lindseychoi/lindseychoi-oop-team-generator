const fs = require('fs');
const inquirer = require('inquirer');

class Employee {
  constructor(name, email, id, role) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
  }

  promptUpdateEmployee() {
    return inquirer
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

        let teamMemberData = `New team member information: 
        Name: ${name} 
        Role:${role}
        Email: ${email}
        ID Number: ${ID}`;

        console.log(teamMemberData);
        });
  };
   
}

module.exports = Employee;
