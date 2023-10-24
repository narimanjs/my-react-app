import CoastItem from './CostItem'
import Card from '../UI/Card'
import './Costs.css'
import CostsFilter from './CostsFilter'
import React, { useState } from 'react'

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021')
  const yearChangeHandler = (year) => {
    setSelectedYear(year)
  }

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />

        <CoastItem
          date={props.costs[0].date}
          description={props.costs[0].description}
          amount={props.costs[0].amount}
        />
        <CoastItem
          date={props.costs[1].date}
          description={props.costs[1].description}
          amount={props.costs[1].amount}
        />
        <CoastItem
          date={props.costs[2].date}
          description={props.costs[2].description}
          amount={props.costs[2].amount}
        />
      </Card>
    </div>
  )
}

export default Costs
