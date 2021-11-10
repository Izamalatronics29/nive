import './App.css';
import ListOfGifs from "./component/ListOfGifs";
import {Link ,Route} from "wouter"

function App() {
  return (
    <div className= "App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/colombia'>Colombia</Link>
        <Link to="/gif/morty">Morty</Link>
        <Link to="/gif/rick">Rick Sánchez</Link>
        <Route path= '/gif/:keyword' component={ListOfGifs}/>
      </section>
    </div>
  );
}

export default App;
