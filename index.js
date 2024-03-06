//Packages 
//Inquirer npm 
const inquirer = require("inquirer");
//fs built in node
const fs = require('fs');
// generateMarkdown.js file
const generateMarkdown = require('./utils/generateMarkdown')

//Array of questions
const questions = [{
    type: 'input',
    message: "Please enter the title of the project:",
    name: "title",
},
{
type:'input',
message: "Enter a short description of the project:",
name: "description",
},

{
type:'input',
message: "Enter the instruction on how to install:",
name: "installation",
},

{
type:'input',
message: "Enter the instructions on how to use:",
name: "instruction",
},

{
type:'input',
message: "How to contribute?:",
name: "contribution",
},

{
type:'input',
message: "Testing guidelines:",
name: "testing",
},

{
type:'list',
message: "Which license is going to apply to this project?",
name: "license",
choices:
[
    'No',
     'Apache', 
    'GNU', 
    'MIT', 
    'BSD', 
    'Boost',
    'Eclipse',
    'Mozilla',
    'Unilicense',
]
},
{
type:'input',
message: "Enter your GitHub username:",
name: "username",
},




];

//Write README file function
function writeInFile(data) {
    // variable for readme name
    const fileName = `${data.title.split(" ").join("")}.README.md`;
    //variable for generateMarkdown
    const dataString = generateMarkdown(data);
    //Write readme with parameters, fileName, dataString and err
    fs.writeFile(fileName, dataString, (err) =>{
        //if error and success
        err ? console.log(err) : console.log("README Successufuly Created!")
     });
};

//Initialize app function
function init() {
    inquirer
    //show questions in console
    .prompt(questions)
    //run writeInFile
    .then((data) => {
        writeInFile(data);
    });
};

//call to initialize
init()