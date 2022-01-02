import React from "react";
import "./App.css";

interface IHeader {
  title: String;
}

const Header = ({ title }: IHeader) => <header>{title}</header>;

function App() {
  return (
    <div className="App">
      <Header title={`Hello World`} />
    </div>
  );
}

export default App;
