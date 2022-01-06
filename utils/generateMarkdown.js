// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//Use if or switch statement to get a url based on the license chosen
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//Same as above
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//Make a template based on the professional RM guide
function generateMarkdown(data) {
  return `# <Your-Project-Title>
  ## Description
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
 
  
  ## Usage
 
  
  
  ![image](assets/images/screenshot.png)
    
  ## Credits
  
  ## License
  
  ---
  
  ## Badges
  
  ## Features
  
  ## How to Contribute
 
  ## Tests
 
`;
}

module.exports = generateMarkdown;
