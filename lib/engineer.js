const Employee = require('./employee.js');

class Engineer extends Employee{
    constructor(github) {
      super();
      this.github = github;
    }
}

module.exports = Engineer;


