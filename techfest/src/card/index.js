import React from 'react'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg col-12 col-md-6 col-lg-6 col-xl-4 mb-5">
        <img className="w-100" src={props.img} alt="Poster"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
           <b> {props.department}</b>
          </p>
          <NavLink className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" to={props.url}>Read More...</NavLink>
        </div>
        
      </div>
  )
}

export default Card;