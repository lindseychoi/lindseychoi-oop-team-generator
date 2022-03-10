const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(school) {
      super();
      this.school = school;
    }
}

module.exports = Intern;
