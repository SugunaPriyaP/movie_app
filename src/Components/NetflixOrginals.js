import React from 'react';
import MovieCategory from './common/MovieCategory';
import { NetflixOrginals_URL } from '../API';

export default function NetflixOrginals({ searchTerm, isActive }) {
  return (
    <MovieCategory 
      title="Netflix Originals"
      fetchUrl={NetflixOrginals_URL}
      searchTerm={searchTerm}
      isActive={isActive}
    />
  );
}
