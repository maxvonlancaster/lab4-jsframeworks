import { Link } from "react-router";

function SongScreen(props) {
    return (
    <section className="songs"> {
        props.songs.map(song =>
            <div className="song" id={song.id}>
                <Link to={'/media/'} >
                    <img 
                    src={song.cover} 
                    alt={song.title} 
                    />
                </Link>
                <div>{song.title}</div>
                <div>{song.artist}</div>
                <img src={song.cover} alt="" />
                <audio src=""></audio>
            </div>
        )   
    }
    </section>
    )
}

export default SongScreen;