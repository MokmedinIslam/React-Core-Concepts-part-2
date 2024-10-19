import './App.css'
import Counter from './Counter'
import PracticeCounter from './PracticeCounter'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert('Button clicked')
  }

  const handleClick2 = () =>{
    alert('Button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts part-2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <PracticeCounter></PracticeCounter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('Button 3')}}>Click 3</button>
      <button onClick={() =>addToFive(5)}>Four</button>
    </>
  )
}

export default App
