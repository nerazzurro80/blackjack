##Blackjack Game

An AngularJS blackjack app by Salvatore Belcastro.

Features
----
* The app allows a player to challange the Dealer
* Two views are present: lobby to play and stats to see past games (localstorage)
* Technologies and framework involved:
    * AngularJS 1.5 with components (card)
    * SASS and CSS3 animations (card flip)
    * ECMAScript 6 syntax, translated wit Babel
    * Standard dependencies stack management with Gulp and Bower
    * Services are unit testable with karma

General Angular architecture
----
The angular app resides in the src folder:
* app.js is the main file where the app itself is defined within its configuration.
* views folder contains the files defining the two views of the app and each of them contains a sass, template and a controller file.
* services folder contains the 3 singleton services with the main logic of the app
    * deck service is responsible to store deck instance and provide external utilities to it
    * game service is responsible to store a game representation and provides controller an access to it. Main BlackJack logic resides here
    * stats service is responsible for collecting and mine data from past games. This controller is fed by the game service each time a game is finished
* components contains reusable card component. This component defines the behaviour of a card with the logic of displaying the value via CSS sprite and animate its visualisation via CSS3 transitions
* directives, currently empty/not created would be used for standard attributes directives for future needs

Usage
----

To run the app do the following

`npm install` to install the node dependencies

`bower install` to install the bower dependencies

`gulp` to build the production bundle (concat css and js)

Open the app in Chrome browser

Unit Tests
----

To run unit tests type:
'karma start karma.conf.js'


Future improvements
----
* Add Split functionality
* Add Multiplayer against Dealer functionality
* Add cross browser compatibility
* Add protractor tests

