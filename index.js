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