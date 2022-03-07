const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const newEmployee = new Employee('','','','');
var employeeList = [];

newEmployee.promptUpdateEmployee();
employeeList.push(newEmployee);

//use .map to write a drawing function that puts the info from each object onto the html page on a card    