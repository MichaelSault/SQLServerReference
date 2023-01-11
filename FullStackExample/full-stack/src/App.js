import './App.css';
import React, {useState} from 'react';

function App() {

  const [returnedData, setReturnedData] = useState(['hello fellow hu-mans [:D]']);

  const getData = async (url) => {
    const newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData.result)
  }

  return (
    <div className="App">
      <button onClick={() => getData('/quit')}>Hello Mr.Button</button>
      {returnedData}
    </div>
  );
}

export default App;