import { useEffect, useState } from 'react';
import React from 'react';
import { imgurl, api_key } from './Constant';
import Youtube from 'react-youtube';
import './RowPost.css';
import axios from './axios';

function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovie(response.data.results);
    }).catch((error) => {
      console.error("Error fetching movie data: ", error);
    });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${api_key}&language=en-US`).then((response) => {
      console.log(response.data);  // Debug the response
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0].key);  // Access the video key correctly
      } else {
        console.warn('No video results found');
      }
    }).catch((error) => {
      console.error("Error fetching video data: ", error);
    });
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="poster">
        {movie.map((obj) => (
          <div key={obj.id}>
            <img
              onClick={() => handleMovie(obj.id)}
              className={props.isSmall ? 'spo' : 'po'}
              src={`${imgurl + obj.backdrop_path}`}
              alt={obj.title}
            />
            <h5>{obj.title}</h5>
            <h6>Rating: {obj.vote_average}</h6>
          </div>
        ))}
      </div>
      {urlId && (
        <div className="video-container">
          <Youtube opts={opts} videoId={urlId} />
        </div>
      )}
    </div>
  );
}

export default RowPost;