import React, { useState } from 'react';
import NetflixOrginals from './NetflixOrginals';
import ComedyMovie from './ComedyMovie';
import ActionMovie from './ActionMovie';
import HorrorMovie from './HorrorMovie';
import TrendingMovie from './TrendingMovie';
import NavBar from './NavBar';

export default function MovieDetails() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Section matchers
  const [netflixMovies] = useState([]);
  const [actionMovies] = useState([]);
  const [comedyMovies] = useState([]);
  const [horrorMovies] = useState([]);
  const [trendingMovies] = useState([]);

  // Helper to check if section has matches
  const hasMatch = (movies) => {
    if (!searchTerm) return true;
    return movies.some(movie => {
      const name = movie.name || movie.title || '';
      return name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  const netflixActive = hasMatch(netflixMovies);
  const actionActive = hasMatch(actionMovies);
  const comedyActive = hasMatch(comedyMovies);
  const horrorActive = hasMatch(horrorMovies);
  const trendingActive = hasMatch(trendingMovies);

  // Pass setMovies to each section so they can report their movies
  return (
    <div>
      <NavBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div className="movie-sections">
        <NetflixOrginals searchTerm={searchTerm} isActive={netflixActive} />
        <TrendingMovie searchTerm={searchTerm} isActive={trendingActive} />
        <ActionMovie searchTerm={searchTerm} isActive={actionActive} />
        <HorrorMovie searchTerm={searchTerm} isActive={horrorActive} />
        <ComedyMovie searchTerm={searchTerm} isActive={comedyActive} />
      </div>
    </div>
  );
}
