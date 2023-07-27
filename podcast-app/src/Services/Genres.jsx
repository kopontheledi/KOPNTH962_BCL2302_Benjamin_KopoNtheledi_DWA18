import React from 'react';

const genresData = [
  { id: 1, title: 'Personal Growth' },
  { id: 2, title: 'True Crime and Investigative Journalism' },
  { id: 3, title: 'History' },
  { id: 4, title: 'Comedy' },
  { id: 5, title: 'Entertainment' },
  { id: 6, title: 'Business' },
  { id: 7, title: 'Fiction' },
  { id: 8, title: 'News' },
  { id: 9, title: 'Kids and Family' },
];

const GenreComponent = ({ genreIds }) => {
  const getGenreNames = (genreIds) => {
    return genresData
      .filter((genre) => genreIds.includes(genre.id))
      .map((genre) => genre.title)
      .join(', ');
  };

  return <span>{getGenreNames(genreIds)}</span>;
};

export default GenreComponent;
