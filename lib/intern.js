import Employee from './employee.js';

class Intern extends Employee {
    constructor(school) {
      super();
      this.school = school;
    }
}

export default Intern;
