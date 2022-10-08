import {useState,useEffect} from 'react';
import AnimeCard from './components/AnimeCard';
import SearchIcon from './icons/search.svg'
import './App.css';
import './assets/searchbar.scss'


const API_URL = 'https://kitsu.io/api/edge'

const ani1 ={
  "id": "1",
  "type": "anime",
  "links": {
      "self": "https://kitsu.io/api/edge/anime/1"
  },
  "attributes": {
      "createdAt": "2013-02-20T16:00:13.609Z",
      "updatedAt": "2022-10-07T20:03:26.535Z",
      "slug": "cowboy-bebop",
      "synopsis": "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals.\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. \nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.\n\n(Source: MAL Rewrite)",
      "description": "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals.\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. \nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.\n\n(Source: MAL Rewrite)",
      "coverImageTopOffset": 400,
      "titles": {
          "en": "Cowboy Bebop",
          "en_jp": "Cowboy Bebop",
          "ja_jp": "カウボーイビバップ"
      },
      "canonicalTitle": "Cowboy Bebop",
      "abbreviatedTitles": [
          "COWBOY BEBOP"
      ],
      "averageRating": "82.02",
      "ratingFrequencies": {
          "2": "4518",
          "3": "61",
          "4": "433",
          "5": "37",
          "6": "203",
          "7": "40",
          "8": "4172",
          "9": "55",
          "10": "866",
          "11": "83",
          "12": "2558",
          "13": "166",
          "14": "8896",
          "15": "437",
          "16": "9199",
          "17": "919",
          "18": "11272",
          "19": "842",
          "20": "37347"
      },
      "userCount": 121662,
      "favoritesCount": 4580,
      "startDate": "1998-04-03",
      "endDate": "1999-04-24",
      "nextRelease": null,
      "popularityRank": 31,
      "ratingRank": 129,
      "ageRating": "R",
      "ageRatingGuide": "17+ (violence & profanity)",
      "subtype": "TV",
      "status": "finished",
      "tba": null,
      "posterImage": {
          "tiny": "https://media.kitsu.io/anime/poster_images/1/tiny.jpg",
          "large": "https://media.kitsu.io/anime/poster_images/1/large.jpg",
          "small": "https://media.kitsu.io/anime/poster_images/1/small.jpg",
          "medium": "https://media.kitsu.io/anime/poster_images/1/medium.jpg",
          "original": "https://media.kitsu.io/anime/poster_images/1/original.jpg",
          "meta": {
              "dimensions": {
                  "tiny": {
                      "width": 110,
                      "height": 156
                  },
                  "large": {
                      "width": 550,
                      "height": 780
                  },
                  "small": {
                      "width": 284,
                      "height": 402
                  },
                  "medium": {
                      "width": 390,
                      "height": 554
                  }
              }
          }
      },
      "coverImage": {
          "tiny": "https://media.kitsu.io/anime/1/cover_image/tiny-1f92cfe65c1b31d8b47e36f025d32b35.jpeg",
          "large": "https://media.kitsu.io/anime/1/cover_image/large-88da0208ac7fdd1a978de8b539008bd8.jpeg",
          "small": "https://media.kitsu.io/anime/1/cover_image/small-33ff2ab0f599bc15ed73856ecd13fe71.jpeg",
          "original": "https://media.kitsu.io/anime/1/cover_image/fb57e5f25616633a41f0f5f1ded938ee.jpeg",
          "meta": {
              "dimensions": {
                  "tiny": {
                      "width": 840,
                      "height": 200
                  },
                  "large": {
                      "width": 3360,
                      "height": 800
                  },
                  "small": {
                      "width": 1680,
                      "height": 400
                  }
              }
          }
      },
      "episodeCount": 26,
      "episodeLength": 25,
      "totalLength": 626,
      "youtubeVideoId": "qig4KOK2R2g",
      "showType": "TV",
      "nsfw": false
  },
  "relationships": {
      "genres": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/genres",
              "related": "https://kitsu.io/api/edge/anime/1/genres"
          }
      },
      "categories": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/categories",
              "related": "https://kitsu.io/api/edge/anime/1/categories"
          }
      },
      "castings": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/castings",
              "related": "https://kitsu.io/api/edge/anime/1/castings"
          }
      },
      "installments": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/installments",
              "related": "https://kitsu.io/api/edge/anime/1/installments"
          }
      },
      "mappings": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/mappings",
              "related": "https://kitsu.io/api/edge/anime/1/mappings"
          }
      },
      "reviews": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/reviews",
              "related": "https://kitsu.io/api/edge/anime/1/reviews"
          }
      },
      "mediaRelationships": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/media-relationships",
              "related": "https://kitsu.io/api/edge/anime/1/media-relationships"
          }
      },
      "characters": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/characters",
              "related": "https://kitsu.io/api/edge/anime/1/characters"
          }
      },
      "staff": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/staff",
              "related": "https://kitsu.io/api/edge/anime/1/staff"
          }
      },
      "productions": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/productions",
              "related": "https://kitsu.io/api/edge/anime/1/productions"
          }
      },
      "quotes": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/quotes",
              "related": "https://kitsu.io/api/edge/anime/1/quotes"
          }
      },
      "episodes": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/episodes",
              "related": "https://kitsu.io/api/edge/anime/1/episodes"
          }
      },
      "streamingLinks": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/streaming-links",
              "related": "https://kitsu.io/api/edge/anime/1/streaming-links"
          }
      },
      "animeProductions": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/anime-productions",
              "related": "https://kitsu.io/api/edge/anime/1/anime-productions"
          }
      },
      "animeCharacters": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/anime-characters",
              "related": "https://kitsu.io/api/edge/anime/1/anime-characters"
          }
      },
      "animeStaff": {
          "links": {
              "self": "https://kitsu.io/api/edge/anime/1/relationships/anime-staff",
              "related": "https://kitsu.io/api/edge/anime/1/anime-staff"
          }
      }
  }
}


