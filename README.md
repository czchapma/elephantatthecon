## Elephant at the Con

Elephant At The Con is a campaign by Uplift dedicated to shining a light on convention safety issues by collecting attendee stories and quantitative data on abuse and harassment at conventions with the goal of creating action plans for organizers to improve in the future.

This repository contains code for elephantatthecon.com

### Build
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The website is deployed through Firebase.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Main files
**Note: (Current files that build the website are inside folder elephantatthecon/public/eatc/src)**

App.js -- builds the site’s home page

Content.js -- builds the site’s home page

Header.js -- builds the navigation bar for the site

conventions folder -- contains JavaScript files for each individual convention

survey.js -- builds the survey page, which can be accessed from the navigation bar from the homepage or though https://elephantatthecon.com/survey

index.js -- builds url redirection for each convention’s own url

Style folder -- contains css files for style design of the site

Data folder -- contains json files for each convention, where each file contains data for the convention’s visualization page

cssc_script_test.html inside “data” folder -- this is a helper html file that lets you create the json file for a convention’s visualization more easily

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
