import React, { useEffect, useState } from "react";

function ShowList() {
  const [shows, setShows] = useState([]);
  const [elements, setElements] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      });
  }, []); // Empty dependency array means this effect runs only once after initial render

  function data(event) {
    if (elements) {
      setElements(false);
    } else {
      setElements(true);
      setId(event)
    }
  }
  return (
    <div className="container">
      {shows.map((show) => (
        <div key={show.id} className="movie">
          <img
            src={show.show.image && show.show.image.medium}
            className="img"
          />
          <h2>{show.show.name}</h2>
          <h3>{Math.floor(show.score * 10)}/10</h3>
          <button type="button" class="btn btn-primary" onClick={()=>data(show.show.id)}>
            Show Summary
          </button>
        </div>
      ))}
       
       {shows.map((show) => (
        elements &&id==show.show.id&&(
          <div dangerouslySetInnerHTML={{ __html: show.show.summary } } className="discription"/>
        )
       ))}
    </div>
  );
}

export default ShowList;
