import React from 'react';
import MovieCategory from './common/MovieCategory';
import { Comedy_Movie_URL } from '../API';

export default function ComedyMovie({ searchTerm, isActive }) {
  return (
    <MovieCategory 
      title="Comedy Movies"
      fetchUrl={Comedy_Movie_URL}
      searchTerm={searchTerm}
      isActive={isActive}
    />
  );
}
