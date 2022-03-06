const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a description of the project:',
      name: 'description',
    },
    {
        type: 'input',
        message: 'What should be included for Installation on the readme?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the Usage for this project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What license should be listed for this project?',
        name: 'license',
        choices: ['MIT', 'Apache-2.0', 'ISC', 'Unlicense'] 
    },
    {
        type: 'input',
        message: 'Who else is a contributor on this project?',
        name: 'contributing',
    },
    {
      type: 'input',
      message: 'What testing information should be included?',
      name: 'tests',
  },

    
  ])
  .then((response) => {

    const { title, description, installation, usage, license, contributing, tests, gitHub, email } = response;
    let readmeData = 
`
# ${title} 
[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})
## ${description} 

### _Table of Contents_ 
* [Installation](#installation) 
* [Usage](#usage) 
* [Contributing](#contributing) 
* [Tests](#tests) 
* [Questions](#questions) 

### _Installation_ 
${installation} 

### _Usage_ 
${usage} 

### _Contributing_ 
${contributing} 

### _Tests_ 
${tests} 

### _Questions_ 
### _If you have any further questions, please contact me at ${gitHub} on github.com or ${email}!_ 

`;

    fs.writeFile("readme.md", readmeData, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("READMe written successfully");
        }
      });
});