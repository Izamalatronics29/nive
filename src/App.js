import './App.css';
import ListOfGifs from "./component/ListOfGifs"

function App() {
  return (
    <div className="App">
      <section>
        <ListOfGifs keyword='ecuador'/>
      </section>
    </div>
  );
}

export default App;
