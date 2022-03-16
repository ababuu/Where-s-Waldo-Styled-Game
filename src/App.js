import './App.css';
import ButtonAppBar from './components/AppBar';
import SpacingGrid from './components/SpacingGrid';

function App() {
  return (
    <div className="App">
      <ButtonAppBar runtimer={false}/>
      <SpacingGrid/>
    </div>
  );
}

export default App;
