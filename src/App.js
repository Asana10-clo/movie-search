import React, { useState } from 'react';
import './App.css';

import CardUI  from './CardUI';

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

      <div className="bg-yellow-500 mt-4 py-4 px-4 rounded-lg border-4 grid grid-cols-5 gap-4">
        {data.map((data)=>{
          return(
              <CardUI 
                key={data.imdbId}
                img={data.Poster}
                title={data.Title}
                year={data.Year}
                type={data.Type}
              />   
        )})}
      </div>
    </div>
  ); 
}


export default App;
