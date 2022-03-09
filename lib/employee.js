import fs from 'fs';
import inquirer from 'inquirer';

console.log("loading");

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
          default: 'Hazel',
        },
        {
          type: 'input',
          message: 'What is this team members ID number?',
          name: 'ID',
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
          choices: ['Employee', 'Engineer', 'Manager', 'Intern']
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
        {
          type: 'confirm',
          name: 'add',
          message: 'Enter another team member? ',
        }
      ])
      .then((response) => {

        const { name, ID, role, email, office, github, school } = response;

        this.name = name;
        this.email = email;
        this.id = ID;
        this.role = role;
        this.office = office;
        this.github = github;
        this.school = school;

        
      });
    };

  }


export default Employee;
