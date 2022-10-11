import dateFormat from "dateformat";
import {useState} from 'react';

const API_URL = 'https://cors-anywhere.herokuapp.com/api.myanimelist.net:443/v2'

const AnimeCard = ({anime}) => {
    const[animeinfo,setAnimeInfo] = useState({})

    const lookUp = async (anime) => {
      const request = {
        headers : { 'X-MAL-CLIENT-ID': '6af09f05489e863c3832e5a001faa39f'},
        };
      const response = await fetch(`${API_URL}/anime/${anime.node.id}`,request);
      const data = await response.json();
      setAnimeInfo(data);
    }

    lookUp(anime);
    
    return (
        <div className='anime'>
          <div>
            <h2>{anime.node.title}</h2>
          </div>

          <div>
            <img src={anime.node.main_picture.medium} alt={anime.node.title}/>
          </div>

          <span>{animeinfo.media_type}</span>
          <br></br>
          <span>{dateFormat(animeinfo.end_date,"mmmm dS, yyyy")}</span>
        </div>
    )


}

export default AnimeCard;