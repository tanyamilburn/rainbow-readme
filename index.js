// TODO: Include packages needed for this application
let generateMarkdown = require('./utils/generateMarkdown')
let inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        message: 'Please describe your project.',
        name: 'description',
    }, 
    {   
        message: 'What is your license?',
        name: 'license',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("generating markdown...")

    // display questions
    // collect input
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log('ttyerror', error)
            } else {
                console.log('other error', error)
            }
        });
    // build data object
    // create/print to file (writetoFile)
    writeToFile('README.md', data)
    console.log('all done :) you welcome')
}

// Function call to initialize app
init();
