
import './App.css'
import Counter from './Counter'
import Players from './Players'
import Users from './Users'
import Friends from './Friends'

function App() {
  function eventHandler(){
    alert('click the button 1')
  }
  const eventHandler1 = () => {
    alert('click the button 2')
  }
  const eventHandler4 = (num) => {
    alert(num*3)
  }

  return (
    <>
      <h1>React core consept part-2</h1>
      <button className='button-1' onClick={eventHandler}>btn-1</button>
      <button className='button-2' onClick={eventHandler1}>btn-2</button>
      <button className='button-2' onClick={()=>{alert('click the button 3')}}>btn-3</button>
      <button className='button-2' onClick={()=>eventHandler4(5)}>btn-4</button><br />


      <Counter></Counter>
      <Players></Players>
      <Users></Users>
      <Friends></Friends>
            
    </>
  )
}

export default App
