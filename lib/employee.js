import fs from 'fs';
import inquirer from 'inquirer';

class Employee {
  constructor(name, email, id, role) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
  }
}


export default Employee;
