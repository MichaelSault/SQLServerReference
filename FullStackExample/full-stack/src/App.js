import './App.css';
import React, {useState} from 'react';

function App() {

  const [returnedData, setReturnedData] = useState(['hello fellow hu-mans [:D]']);
  const [employee, setEmployee] = useState({EmployeeID: 0, Firstname: '', Lastname: '', Age: 0, Gender: ''}) //use state is a hook for functional components

  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    if (name === 'EmployeeID' || name === 'Age'){
      setEmployee(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
      return;
    }
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const fetchData = async () => {
    console.log(employee);
    const newData = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: employee.Firstname
      })
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0])
  }

  return (
    <div className="App">
      <input
        type="number" 
        name='EmployeeID' 
        placeholder='EmployeeID' 
        onChange={setInput}></input>
      <input 
        name='Firstname' 
        placeholder='Firstname' 
        onChange={setInput}></input>
      <input 
        name='Lastname' 
        placeholder='Lastname' 
        onChange={setInput}></input>
      <input 
        type="number" 
        name='Age'
        placeholder='Age' 
        onChange={setInput}></input>
      <input 
        name='Gender' 
        placeholder='Gender' 
        onChange={setInput}></input>
      <button onClick={() => fetchData('/quit')}>View</button>
      <button onClick={() => fetchData('/quit')}>Create</button>
      <p>EmployeeID: {returnedData.EmployeeID}</p>
      <p>Firstname: {returnedData.Firstname}</p>
      <p>Lastname: {returnedData.Lastname}</p>
      <p>Age: {returnedData.Age}</p>
      <p>Gender: {returnedData.Gender}</p>
      {returnedData}
    </div>
  );
}

export default App;