// TODO: Include packages needed for this application
const inquirer = require('inquirer');
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
      choices: ['None', 'Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 
      'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', 
      'Creative Commons license family', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 
      'Creative Commons Attribution Share Alike 4.0', 'Do What The F*ck You Want To Public License	wtfpl', 
      'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 
      'European Union Public License 1.1', 'GNU Affero General Public License v3.0', 'GNU General Public License family', 
      'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License family', 
      'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0', 'ISC', 
      'LaTeX Project Public License v1.3c', 'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0', 
      'Open Software License 3.0', 'PostgreSQL License', 'SIL Open Font License 1.1', 
      'University of Illinois/NCSA Open Source License', 'The Unlicense', 'zLib License'],
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
  });


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
