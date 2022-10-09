import React from "react";
import dateFormat from "dateformat";

const AnimeCard = ({anime}) => {
    return (
        <div className='anime'>
          <div>
            <h2>{anime.attributes.canonicalTitle}</h2>
          </div>

          <div>
            <img src={anime.attributes.posterImage.original} alt={anime.attributes.canonicalTitle}/>
          </div>

          <span>{anime.attributes.showType}</span>
          <br></br>
          <span>{dateFormat(anime.attributes.endDate,"mmmm dS, yyyy")}</span>
        </div>
    )


}

export default AnimeCard;