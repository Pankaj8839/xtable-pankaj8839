import './App.css';
import { useState } from 'react';

function App() {

  const [data,setData]=useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
])
 
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
    setData(sortedData);
  }
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => b.views - a.views);
    setData(sortedData);
  }
  
  return (
    <div className="App">
     <h1>Date and Views Table</h1>
     <button onClick={sortByDate}>Sort by Date</button>
     <button onClick={sortByViews}>Sort by Views</button>
     <table>
     <thead>
            <tr >
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>  
            </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        
        </tbody>
     </table>
    </div>
  );
}

export default App;



