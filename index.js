
const inquirer = require("inquirer")
const fs = require("fs")
const path = require('path')

const Intern = require("./lib/intern.js")
const Manager = require("./lib/manager.js")
const Engineer = require("./lib/engineer.js")
 const generateTeam = require('./source/generateTeam.js')


// create an empty array to push data answers from user into to create string of all employee's data
const teamMembers = [];

// variable for employee menu
const employeeQuestion = [
    {
        type: "list",
        message: "Which role would you like to create a roster entry for?",
        name: "role",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
        ]
    }
]
//questions
const commonQuestions = [
    {
        type: 'input',
        message: "What is your employee's name?",
        name: 'name',
    },
    {
        type: "input",
        message: "What is your team member's id number?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your team member's email address?",
        name: "email",
    },
]

// function to ask user to add new employee or exit
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            message: "Would you like to add another team member?",
            name: "add",

        }
    ]).then((data) => {
        if (data.add === true) {
            choice()
        } else {
            wholeTeam()
        }
    })
}

// function to prompt questions and capture data for user
const choice = () => {
    inquirer.prompt([
        ...employeeQuestion,
    ])
        .then((data) => {
            switch (data.role) {
                case "Manager":
                    inquirer.prompt([
                        ...commonQuestions,
                        {
                            type: "input",
                            message: "What is your manager's office number?",
                            name: "officeNumber",
                        },
                    ])
                        .then((data) => {
                            let manager = new Manager(data.name, data.id, data.email, data.officeNumber)
                            teamMembers.push(manager)
                            addEmployee()
                        });
                    break;
                case "Engineer":
                    inquirer.prompt([
                        ...commonQuestions,
                        {
                            type: 'input',
                            message: "What is the engineer's GitHub profile link?",
                            name: 'gitHub'
                        },
                    ])
                        .then((data) => {
                            let engineer = new Engineer(data.name, data.id, data.email, data.gitHub)
                            teamMembers.push(engineer)
                            addEmployee()
                        });
                    break;
                case "Intern":
                    inquirer.prompt([
                        ...commonQuestions,
                        {
                            type: 'input',
                            message: "What school is the intern from?",
                            name: 'school',
                        },
                    ])
                        .then((data) => {
                            let intern = new Intern(data.name, data.id, data.email, data.school)
                            teamMembers.push(intern)
                            addEmployee()
                        });
            }
        })
}

// function to send all collected data to the generateTeam function on the generateHTML file
const wholeTeam = () => {
    fs.writeFile(path.join(path.resolve(__dirname, 'assets'), "index.html"), generateTeam(teamMembers), (err) =>
        err ? console.log(err) : console.log('Your team has been created!'))
};

// call for the choice function to prompt questions 
choice()