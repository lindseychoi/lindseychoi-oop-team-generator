import Employee from './employee.js';

class Manager extends Employee {
    constructor(office) {
      super();
      this.office = office;
    }
}

export default Manager;

