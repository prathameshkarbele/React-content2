import React from 'react'

const GenreFilter = (props) => {

  function handleGenreClick(genre) {
    console.log(`Filtering by ${genre}`);
  }

  const {genres} = props;

  return (
    <div className='GenreFilter'>
      <h3>Filter by Genre</h3>
      <div className='btn'>
        {genres.map((genre, index) => (
          <button key={index} className='btn1' onClick={() => handleGenreClick(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;