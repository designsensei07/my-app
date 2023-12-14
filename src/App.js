
import React from 'react';
import Navbar from './comp/Navbar';
import Colbox from './comp/Columnbox';
import axios from 'axios';
import Cardbox from './comp/Cardbox';
import { useState, useEffect } from 'react';
function App() {
    const[data, setData] = useState([]);

    useEffect(() => {
      axios.get("https://api.quicksell.co/v1/internal/frontend-assignment").then((res) => {
        setData(res);
        console.log(res);
      })
    })

    console.log(data.data.tickets);
    const sortByPriority = (priorInt) => {
      const dataArr = Array();
        for(let i=0; i<data.length; i++){
          if(data.data.tickets[i].priority === priorInt){
            dataArr.push(data[i]);
            console.log("true");

          }
        }
      return dataArr;
    }
    // const sortByPriority = (priorInt) => {
    //   const dataArr = Array();
    //     for(let i=0; i<data.length; i++){
    //       if(data[0].tickets[i].priority === priorInt){
    //         dataArr.push(data.tickets[i]);

    //       }
    //     }
    //   return dataArr;
    // }
    console.log(sortByPriority(3));

  
    

  return (
    <div className="App">
        <Navbar />
        <div className='columns'>
          <Colbox data = {sortByPriority(4)}/>
            
        </div>
    </div>
  );
}

export default App;
