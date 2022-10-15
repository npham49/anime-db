const AnimeCard = ({anime}) => {
    
    return (
        <div className='flex flex-col bg-cardbg w-64 justify-center items-center p-2 m-4 rounded-lg'>
          {console.log(anime.title)}
          <div>
            <img src={anime.images.webp.image_url} alt={anime.title}/>
          </div>
          <div className="p-6 mb-2">
            <h2 className="text-xl font-medium">{anime.title}</h2>
            <p>{anime.type}</p>
            <p>{anime.aired.string}</p>
          </div>
        </div>
    )


}

export default AnimeCard;