import React from 'react';
import MovieCategory from './common/MovieCategory';
import { Action_Movie_URL } from '../API';

export default function ActionMovie({ searchTerm, isActive }) {
  return (
    <MovieCategory 
      title="Action Movies"
      fetchUrl={Action_Movie_URL}
      searchTerm={searchTerm}
      isActive={isActive}
    />
  );
}
