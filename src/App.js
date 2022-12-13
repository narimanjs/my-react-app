import Costs from './components/Costs/Costs'

function App() {
  const costs = [
    {
      date: new Date(2022, 2, 12),
      description: 'Холодильник',
      amount: 999.1,
    },
    {
      date: new Date(2022, 10, 12),
      description: 'Macbook',
      amount: 2999.1,
    },
    {
      date: new Date(2022, 11, 12),
      description: 'Iphone 15',
      amount: 1999.1,
    },
  ]
  return (
    <div>
      <h1>Начнем изучение REACT!</h1>
      <Costs costs={costs} />
    </div>
  )
}

export default App
