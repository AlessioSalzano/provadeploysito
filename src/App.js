import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"
import axios from "axios"

function App() {

  const[users,setUsers] = useState([]);


  useEffect (()=>{
    richiesta()
    
    console.log(JSON.stringify(users))
  },[])
  
  const richiesta =async ()=>{
    const res= await axios.get("http://localhost:5000/utenti");
    console.log(JSON.stringify(res.data))
    let ARR=[]

    let arr={"result":""}
    arr.result=res.data
    console.log(JSON.stringify(arr))
    setUsers(JSON.stringify(arr))
    }

  return (
    <div className="App">
      <h1>CIAO MONDO</h1>
    </div>
  );
}

export default App;
