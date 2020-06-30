#### News App using hooks

##### Fetch news from Hacker news API

First search news about react. Later will take user input to search news.
Fetch will return a promise.

• We want user to type the word to search so we have a form with text `value` as what user types and default value as 'react'. And a button `search`.

• onChange-> will execute some method like handleChange in this case. Whenever user types something we will grab the change and populate the state.
• handleChange->executes when change is there.It grabs the event target value means whatever is typed by the user is populated in the state. Means we need one more state i.e `searchQuery` which will eventually fetched.
• So based on user input we update the state. And then change the hard coded value `react` with `searchQuery` in the fetch method.

`So we fetch the news with searchQuery which comes from user input and this fetchNews() runs on useEffect() when component mounts or when there is change is state.`

• Its rendering a lot so the problem is useEffect(), we have to control its behaviour so that it runs only when there is change in state of `searchQuery`. Will see that next.

• We will control the behaviour of useEffect. It only renders when there is change in state in searchQuery,we can do that by passing second argument in useEffect an array in which we can write searchQuery.

• Everything is on real time we are making lot of request(on every key stroke). Now we want only fetch the data when search button is clicked.
• Implement onSubmit method which execute handleSubmit() when form is submitted.Prevent the default behaviour so that page is not free load. Set entire default url in one more state.when user hits submit the setUrl method changes the state of url according to the searchQuery(user input).And run the effect based on url.
• Now we will show loading indicator when `loading=true`

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
