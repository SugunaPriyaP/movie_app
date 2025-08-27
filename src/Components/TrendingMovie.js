import React from 'react';
import MovieCategory from './common/MovieCategory';
import { Trending_ALL_URL } from '../API';

export default function TrendingMovie({ searchTerm, isActive }) {
  return (
    <MovieCategory 
      title="Trending"
      fetchUrl={Trending_ALL_URL}
      searchTerm={searchTerm}
      isActive={isActive}
    />
  );
}
