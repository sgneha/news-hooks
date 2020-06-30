import react, { Component, useState, useEffect } from "react";

const App = () => {
  //state
  const [news, setNews] = useState([]);
  //fetch news
  const fetchNews = () => {
    fetch("http://hn.algolia.com/api/v1/search?query=react")
      .then((result) => result.json()) //convert it to json
      .then((data) => setNews(data.hits))
      .catch((error) => console.log(error)); //if error
  };
};
