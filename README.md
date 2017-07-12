# One Person One Tree - Web App

## Project Lead:

**Tom Marks**

Slack: londonatlas

## About

One Person One Tree web app will allow users to view trees they can have delivered to their home and contribute to reducing energy expenditures via the One Person One Tree initiative.

## Setup

These are the dependencies you need in order to run the application:

- [Install Node]("https://nodejs.org/en/")

Once you have the dependencies:

```bash
# clone the repo
git clone https://github.com/cforlando/energy-saving-trees-web.git

# enter the directory
cd energy-saving-trees-web

# install node dependencies
npm install

# start the application
./node_modules/.bin/webpack-dev-server
```

Then visit [localhost:8080](http://localhost:8080) in your browser

## Running Tests

Navigate to the root of the project

### Terminal 1 ( Start our selenium server )

`./node_modules/.bin/webdriver-manager update`

`./node_modules/.bin/webdriver-manager start`

### Terminal 2 ( Start our local application server )

`./node_modules/.bin/webpack-dev-server`


### Terminal 3 ( Run tests )

`npm test`

## Version

0.0.1

## Feature List

- Horizontally scroll through a list of trees
- Display tree metadata
- Fill out required contact and delivery information
- Detect current location
- Complete a submission for a request to have a tree delivered

## Data Source:

N/A

## Using

- Angular 1.6.2
- Sass
- Webpack

## License

Copyright © 2017 Code for Orlando.

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
