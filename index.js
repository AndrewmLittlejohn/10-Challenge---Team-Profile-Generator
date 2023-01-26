const BasicInfo = require('./employee.js');
const website = require('./sitecode.js')
let people = [];
const inquirer = require('inquirer');
const fs = require('fs');
const filename = `myTeam.html`;


inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

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

  // if (typeof `${response.Name}` !== 'string' || !`${response.Name}`.trim().length) {
  //   throw new Error('Please provide employee name')
  // }
  // if (isNaN(`${response.Id}`) || `${response.Id}` === '') {
  //   throw new Error('Please provide valid employee ID')
  // }
  // if (!`${response.Email}`.includes('@')){
  //   throw new Error('Please provide valid employee email address')
  // }
 
console.log(response.employee.length)

for(var i = 0; i < response.employee.length; i++){
 // let people = [];
  people[i] = new BasicInfo.Badge(`${response.employee[i].Name}`, `${response.employee[i].Id}`, `${response.employee[i].Email}`, `${response.employee[i].gitId}`);
 
  people[i].info()
}

function createCards(){

  let peopleCards = [];
  for (var i = 0; i < people.length; i++){
            
    var code = `
      <div class="p-2 card-body">
          <h5 class="card-title" id="name">${people[i].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted" id="role">Card subtitle</h6>
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">ID: ${people[i].id}</li>
            <li class="list-group-item">Email: ${people[i].email}</li>
            <li class="list-group-item">GitHub: <a href="">${people[i].gitId}</a></li>
          </ul>
        </div> 
    `;
     peopleCards.push(code);
   };
  return peopleCards;
}
console.log(createCards());

let fullSiteCode = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
  <title> Challenge 10 working HTML</title>
  <link rel="stylesheet" type="text/css" href="./style.css" />
  
</head>
<body>
  <header></header>
  
  <div class="card flex-row align-content-center justify-content-between">
  ${createCards()}

  </div>
  
  <script src="./script.js"></script>
</body>
  </html>
  `;

  fs.appendFile(filename, fullSiteCode, (err) => 
  err ? console.error(err) : console.log('Success'))  

});

// const newEmployee = new Badge(`${response.employee[i].Name}`, `${response.employee[i].Id}`, `${response.employee[i].Email}`, `${response.employee[i].gitId}`)
// newEmployee.info()
// console.log(response.employee)
// console.log(response.employee[0].Name)