import React from "react";
import JokeListClass from "./JokeListClass";

function App() {
  return (
    <div className="App">
      <JokeListClass numJokesToGet = {10} />
    </div>
  );
}

export default App;
