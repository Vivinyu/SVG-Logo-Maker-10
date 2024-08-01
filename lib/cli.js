const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes');
const fs = require('fs');

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: 'text',
          type: 'input',
          message: 'Enter up to five characters for the logo:',
          validate: (input) => input.length <= 5 || 'Please enter up to five characters only.',
        },
        {
          name: 'textColor',
          type: 'input',
          message: 'Enter the text color (keyword or hexadecimal):',
        },
        {
          name: 'shape',
          type: 'list',
          message: 'Choose a shape:',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          name: 'shapeColor',
          type: 'input',
          message: 'Enter the shape color (keyword or hexadecimal):',
        },
      ])
      .then((answers) => {
        let shape;
        switch (answers.shape) {
          case 'circle':
            shape = new Circle();
            break;
          case 'triangle':
            shape = new Triangle();
            break;
          case 'square':
            shape = new Square();
            break;
        }
        shape.setColor(answers.shapeColor);

        const svg = `
          <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
          </svg>
        `;

        fs.writeFileSync('logo.svg', svg);
        console.log('Generated logo.svg');
      });
  }
}

module.exports = CLI;