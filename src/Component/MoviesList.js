import React from 'react'

const MoviesList = ({movies}) => {
  return (
    <div>
          <table className='table'>
      <thead>
        <tr className='table1'>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie.title} className = "table2">
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
   
  )
}

export default MoviesList