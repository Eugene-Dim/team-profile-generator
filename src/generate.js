const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
 
function generate(Managers, Engineers, Interns) {
    console.log(Engineers)
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4" id="mainTitle">My Team</h1>
            </div>
          </div>
    </header>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-3 col-sm-2 p-3">
                    <div class="card " style="width: 18rem;">
                        <div class="card-body" id="managerTitle">
                        <h5 class="card-title">${Managers[0].getName()}
                            <br>
                            ${Managers[0].getRole()}
                        </h5>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${Managers[0].getId()} </li>
                        <li class="list-group-item">Email: ${Managers[0].getEmail()} </li>
                        <li class="list-group-item">Office Number: ${Managers[0].getPhone()} </li>
                        </ul>
                    </div>
                    </div>
                    ${loopEngineer(Engineers)}
                    ${loopIntern(Interns)}
            </div>
        </div>
    </main>
</body>
</html>
    `
};

// loop through engineers
function loopEngineer(Engineers) {
    let engineerCards = Engineers.map(engineer => {
        console.log(engineer)
        return `
        <div class="col-lg-4 col-md-3 col-sm-2 p-3">
        <div class="card" style="width: 18rem;">
        <div class="card-body" id="engineerTitle">
          <h5 class="card-title">${engineer.getName()}
            <br>
            ${engineer.getRole()}
          </h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.getId()} </li>
          <li class="list-group-item">Email: ${engineer.getEmail()} </li>
          <li class="list-group-item">GitHub: ${engineer.getGithub()} </li>
        </ul>
      </div>
      </div>
                `  
    })
 
    return engineerCards.join('')
}
 
// loop through interns
function loopIntern(Interns) {
 
    let internCards = Interns.map(intern => {
        return `
        <div class="col-lg-4 col-md-3 col-sm-2 p-3">
        <div class="card" style="width: 18rem;">
        <div class="card-body" id="internTitle">
          <h5 class="card-title">${intern.getName()}
            <br>
            ${intern.getRole()}
          </h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getId()} </li>
          <li class="list-group-item">Email: ${intern.getEmail()} </li>
          <li class="list-group-item">School: ${intern.getSchool()} </li>
        </ul>
      </div>
      </div>
                `  
    })
    return internCards.join('');
};
 
module.exports = generate