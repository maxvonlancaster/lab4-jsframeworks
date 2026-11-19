import { useParams } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import songs from './songs';

function SongScreen() {
    let { id } = useParams();
    
    let song = songs.find(s => s.id === id);

    return (
        <div>
            <img src={song.cover} alt={song.title} />
            <div>{song.title}</div>
            <div>{song.artist}</div>
            <ReactAudioPlayer src={song.audio}/>
        </div>
    )
}

export default SongScreen;