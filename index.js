var inquirer = require('inquirer');
const cp = require('child_process');

function displayList(){

    inquirer
    .prompt([

        {
            type: 'list',
            name: 'selection',
            choices: ['About', 'Skills', 'Academics', 'Project' ]
        }

    ])
    .then(function (ans) {//Here "ans" is the object recieved from the above promise
        if (ans.selection == 'About') {
            console.log(`A passionately curious Web developer 
            who just found out that making websites and seeing 
            the magic happen on the Internet is what excites him the most.`);
            displayNext()

        } else if (ans.selection == 'Skills') {
            console.log("Java , JavaScript , React , GoLang , Android , React Native")
            displayNext()

        } else if (ans.selection == 'Academics') {
            console.log("This is about Academics section")
            cp.execSync('start chrome https://drive.google.com/file/d/1pZdqgAOTb7KkFZWbnS1nUm2G42oO6HD4/view?usp=sharing');
            displayNext()

        } else if (ans.selection == 'Project') {
            cp.execSync('start chrome https://github.com/IamSiddhant14');
            displayNext()

        }

    })

}

displayList();

// Go back option 

function displayNext(){

    var inquirer = require('inquirer');
inquirer
  .prompt([
      {
        type: 'list',
        name : 'selection',
        choices :['Go Back' , 'exist']

      }
      

   
  ])
  .then((ans) => {

    if( ans.selection == "Go Back" ){
        displayList();

    }else if( ans.selection == "exist" ){
        console.log('CLI Resume closed');

    }
    
  })
  
}

