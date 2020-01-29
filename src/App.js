import React, { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m8 offset-m2 l4 offset-l4 widget-container">
          {show && (
            <div className="widget">
              <span className="blue-text text-darken-2">
                This is a card panel with dark blue text
              </span>
            </div>
          )}
          {show && <div className="hr" />}
          <div className="widget-hider" onClick={() => setShow(!show)}>
            {show ? "Hide Chat" : "Show Chat"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
