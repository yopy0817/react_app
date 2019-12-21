import React from 'react';
import PropsTypes from 'prop-types';

//자식Ccomponent로 사용할 js는 클래스로 사용할 필요가 없다
function Movie( {id, year, title, summary, medium_cover_image} ) {
    return <h4>타이틀:{title}</h4>; //title을 리턴해준다
}

Movie.propTypes = {
    id: PropsTypes.number.isRequired,
    year: PropsTypes.number.isRequired,
    title: PropsTypes.string.isRequired,
    summary: PropsTypes.string.isRequired,
    medium_cover_image: PropsTypes.string.isRequired
};


export default Movie;