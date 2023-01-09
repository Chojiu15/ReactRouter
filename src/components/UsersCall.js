import '../App.css';
import Users from './Users'
import {useState, useEffect} from 'react'
import axios from 'axios'

function UsersCall() {
  const [myState, setMyState] = useState(0)
  const [myData, setMyData] = useState([])



  const changeMyState = () => {
    setMyState(10)
  }
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => setMyData(response.data)  )
  }, [])

  return (
    <div className="App">
      {myState}
      <button onClick={() => changeMyState()} >
        Change my State
      </button>
     
      {myData.map((element,index) => {
        return <Users {...element} />
      })}
    </div>
  );
}

export default UsersCall;
