// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//Use if or switch statement to get a url based on the license chosen
function renderLicenseBadge(license) {
  if (license === "No License") {
    return " ";
  } else if (license === "GNU AGPLv3") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//Same as above
function renderLicenseLink(license) {
  if (license === "No License") {
    return " ";
  } else if (license === "GNU AGPLv3") {
    return `${license}"https://api.github.com/licenses/agpl-3.0"`
  } else if (license === "Mozilla Public License 2.0") {
    return `${license}"https://api.github.com/licenses/mpl-2.0"`
  } else if (license === "Apache License 2.0") {
    return `${license}"https://api.github.com/licenses/apache-2.0"`
  } else if (license === "MIT License") {
    return `${license}"https://api.github.com/licenses/mit"`
  } else if (license === "The Unlicense") {
    return `${license}"https://api.github.com/licenses/unlicense"`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No License") {
    return `
    This app is covered under the following license:
    ${renderLicenseLink(license)}
      `;
  } else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
//Make a template based on the professional RM guide
function generateMarkdown(data) {
  return `
  
  # ${data.title} ${renderLicenseBadge(data.license)}


  ## Description 

  -${data.description}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  -${data.installation}
 
  
  ## Usage

  -${data.usage}
 
  
  ![image](assets/images/screenshot.png)
    
  ## Credits

  -${data.credits}
  
  ## License

  -${renderLicenseSection(data.license)}
  
  ---
  
  ## Badges

  -${data.badges}
  
  ## Features

  -${data.features}
  
  ## How to Contribute

  -If you would like to contribute, please feel free to contact us at:
  -${data.email}
  -https://github.com/${data.githubUserName}
 
  ## Tests
 -${data.tests}
`;
}

module.exports = generateMarkdown;
