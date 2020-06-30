import React, { Component, useState, useEffect } from "react";

const App = () => {
  //state
  const [news, setNews] = useState([]);
  const [searchQuery, setsearchQuery] = useState("react");
  const [url, setUrl] = useState(
    "http://hn.algolia.com/api/v1/search?query=react"
  );
  const [loading, setLoading] = useState(false);
  //fetch news
  const fetchNews = () => {
    //set loading true
    setLoading(true);
    fetch(url) // when component mounts it takes default url and after that whenever url changes.
      .then((result) => result.json()) //convert it to json
      .then((data) => (setNews(data.hits), setLoading(false)))
      .catch((error) => console.log(error)); //if error
  };

  useEffect(() => {
    console.log("neha");
    fetchNews();
  }, [url]);
  const handleChange = (e) => {
    setsearchQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };
  return (
    <div>
      <h2>news</h2>
      {loading ? <h2>Loading...</h2> : ""}
      <form onSubmit={handleSubmit}>
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
