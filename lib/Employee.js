// const filename = `TeamProfile.html`;

//const questions = ['Employee Name?', 'Employee ID?', 'Employee Email?']

function Badge(name, id, email){
  this.name = name;
  this.id = id;
  this.email = email;
  this.info = () => {
    if (this.name != '' && this.id != '' && this.email != '')
    
    console.log(name, id, email)
    
  };
}

const inquirer = require('inquirer');

inquirer
.prompt([
  {
    type: 'input',
    message: 'Employee Name',
    name: 'Name',
  },  
  {
    type: 'input',
    message: 'Employee ID',
    name: 'Id',
  },  
  {
    type: 'input',
    message: 'Employee Email',
    name: 'Email',
  },  
])
.then ((response) => {

  if (typeof `${response.Name}` !== 'string' || !`${response.Name}`.trim().length) {
    throw new Error('Please provide employee name')
  }
  if (isNaN(`${response.Id}`)) {
    throw new Error('Please provide valid employee ID')
  }
  if (!`${response.Email}`.includes('@')){
    throw new Error('Please provide valid employee email address')
  }

  const newEmployee = new Badge(`${response.Name}`, `${response.Id}`, `${response.Email}`)

  newEmployee.info()

});

module.exports = Badge;