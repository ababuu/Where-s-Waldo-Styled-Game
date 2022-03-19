import './App.css';
import ButtonAppBar from './components/AppBar';
import SpacingGrid from './components/SpacingGrid';

function App() {
  return (
    <div className="App">
      <ButtonAppBar runtimer={false} showHomeButton={false} showLeaderBoard={true}/>
      <SpacingGrid/>
    </div>
  );
}

export default App;
