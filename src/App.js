import React, { Component, useState, useEffect } from "react";

const App = () => {
  //state
  const [news, setNews] = useState([]);
  const [searchQuery, setsearchQuery] = useState("react");
  //fetch news
  const fetchNews = () => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
      .then((result) => result.json()) //convert it to json
      .then((data) => setNews(data.hits))
      .catch((error) => console.log(error)); //if error
  };

  useEffect(() => {
    console.log("neha");
    fetchNews();
  }, [searchQuery]);
  const handleChange = (e) => {
    setsearchQuery(e.target.value);
  };
  return (
    <div>
      <h2>news</h2>
      <form>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button>Search</button>
      </form>
      {news.map((n, i) => (
        <p key={i}>{n.title}</p>
      ))}
    </div>
  );
};
export default App;
