// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./generateMarkdown');
const fs = require('fs');

// // TODO: Create an array of questions for user input
// const questions = [];

const generateREADME = ({username, email, title, description, installation, tests, usage, contribution}) =>
    `# ${title}

## Description

${description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command: 
\`\`\`
${installation}
\`\`\`

## Usage

${usage}

## Contributing

${contribution}

## Tests

To install necessary dependencies, run the following command: 
\`\`\`
${tests}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${username}](https://github.com/${username}/).`;

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is you project\'s name?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project',
      name: 'description',
    },

    {
      type: 'list',
      message: 'What kind of license should your project have? (Use arrow keys)',
      name: 'license',
      choices: ['None', 'Academic Free 3.0', 'Adaptive Public 1.0', 'Apache 2.0', 'Artistic 2.0', 'Boost Software 1.0',
      'BSD 0-clause', 'BSD 1-clause', 'BSD 2-clause','BSD 3-clause', 'Common Development and Distribution 1.0', 
      'Creative Commons Zero 1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0',
      'Eclipse Public 2.0', 'Educational Community 2.0', 'Eiffel Forum 2.0', 'Entessa Public', 'European Union Public 1.2', 'Fair',
      'Frameworx', 'GNU Affero General Public v3.0', 'GNU General Public 2.0', 'GNU General Public 3.0', 
      'GNU Lesser General Public 2.1', 'GNU Lesser General Public 3.0', 'Historical Permission Norice and Disclaimer', 'IBM Public',
      'IPA Font', 'ISC', 'JAM', 'LaTeX Project Public 1.3c', 'Lucent Public 1.02', 'Microsoft Public', 'Microsoft Reciprocal', 'MIT', 
      'MIT No Attribution', 'Mozilla Public 2.0', 'Non-Profit Open Software 3.0', 'Open Software 3.0', 'PHP 3.01', 'PostgreSQL', 'Python',
      'SIL Open Font 1.1', 'University of Illinois/NCSA Open Source', 'The Unlicense', 'W3C', 'zLib']
    },    
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'installation',
      default: 'npm i',
    },
    {
      type: 'input',
      message: 'What command should be run to run test?',
      name: 'tests',
      default: 'npm test',
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What does the user need to know about contributing to the repo?',
      name: 'contribution',
    },
    
  ])
  .then((data) => {
    const readmePageContent = generateREADME(data);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );

    fs.appendFile('README.md', generateMarkdown(data.license), (err) =>
      err ? console.error(err) : console.log('License Markdown added.')
    );
  });


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
