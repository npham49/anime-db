const AnimeCard = ({anime}) => {
    
    return (
        <div className='anime'>
          {console.log(anime.title)}
          <div>
            <h2>{anime.title}</h2>
          </div>

          <div>
            <img src={anime.images.webp.image_url} alt={anime.title}/>
          </div>

          <span>{anime.type}</span>
          <br></br>
          <span>{anime.aired.string}</span>
        </div>
    )


}

export default AnimeCard;