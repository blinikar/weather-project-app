import React from "react";
import "./App.css";
import {SampleComponent} from "./components/SampleComponent";

function App() {
    return (
        <div className="App">
            <SampleComponent text={"This is sample component"} />
            <h1>Hello world</h1>
        </div>
    );
}

export default App;
