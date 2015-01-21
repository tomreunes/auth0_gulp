# auth0_gulp
Demonstration of issue with uglifying auth0

## How To Run
npm install

bower install

## Problem
When you run the project by using the default gulp task we get following error in the console of the Developer Tools:

    Uncaught Error: Cannot find module 'undefined'

We don't get that error when we use **gulp src**