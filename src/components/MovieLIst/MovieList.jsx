import React from 'react';
import movieData from './../../data/movieData.json'
import './movisList.css';

const MovieList = () => {
    const movieListData = movieData ; 
    const gradeColor = {
        '12':'gradeinfo on12', 
        '15':'gradeinfo on15' ,
        '전체':'gradeinfo onall' ,
    }
    return (
        <div>
              <ul className='movie-list'>
              {
                movieListData.map(movie=>{
                    const gradeValue=movie.grade;
                    return(
                        <li key={movie.id}>
                             <div className='imgbox'>
                              <img src={movie.poster} alt={movie.title} />
                              <span className={gradeColor[gradeValue]}>{movie.grade}</span>
                             </div>
                             <div className='txtbox'>
                                 <div className='title'>{movie.title}</div>
                                 <div className='info'>
                                     <span>예매율 <strong className='rateinfo'>{movie.rateinfo}</strong> %</span>
                                     <span className='star'>★ <strong className='starinfo'>{movie.starinfo}</strong></span>
                                  </div>
                             </div>  
                        </li>
                    )
                })
              }
              </ul>
        </div>
    );
};

export default MovieList;