const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./source/landing-page-temp.js');

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const newStaffMemberData = [];

async function promptQuestions() {
  const { name, id, email, role } = await inquirer.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your ID number?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'list',
      message: 'What is your role?',
      name: 'role',
      choices: ['Engineer', 'Intern', 'Manager'],
    },
  ]);

  switch (role) {
    case 'Manager':
      const { officeNumber } = await inquirer.prompt([
        {
          type: 'input',
          message: 'What is your office number?',
          name: 'officeNumber',
        },
      ]);
      const newManager = new Manager(name, id, email, officeNumber);
      newStaffMemberData.push(newManager);
      break;
    case 'Engineer':
      const { github } = await inquirer.prompt([
        {
          type: 'input',
          message: 'What is your github username?',
          name: 'github',
        },
      ]);
      const newEngineer = new Engineer(name, id, email, github);
      newStaffMemberData.push(newEngineer);
      break;
    case 'Intern':
      const { school } = await inquirer.prompt([
        {
          type: 'input',
          message: 'What university did you attend?',
          name: 'school',
        },
      ]);
      const newIntern = new Intern(name, id, email, school);
      newStaffMemberData.push(newIntern);
      break;
  }

  const { addMember } = await inquirer.prompt([
    {
      name: 'addMember',
      type: 'list',
      choices: ['Add a new member', 'Create team'],
      message: 'What would you like to do next?',
    },
  ]);

  if (addMember === 'Add a new member') {
    await promptQuestions();
  } else {
    createTeam();
  }
}

async function createTeam() {
  console.log(newStaffMemberData);
  const teamHtml = generateTeam(newStaffMemberData);
  await fs.promises.writeFile('./output/index.html', teamHtml, 'utf-8');
}

promptQuestions();
