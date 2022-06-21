// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   return license
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let url = ""
  if(license === "MIT") {
    url = "![APM](https://img.shields.io/apm/l/vim-mode)"
  }
  else if (license === "Apache") {
    url = "![AUR license](https://img.shields.io/aur/license/android-studio)"
  }

  return url
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, license, username, email, installation, screenshot, contribution}) {
  let badge = renderLicenseBadge(license)
  return `# ${title}
  * ${description}
## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  ${badge? '3. [License](#license)' : ''}
  4. [Contribution](#contribution)
  5. [Tests](#tests)
  6. [Questions](#questions)

### Installation 
  * ${installation}
### Usage
    
 ![App Image](/images/${screenshot})
    
${badge ? '### License:' : ''}
 ${badge} 
### Contribution Guidelines
  * ${contribution}
### Tests
### Questions
* Find my github page [here](https://github.com/${username})
* Please reach out to ${email} with any questions!
`
}

module.exports = generateMarkdown


