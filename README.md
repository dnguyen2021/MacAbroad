# MacAbroad

Welcome to MacAbroad, your study away tool intended to streamline the application process through real people's reviews of those programs and a Tinder-inspired recommendation interface. The application includes the ability to register only through Macalester email. 

Note: When adding a review or saving a program, you may have to reload the application to update the page. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites
Download NodeJS with the following link: https://nodejs.org/en/

### Installing

To install ionic and Cordova CLI, type the following command in terminal: 
npm i -g angular ionic 

To get access to the code itself, feel free to use a text editor of your choice! (We used VisualStudio) 

Clone this repo and use the following command to initialize project: 
ionic start "github link" --type=ionic-angular
  
There MAY be a import {DOCUMENT} error and according to stackoverflow, the only way to remedy this pesky bug is to directly locate instances of {DOCUMENT} as eluciated in the error message and moving its instance to a new line so that rather than "export {DOCUMENT} from 'angular-platform-browser'" we add "import { DOCUMENT } from '@angular/common'". 

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* Ionic 4.10.0 Angular 8.1.3

## Contributing

## Versioning

## Authors
Angel Sylvester, Anji Moorthy, Duane Nguyen, Daniel Beidelschies 

## License

## Acknowledgments
