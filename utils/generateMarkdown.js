// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license) {
    case 'GNU AGPLv3':
      return 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg';
    case 'GNU GPLv3':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    case 'GNU LGPLv3':
      return 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg';
    case 'Mozilla':
      return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'Apache':
      return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
    case 'Boost':
      return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg';
    default:
      console.log("No License for " + license);
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'GNU AGPLv3':
      return 'https://www.gnu.org/licenses/agpl-3.0';
    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'GNU LGPLv3':
      return 'https://www.gnu.org/licenses/lgpl-3.0';
    case 'Mozilla':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'Boost':
      return 'https://www.boost.org/LICENSE_1_0.txt';
    default:
      console.log("No License for " + license);
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `License: [![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
  ${data.description}
  
---

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)

---

## Installation
${data.installation}
Git Repository [https://github.com/${data.userName}/${data.repo}]

## Usage
${data.usage}

##License 
${renderLicenseSection(data.license)}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
- Git - [${data.userName}](https://github.com/${data.userName})
- Email - [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;