const App=()=> {
  const[animes,setAnimes] = useState([]);
  const[searchTerm,setSearchTerm] = useState('');
  const[currentPage,setCurrentPage] = useState(1);


  const searchAnime = async (search,offset) => {
      const response = await fetch(`${API_URL}/anime?filter[text]=${search}?page[limit]=10&page[offset]=${offset*10}`);
      const data = await response.json();
      setAnimes([]);
      setTimeout(() => {
        setAnimes(data.data);
      }, 300);
      console.log(animes.length);
  }



  useEffect(()=>{
    searchAnime(searchTerm,currentPage-1);

  }, [currentPage]);

  return (
    <div className="App">
      <h1>Anime DB</h1>

      <div class="s-container">
        <input 
          type="text" 
          placeholder="Input anime name...."
          value={searchTerm}
          onChange = {(e) => setSearchTerm(e.target.value)}
        
        />
        <div 
          class="search"
          onClick={()=>{searchAnime(searchTerm.replace(/ /g, '%20'));setCurrentPage(1)}}
        >
          <img
            src={SearchIcon}
          />
        </div>
      </div>

      {
        animes ?.length>0
        ? (
          <div className='container'>
            {animes.map((anime)=>(
              <AnimeCard anime={anime}/>
            ))}
          </div>
        ) : (
          <div className='empty'> 
            <h2>No search results.</h2>
          </div>
        )
      }
      <div className='chage-page'>
        {
            currentPage<2 
        ? (
            null
            ):(
            <button onClick={()=>setCurrentPage(currentPage-1)}>Prev</button>
            )
        }
        
            <p>{currentPage}</p>
        <button
            onClick={()=>setCurrentPage(currentPage+1)}
        >Next</button>
      </div>
      

    </div>
  );
}

export default App;
