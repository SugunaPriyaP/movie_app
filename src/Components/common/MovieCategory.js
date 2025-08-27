import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IMAGE_URL } from '../../API';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const MovieCategory = ({ title, fetchUrl, searchTerm, isActive }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        console.log(response.data.results);
        setMovies(response.data.results);
      } catch (error) {
        alert(`Error fetching ${title}:`+error);
      }
    };

    fetchData();
  }, [fetchUrl, title]);

  const filteredMovies = movies.filter(movie => {
    if (!searchTerm) return true;
    const name = movie.name || movie.title || '';
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if ((!searchTerm || isActive) && filteredMovies.length === 0) {
    return null; // Don't render if no movies match the search
  }

  function handleClick(movie) {
    // Get movie title or name
    const movieName = movie.name;
    
    // // Reset trailer URL first
    setTrailerUrl('');
    
    movieTrailer(movieName)
        .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            const videoId = urlParams.get('v');
            
            if (videoId) {
                setTrailerUrl(videoId);
            }
        })
        .catch((error) => {
            console.error('Error fetching trailer:', error);
            // Show a user-friendly message
            alert("Can't fetch trailer");
        });
}

  return (
    <div>
      {(!searchTerm || isActive) && (
        <h2>{title}</h2>
      )}
      <div className="movie-category" style={{ display: 'flex', overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
        {filteredMovies.map(movie => (
          <img 
            key={movie.id}
            width="200px" 
            height="200px" 
            src={`${IMAGE_URL}${movie.poster_path}`} 
            alt={movie.name || movie.title} 
            onClick={() => handleClick(movie)} 
            style={{ margin: '0 5px', scrollSnapAlign: 'start' }}
          />
          
        ))}
        {trailerUrl && (
            <div style={{ marginTop: '20px' }}>
                <Youtube videoId={trailerUrl} opts={{ width: '100%', height: '400px' }} />
            </div>
        )}
      </div>
    </div>
  );
};

export default MovieCategory;
