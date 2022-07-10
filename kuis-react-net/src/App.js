import './App.css';
import { Welcome } from './components/Welcome';
import { Button } from './components/Button';

function App() {
  let name = "Edward Maulana Sitompul";

  return (
    <div className="App">
      {!name ? <Button /> : <Welcome nama={name}/>}
    </div>
  );
}

export default App;
