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
        message: 'Briefly describe your project.',
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install this project',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Drag a screenshot of your application into the images folder. What is the file name?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the guidelines for contributing to this project?',
    },
    {   
        type: 'input',
        name: 'license',
        message: 'Do you have an MIT or Apache license? Otherwise respond with NONE.',
    },
    {   
        type: 'input',
        name: 'username',
        message: 'What is your github username',
    },
    {   
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
]

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
