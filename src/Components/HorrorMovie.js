import React from 'react';
import MovieCategory from './common/MovieCategory';
import { Horror_Movie_URL } from '../API';

export default function HorrorMovie({ searchTerm, isActive }) {
  return (
    <MovieCategory 
      title="Horror Movies"
      fetchUrl={Horror_Movie_URL}
      searchTerm={searchTerm}
      isActive={isActive}
    />
  );
}
