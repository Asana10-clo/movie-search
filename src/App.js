import React, { useState } from 'react';
import './App.css';

function App() {

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  
  //search the api 
  
  const fetchData = (search) => { fetch(`http://www.omdbapi.com/?apikey=f8263a62&s=${search}`)
  .then(res => res.json())
  .then(data => {
    setData(data.Search)
    console.log(data.Search)
  })
  }
  
  const searchFunction = (e) => { 
    e.preventDefault();
    console.log(search);
    fetchData(search);
    return data;
  }
    // setData(Data) = new Map()
  //setData(data);
  // console.log(data.map())

  return (
    <div className="App">
      <div className="search-container">
        <h1>Search for your movies here</h1>
          <form>
            <label>Search here...</label>
            <input 
              value={search} 
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
              placeholder="Search here..."
            />
              
            <button onClick={searchFunction} type="submit">GO</button>
          </form>
      </div>

      <div>
        {data.map((movie , index)=>{
          return(
          <div 
            className="bg-red-500"
            key={index}
          >
            <p> {movie.Title} </p>
          </div>
        )
        })}
      </div>
    </div>
  );
}


export default App;
