import './CostItem.css'
import CostDate from './CostDate'
import Card from '../UI/Card'
import React, { useState } from 'react'

const CoastItem = (props) => {
  const [description, setDescription] = useState(props.description)
  console.log('text in component')

  const changeDescHandler = () => {
    setDescription('New cost')
    console.log(description)
  }
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
      <button onClick={changeDescHandler}>change desc</button>
    </Card>
  )
}

export default CoastItem
