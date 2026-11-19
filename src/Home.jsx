import { Link } from "react-router-dom";

function Home(props) {
    let routeToFiles = 'media/';

    return (
        <section className="songs"> {
            props.songs.map(song =>
                <div className="btnSong" id={song.id}>
                    
                    <a  href={"/song/" + song.id}>
                        <img src={routeToFiles + song.cover} alt={song.title} />
                        <div>{song.title}</div>
                        <div>{song.artist}</div>
                    </a>
                </div>
            )
        }
        </section>
    )
}

export default Home;