import logo from './logo.svg';
import './App.css';
import Home from './Home';
import songs from './songs'

function App() {
  

  return (
    <div> 
          <Home songs={songs}/>
    </div>
  );
}

export default App;
