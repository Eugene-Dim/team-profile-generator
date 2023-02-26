const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const fs = require('fs');
const generateHTML = require('./src/generate')
 
const Managers = [];
const Interns = [];
const Engineers = [];

// manager questions
const managerQues = [
    {
        type: 'input',
        name: 'name',
        message: `Please enter the manager's name.`
    },
 
    {
        type: 'input',
        name: 'Id',
        message: `Please enter the manager's Id.`
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter the manager's email.`
    },
    {
        type: 'input',
        name: 'phone',
        message: `Please enter the manager's office number.`
    }
]

// new employee questions
const newEmployee = [
    {
        type: 'list',
        name: 'role',
        message: `Please select the role of the employee.`,
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: `Please enter the Employee's name.`
    },
    {
        type: 'input',
        name: 'Id',
        message: `Please enter the Employee's Id.`
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter the Employee's email.`
    },
    {
        type: 'input',
        name: 'github',
        message: `Please enter the Employee's GitHub username.`,
        when: (input) => input.role === 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: `Please enter the Employee's school/university.`,
        when: (input) => input.role === 'Intern'
    },
    {
        type: 'confirm',
        name: 'addMore',
        message: `Would you like to add another employee?.`
    },
]

// initialize manager questions
function initManQues() {
        return inquirer.prompt(managerQues).then((managerQuesData) => {
            const { name, Id, email, phone } = managerQuesData;
            const manager = new Manager (name, Id, email, phone);
            console.log(manager)
            Managers.push(manager);
        })
 
}

// initialize new employee questions
function initEmployQues() {
        return inquirer.prompt(newEmployee).then((newEmployeeData) => {
            const { name, Id, email, github, school, addMore } = newEmployeeData;
            if (newEmployeeData.role === 'Engineer') {
                const engineer = new Engineer (name, Id, email, github)
                console.log(engineer)
                Engineers.push(engineer)
            } else {
                const intern = new Intern (name, Id, email, school);
                console.log(intern)
                Interns.push(intern);
            }
            if (addMore === true) {
                console.log(addMore)
                return initEmployQues()
            } else {
                console.log('done')
                buildHTML();
            }
    })
}

function init() {
    initManQues().then(initEmployQues)
}
 
init();

// build HTML
function buildHTML() {
    fs.writeFile('dist/index.html', generateHTML(Managers, Engineers, Interns), (err) => {
        if (err) {
            return console.log(err)
        }
        return console.log('You have successfully created your team!')
    })
}