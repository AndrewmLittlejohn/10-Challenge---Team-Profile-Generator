const fs = require('fs');

// TODO: Create a function to initialize app
// function init() {}

const inquirer = require('inquirer');

const filename = `TeamProfile.html`;


inquirer
.createPromptModule([
  {
    type: 'input',
    message: 'Employee Name',
    name: 'Name',
  },  
])
.then