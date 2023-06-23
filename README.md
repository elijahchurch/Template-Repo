# Galactic Calculator

#### By: Jason Elijah Church

#### A webpage where a user can view how old they are on different planets.

## Technologies Used

* HTML
* JavaScript
* Markdown
* CSS
* Git Bash
* Visual Code Studio
* Node Package Manager
* Webpack
* ESLint
* Jest
* Babel

## Description:
This webpage was made with HTML and styled with CSS. It contains a simple form that will take a user's inputted age and generate a text response on how old they are on five different planets. Most of the time for this project was spent in the backend, where a Galaxycalc class was made and tested for. The Galaxycalc class has a constructor that has five properties to store planetKeys - ageValues and five properties to store messages generated from the calcGalacticPassage prototype method. The constructor takes only one argument in its parameter, the users age, and stores it in the earthAge property. From there, the setGalacticAges method can be called upon the object to set and store the age values of each of the other planets by inputted the earthAge value into a calculation defined for each other planet. The calcGalacticPassage method takes another inputted age as an argument and runs that inputted age through branching logic against the stored age values. It then stores responses into the planets' passage properties within the Galaxycalc object.

## Setup/ Installation Requirements

* Clone this repository to your desktop.
* In the topmost directory of the project, open up all of the code using Visual Code Studio or a similar application to view the written code.
* If you have Node Package Manager installed on your computer and are running v16.13.1, you can enter npm install in the topmost directory of the project to install all the listed plug-ins in the package.json.
* From there the webpage itself can be viewed by entering npm start in your console to open up a local live server.

## Known Bugs

* Due to time restraints, the calcGalacticPassage() prototype method is not tested for nor accounts for grammar mistakes in the stored return when non-Earth planets have a difference of age of exactly 1.
* Not all JS backend functionality is present on the actual site at the moment.
* Images on the site are not fully locked into place.

## License

MIT License

Copyright (c) (2023) Jason Elijah Church

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.