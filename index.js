
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
let boss;
let team = [];
const inquirer = require('inquirer');
const fs = require('fs');
const filename = `myTeam.html`;

inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

inquirer
.prompt([
  {
    type: 'input',
    message: 'Please enter the Team Manager\'s Name',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Employee ID',
    name: 'id',
  },  
  {
    type: 'input',
    message: 'Employee Email',
    name: 'email',
  },  
  {
    type: 'input',
    message: 'Please Enter the Manager\'s office number',
    name: 'officeNumber',
  },  
  {
    type: 'loop',
    name: 'employee',
    message: 'Would you like to dad an additional employee?, If you are finished please select N',
    questions: [ 
      {
        type: 'list',
        name: 'JobTitle',
        message: 'Are you adding an Engineer or an Intern?',
        choices: ['Engineer', 'Intern']
      },
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
        name: 'github',
        when(answers){
          return answers.JobTitle == 'Engineer';
        },
      },
      {
        type: 'input',
        message: 'What school does the intern attend?',
        name: 'school',
        when(answers){
          return answers.JobTitle == 'Intern';
        },
      }, 
    ]
  }
])
.then ((response) => {
  // if (typeof `${response.Name}` !== 'string' || !`${response.Name}`.trim().length) {
  //   throw new Error('Please provide employee name')
  // }
  // if (isNaN(`${response.id}`) || `${response.id}` === '') {
  //   throw new Error('Please provide valid employee ID')
  // }
  // if (!`${response.Email}`.includes('@')){
  //   throw new Error('Please provide valid employee email address')
  // }
  boss = new Manager(`${response.name}`, `${response.id}`, `${response.email}`, `${response.officeNumber}`);
  //boss.managing()
 
  for(var i = 0; i < response.employee.length; i++){

      let job = `${response.employee[i].JobTitle}`;
    
        switch(job){
          case 'Engineer':
          team[i] = new Engineer(`${response.employee[i].Name}`, `${response.employee[i].Id}`, `${response.employee[i].Email}`, `${response.employee[i].github}`);
          // team[i].info(); 
          break;

          case 'Intern': 
          team[i] = new Intern(`${response.employee[i].Name}`, `${response.employee[i].Id}`, `${response.employee[i].Email}`, `${response.employee[i].school}`);
          // team[i].info();
          break;
        }
  }

  let bossCard = `
    <div class="p-2 card-body shadow">
        <h5 class="card-title" id="name">${boss.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted" id="role">Manager</h6>
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">ID: ${boss.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${boss.email}">${boss.email}</a></li>
          <li class="list-group-item">Office: ${boss.officeNumber}</li>
        </ul>
      </div> 
    `;

  function createCards(){

    let teamCards = [];
    for (var i = 0; i < team.length; i++){

      let job = `${response.employee[i].JobTitle}`;

      switch(job){

        case 'Engineer':
          var code = `
            <div class="p-2 card-body shadow">
                <h5 class="card-title" id="name">${team[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted" id="role">Engineer</h6>
                <ul class="list-group">
                  <li class="list-group-item active" aria-current="true">ID: ${team[i].id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/${response.employee[i].github}" target="_blank">${response.employee[i].github}</a></li>
                </ul>
              </div>`;
        break;

        case 'Intern':
          var code = `
          <div class="p-2 card-body shadow">
              <h5 class="card-title" id="name">${team[i].name}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="role">Intern</h6>
              <ul class="list-group">
                <li class="list-group-item active" aria-current="true">ID: ${team[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                <li class="list-group-item">School: ${response.employee[i].school}</li>
              </ul>
            </div>`;

        break;
      }
       teamCards.push(code);
     };
      return teamCards;
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
    
    
    <div class="mt-4 px-4 d-flex flex-wrap align-content-center justify-content-around">
    
    ${bossCard}

    ${createCards().join('')}

    </div>
    
    <script src="./script.js"></script>
  </body>
    </html>
    `;

  fs.appendFile(filename, fullSiteCode, (err) => 
  err ? console.error(err) : console.log('Success'))  
});