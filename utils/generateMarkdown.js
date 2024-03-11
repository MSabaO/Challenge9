// Generate markdown
function generateMarkdown(data) {
    // returns template
    return `# ${data.title/*titled inputted*/}
    
  ![Static Badge](https://img.shields.io/badge/License-${data.license/*adds license chosen by user, creates badge*/}-blue)


## Description
${data.description/*Adds description*/}
## Table of Contents
-[How to instal](#installation)
-[How to use](#instruction)
-[Contribution](#contribution)
-[Tests](#testing)
-[License](#license)

## How to install
${data.installation}

## How to use
${data.usage}


## Contributions
Contributions are welcome! If you'd like to contribute to the project, follow these steps:

1.    Fork the repository.
2.    Create a new branch for your feature or bug fix.
3.    Make your changes and commit them.
4.    Submit a pull request.

${data.contribution}

## Test
${data.testing}

## Author
Hi, I'm ${data.username}! The author of this application. You can see all my projects in my repository at https://github.com/${data.username}

My email: ${data.email}

## License 
![Static Badge](https://img.shields.io/badge/License-${data.license/*adds license chosen by user, creates badge*/}-blue)
<br>
This application is covered under ${data.license}
`;
}

//export generateMarkdown
module.exports = generateMarkdown;
