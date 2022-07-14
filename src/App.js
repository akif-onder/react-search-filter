import Data from "./Data.json";
import { useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="container">
      <h1>Council Members</h1>
      <div className="inputContainer">
        <input
          className="search"
          type="text"
          placeholder="Enter a member..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="dataContainer">
        {Data.filter((value) => {
          if (searchTerm === "") {
            return value;
          } else if (
            value.title
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return value;
          }
        }).map((value)=>{
          return(
            <div className="data" key={value.id}>
              <img src={value.image} alt="" />
              <h3>{value.title}</h3>
              <p>{value.Description}</p>
            </div>
          )
        })
        }
      </div>
    </div>
  );
}

export default App;
