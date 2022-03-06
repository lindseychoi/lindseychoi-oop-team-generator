const fs = require('fs');
const inquirer = require('inquirer');

inquirer
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
      type: 'list',
      message: 'What is this team members role?',
      name: 'role',
      choices: ['Employee', 'Engineer', 'Manager', 'Intern']
    },
    {
      type: 'input',
      message: 'What is this team members email?',
      name: 'email',
    },
    {
      type: 'confirm',
      message: 'Would you like to add another team member at this time?',
      name: 'add',
      choices: ['Yes', 'No'],

    }
  ])

  .then((response) => {

    const { name, ID, role, email } = response;
    let teamMemberData = `New team member information: Name: ${name}/n Role:${role}/n Email: ${email}/n ID Number: ${ID}`;
    console.log(teamMemberData);
  });