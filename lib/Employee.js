// const filename = `TeamProfile.html`;

//const questions = ['Employee Name?', 'Employee ID?', 'Employee Email?']

class Badge {
  constructor(name, id, email, gitId){
    this.name = name;
    this.id = id;
    this.email = email; 
    this.gitId = gitId
  }
  info(){
    console.log(`${this.name}`, `${this.id}`, `${this.email}`, `${this.gitId}`);
  }
}

const inquirer = require('inquirer');

let people = [];

inquirer
.prompt([
  {
    type: 'loop',
    name: 'employee',
    message: 'add employee?',
    questions: [ 
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
      {
        type: 'input',
        message: 'Enter their GitHub username',
        name: 'gitId',
      },
    ]
}
])
.then ((response) => {

  if (typeof `${response.Name}` !== 'string' || !`${response.Name}`.trim().length) {
    throw new Error('Please provide employee name')
  }
  if (isNaN(`${response.Id}`) || `${response.Id}` === '') {
    throw new Error('Please provide valid employee ID')
  }
  if (!`${response.Email}`.includes('@')){
    throw new Error('Please provide valid employee email address')
  }

  console.log(response.employee.length)

  for(var i = 0; i < response.employee.length; i++){
   // let people = [];
    people[i] = new Badge(`${response.employee[i].Name}`, `${response.employee[i].Id}`, `${response.employee[i].Email}`, `${response.employee[i].gitId}`);
    people[i].info()
    //newEmployee.info()
  }
  
});

module.exports = Badge;
/* what does module.exports = Badge; do? When I grey it out and run index.js which requires this 
file it still functions the same regardless of whether module.exports = Badge; is greyed out or not */