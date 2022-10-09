import {useState,useEffect} from 'react';
import AnimeCard from './components/AnimeCard';
import SearchIcon from './icons/search.svg'
import './App.css';
import './assets/searchbar.scss'


const API_URL = 'https://kitsu.io/api/edge'


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
