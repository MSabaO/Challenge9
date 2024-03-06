// Generate markdown
function generateMarkdown(data) {
    // returns template
    return `# ${data.title/*titled inputted*/}

##Description
${data.description/*Adds description*/}
##Table of Contents
`;
}

//export generateMarkdown
module.exports = generateMarkdown;
