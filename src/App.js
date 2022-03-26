import * as React from 'react';
import './App.css';
import ButtonAppBar from './components/AppBar';
import SpacingGrid from './components/SpacingGrid';
import Footer from './Footer';
import FavoriteIcon from '@mui/icons-material/Favorite';

function App() {
  const [showMobileWarning, setShowMobileWarning] = React.useState(false)

  React.useEffect(() => {
    if(window.innerWidth <= 800)
      setShowMobileWarning(true)
  }, [])
  return (
    <div className="App">
      {!showMobileWarning && <div>
      <ButtonAppBar runtimer={false} showHomeButton={false} showLeaderBoard={true}/>
      <SpacingGrid/>
      <Footer/>
      </div>}
      {
        showMobileWarning && <h2 style={{textAlign:'center'}}>This game is meant to be played on a desktop. So please open it in a desktop to fully enjoy the expirience. Thank you <FavoriteIcon/>.</h2>
      }
    </div>
  );
}

export default App;
