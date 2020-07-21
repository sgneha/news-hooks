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

• Code organisation
