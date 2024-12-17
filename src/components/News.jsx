import React from "react";

const News = () => {
  return (
    <div className="news">
      <div className="title">
        <h1>Last news</h1>
        <span>To read all the articles, it's right here!</span>
      </div>

      <div className="cards">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <div className="btn">
        <button>See more</button>
      </div>
    </div>
  );
};

export default News;
