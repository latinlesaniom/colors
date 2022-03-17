import React, { useEffect, useState } from "react";
import axios from "axios";


const App = () =>  {

  const [colors, setColors] = useState([])

    const randomColors =  async () => {
    return await axios.post('https://cors-everywhere.herokuapp.com/http://colormind.io/api/', {model: 'default'})
               .then(res => {
                   setColors(res.data.result)
            })
    }

    useEffect(() => {
        alert(`click in the button "Generate" to change colors`)
        randomColors()
    },[])

  return (
    <>
    <div className="header">
      <h1 className="tittle" >Coolors</h1>
      <button onClick={randomColors} className="btn">Generate</button>
    </div>
      <div className="content">
      <div className="card-content">
            {
              colors.map((color) => (
            <div>
                <div className="panel" style={{backgroundColor: `rgb(${color})` }}>
                        <div className="text">{`rgb(${color})`}</div>
                    </div>
            </div>
              ))   
            }
           </div>
      </div>
    </>
  );
}
export default App;
