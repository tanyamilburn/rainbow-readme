// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
    }, 
    {   
        type: 'input',
        name: 'license',
        message: 'What is your license?',
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    console.log("generating markdown...")

    // display questions
    // collect input
    inquirer.prompt(questions)
        .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
        .then(() => console.log('README.md created successfully!'))
        .catch((err) => console.error(err));


    // build data object
    // create/print to file (writetoFile)
    // writeToFile('README.md', data)
}

// Function call to initialize app
init();
