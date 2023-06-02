import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react"

function App() {

  const [tab, setTab] = useState("aboutMe")

  return (
    <div className="App">
        <Header tab={tab} setTab={setTab}/>
        <Body tab={tab}/>
        <Footer/>
    </div>
  );
}

export default App;
