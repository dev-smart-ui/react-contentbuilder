
import './App.css';
import {useEffect, useState} from "react";


import axios from "axios";

function App() {
  const [dataFromCms , setDataFromCms]= useState("")
  useEffect(()=>{
    axios.get("https://builder.smart-ui.pro/load?page=%3Fpage%3DgoodPage").then(({data})=>{
      setDataFromCms(data.html)
    })
  },[])

  return (<>
          <div className="container ">
              <div dangerouslySetInnerHTML={{__html:dataFromCms}}/> }
          </div>
      </>

  );
}

export default App;
