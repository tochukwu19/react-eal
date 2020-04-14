import React from 'react'
import Card from './card/card'
import './cards.css'
import img1 from '../../assets/sci.jpg'
import img2 from '../../assets/art.jpg'
import img3 from '../../assets/law.jpg'

const cards = () => {
  return (
    <React.Fragment>
      <div className="cards">
        <Card title="Biology Env" level="200L" img={img1} alt="image1" />
        <Card title="Maths Env" level="400L" img={img2} alt="image2" />
        <Card title="English Env" level="200L" img={img3} alt="image3" />
      </div>
    </React.Fragment>
  )
}

export default cards
