# MacAbroad

Welcome to MacAbroad, your study away tool intended to streamline the application process through real people's reviews of those programs and a Tinder-inspired recommendation interface. The application includes the ability to register only through Macalester email. 

Note: When adding a review or saving a program, you may have to reload the application to update the page. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Application should be compatible with Macs and Windows computers. 

Down below, you should find an outline of what each of the tabs do: 
forum: student reviews page
profile: currently not incorporated into application, but is intended to later be used for additional features (if deployed)
saved-programs: displays saved user preferences (which are extracted from firebase backend)
services/data.service: stores all Macalester study away programs and possesses associated functions to filter/save certain programs 

tab1: home page 

tab2: search page 

tab4: timeline 

tab5: login page 

tab6: register page 

user-input: tinder inspired recommendation page 

authservice: service that handles user profile creation

database: service that handles user preferences and review creation 

reviews: service that handles old and new reviews 

### Prerequisites
Download NodeJS with the following link: https://nodejs.org/en/

### Installing

To install ionic and Cordova CLI, type the following command in terminal: 
npm i -g angular ionic 

To get access to the code itself, feel free to use a text editor of your choice! (We used VisualStudio) 

Clone this repo and use the following command to initialize project: 
ionic start "github link" --type=ionic-angular

Once project environment has been created, use "ionic serve" to reload your project. 


(This error was encountered when Angel (one of the developers) attempted to recreate the environment)  
There MAY be a "import {DOCUMENT} error" and according to stackoverflow, the only way to remedy this pesky bug is to directly locate instances of {DOCUMENT} as eluciated in the error message and moving its instance to a new line so that rather than "export {DOCUMENT} from 'angular-platform-browser'" we add "import { DOCUMENT } from '@angular/common'". 


## Deployment

With further development of the app to make it compatible with iOS and android, will update this section. 

## Built With

* Ionic 4.10.0 Angular 8.1.3

## Authors
Angel Sylvester, Anji Moorthy, Duane Nguyen, Daniel Beidelschies 
