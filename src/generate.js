const generateTeam = team => {

  const generateCard = employee => {
    let cardBodyContent = '';
    if (employee.getRole() === "manager") {
      cardBodyContent = `
        <li class="list-group-item">Office number: ${employee.getOfficeNumber()}</li>
      `;
    } else if (employee.getRole() === "engineer") {
      cardBodyContent = `
        <li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank" rel="noopener noreferrer">${employee.getGithub()}</a></li>
      `;
    } else if (employee.getRole() === "intern") {
      cardBodyContent = `
        <li class="list-group-item">School: ${employee.getSchool()}</li>
      `;
    }
    return `
      <div class="card employee-card">
        <div class="card-header">
          <h2 class="card-title">${employee.getName()}</h2>
          <h3 class="card-title"><i class="${employee.getRoleIcon()} mr-2"></i>${employee.getRole()}</h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
            ${cardBodyContent}
          </ul>
        </div>
      </div>
    `;
  };

  return team.map(employee => generateCard(employee)).join('');

};

const team = team => {

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <link rel="stylesheet" href="./styles.css">
      </head>
      <body>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
              <h1 class="text-center">Team Profile</h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
              ${generateTeam(team)}
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

};

module.exports = team;
