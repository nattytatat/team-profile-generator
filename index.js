const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


// Need to start the questions
function start() {
    inquirer.prompt([{
        //manager questions
        type: 'input',
        name: 'name',
        message: 'Welcome to the Team Profile Generator. Please enter the Team Manager\'s name.',
        validate: function (input) {
            if (input) {
                return true;
            } else {
                console.log('This field cannot be left blank')
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the Manager\'s ID number',
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the manager\'s email address',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the manager\'s Office Number',
    },

    ]).then(response => {
        // populate manager info
        promptForNextEmployee();
    })

}


const promptForNextEmployee = () => {
    inquirer.prompt([{
        // choice of 3
        type: 'list',
        name: 'type',
        message: 'What Type of Team Member would you like to add?',
        choices: ['Engineer', 'Intern', 'Finish adding Team Members'],

    }
    ]).then(response => {
        // if engineer
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        //engineer questions
    }]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        //intern questions
    }]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}

const buildPage = () => {
    // render(myArrayOfTeamMembers)
}


start();
