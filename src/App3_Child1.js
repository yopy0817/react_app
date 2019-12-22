import React from 'react';
import PropsTypes from 'prop-types';
import './css/App3_Child1.css';

//자식Ccomponent로 사용할 js는 클래스로 사용할 필요가 없다
function Movie( {id, year, title, summary, medium_cover_image, genres} ) { //genres추가
    return (<div className="movie">
            <img src={medium_cover_image} alt={title}></img>
            <div className="movie_inner">
            <h3 className="movie_title">{title}</h3>
            <h3 className="movie_year">{year}</h3>
            <ul className="movie_genres">
                {genres.map( (result, index) => (<li key={index}>{result}</li>) )
                //props로 넘어온 genres를 회전시킴
                }
            </ul>
            <p className="movie_summary">
                {summary.slice(0, 140) //문자열 자르기로 보여지는 텍스트를 줄임
                }
            </p>
            </div>
         </div>)
}

Movie.propTypes = {
    id: PropsTypes.number.isRequired,
    year: PropsTypes.number.isRequired,
    title: PropsTypes.string.isRequired,
    summary: PropsTypes.string.isRequired,
    medium_cover_image: PropsTypes.string.isRequired,
    genres: PropsTypes.arrayOf(PropsTypes.string).isRequired //추가
};


export default Movie;