import logo from './logo.svg';
import './App.css';
import SongScreen from './SongScreen';

function App() {
  let songs = [{
    id: 1,
    cover: "cover/hay zeleniy hay.jpg",
    title: "Гай, зелений гай",
    artist: "Назарій Яремчук",
  },
  {
    id: 2,
    cover: "cover/Little V. - Red Like Roses, Pt. 2.jpg",
    title: "Yesterday",
    artist: "Beetles",
  }]

  return (
    <div> 
          <SongScreen songs={songs}/>
    </div>
  );
}

export default App;
