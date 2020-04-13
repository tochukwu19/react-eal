/* eslint-disable react/prop-types */
import React from 'react'
import './card.css'

const card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="image1" className="card" />
      <div>
        <p>{props.title}</p>
        <em>{props.level}</em>
      </div>
    </div>
  )
}

export default card
