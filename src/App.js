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
    fetchNews();
  }, [url]);

  const handleChange = (e) => {
    setsearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };

  const showLoading = () => (loading ? <h2>Loading...</h2> : "");

  const searchForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={handleChange} />
      <button>Search</button>
    </form>
  );

  const showNews = () => {
    return news.map((n, i) => <p key={i}>{n.title}</p>); // return keyword because using curly braces
  };

  return (
    <div>
      <h2>news</h2>
      {showLoading()}
      {searchForm()}
      {showNews()}
    </div>
  );
};
export default App;
