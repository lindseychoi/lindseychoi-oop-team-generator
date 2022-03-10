const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(office) {
      super();
      this.office = office;
    }
}

module.exports = Manager;

