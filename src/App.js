import NewCost from './components/NewCost/NewCost'
import Costs from './components/Costs/Costs'

const App = () => {
  const costs = [
    {
      id: 'c1',
      date: new Date(2022, 2, 12),
      description: 'Холодильник',
      amount: 999.1,
    },
    {
      id: 'c2',
      date: new Date(2022, 10, 12),
      description: 'Macbook',
      amount: 2999.1,
    },
    {
      id: 'c3',
      date: new Date(2022, 11, 12),
      description: 'Iphone 15',
      amount: 1999.1,
    },
  ]
  const addCostHandler = (cost) => {
    console.log(cost)
    console.log('App Component')
  }
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  )
}

export default App
