import Employee from './employee.js';

class Engineer extends Employee{
    constructor(github) {
      super();
      this.github = github;
    }
}

export default Engineer;

