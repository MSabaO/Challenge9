// Generate markdown
function generateMarkdown(data) {
    // returns template
    return `# ${data.title/*titled inputted*/}
    
  ![Static Badge](https://img.shields.io/badge/License-${data.license/*adds license chosen by user, creates badge*/}-blue)


##Description
${data.description/*Adds description*/}
##Table of Contents
-[How to instal](#installation)
-[How to use] (#instruction)
-[License] (#license)
-[Contribution] (#contribution)
-[Tests] (#testing)

##How to install
${data.installation}

##How to use
${data.usage}

#License 
![Static Badge](https://img.shields.io/badge/License-${data.license/*adds license chosen by user, creates badge*/}-blue)
This application is covered under ${data.license}

#Contributions
${data.contribution}

#Test
${data.testing}

#Author
Hi, I'm ${data.username}! The author of this application. You can see all my projects in my repository at https://github.com/${data.username}


`;
}

//export generateMarkdown
module.exports = generateMarkdown;
