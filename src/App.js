import React, { useState } from "react";
import data from "./data";
import "./App.css";

function App() {
  const [list, setList] = useState(data);

  const handleOpen = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            open: !item.open,
          };
        } else
          return {
            ...item,
            open: false,
          };
      })
    );
  };
  return (
    <section>
      <h1 className="title">ACCORDION</h1>
      <div className="card">
        {list.map((item) => {
          return (
            <div key={item.id}>
              <div className="header">
                <h1>{item.header}</h1>

                {item.open && (
                  <i
                    onClick={() => handleOpen(item.id)}
                    className="fa fa-close fa-2x"
                  ></i>
                )}
                {!item.open && (
                  <i
                    onClick={() => handleOpen(item.id)}
                    className="fa fa-plus fa-2x"
                  ></i>
                )}
              </div>
              {item.open && <h3 className="content">{item.body}</h3>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default App;
