import {useState,useEffect} from 'react';
import AnimeCard from './components/AnimeCard';
import SearchIcon from './icons/search.svg'
import './App.css';
import './assets/searchbar.scss'

//We have to go through a thrid party link because MAL API still has not fixed the CORS bug
const API_URL = 'https://api.jikan.moe/v4'


const App=()=> {
  const[animes,setAnimes] = useState([]);
  const[searchTerm,setSearchTerm] = useState('');
  const[currentPage,setCurrentPage] = useState(1);
  const[hasNextPage,setHasNextPage] = useState(false);




  const searchAnime = async (search) => {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=10&page=${currentPage}`);
      const data = await response.json();
      setAnimes([])
      setAnimes([data.data]);
      setHasNextPage(data.pagination.has_next_page);
  }

  useEffect(()=>{
    searchAnime(searchTerm);

  }, [currentPage]);

  return (
    <div className="App">
      <h1>Anime DB</h1>

      <div class="s-container">
        <input 
          className='search-field'
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
        
        animes?.length>0
        ? (
          <div className='container'>
            {animes[0].map((anime)=>(
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

        {
            hasNextPage===false 
        ? (
            null
            ):(
            
              <button
                onClick={()=>setCurrentPage(currentPage+1)}
              >Next</button>
            )
        }
      </div>
      

    </div>
  );
}

export default App;
