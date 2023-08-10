import './App.css'
import data from './data'
import Header from './components/Header/Header'
import Card from './components/Card/Card'

function App() {
  const cards = data.map(item => {
    return (
    <Card
      key={item.id}
      {...item}
    />
    
    )
  })

  return (
    <>
      <Header />
      {cards}
    </>
  )
}

export default App
