//export Employee from Employee

class Engineer extends Employee{
    constructor(github) {
      this.github = github;
    }
    getRole() {
      return "Engineer"
    }
}

module.exports = Engineer;
