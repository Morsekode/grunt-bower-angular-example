# grunt-bower-angular-example
Example of npm, grunt &amp; bower workflow 

## Local Development Requirements

- [Node.js](http://nodejs.org)
- [Grunt](http://gruntjs.com/)

## Setup directions

*This assumes that all of the requirements listed above are installed correctly and are running.*

Step 1 - Clone repository and change into the newly cloned respository/folder

Step 2 - Type the following commands into your terminal to install all Grunt and Bower dependencies:

```
$ npm install && bower install
```

*(This may take a little while depending on your internet connection and the performance of your machine.)*

Step 3 - Once complete, type `grunt serve` to run the Grunt server start up, which will automatically show open up a new browser window with the instance of the server running.

```
http://127.0.0.1:8000
```

#### NOTE

By default, Grunt will start the server on the localhost port 8000. If there is already a process running on your local machine on that port, Grunt will throw an error and the server start up script will fail.
