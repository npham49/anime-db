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
      const response = await fetch(`${API_URL}/anime?q=${search}&limit=10&page=${currentPage}&genre='12'`);
      const data = await response.json();
      setAnimes([])
      setAnimes([data.data]);
      console.log(data.data[0]);
      setHasNextPage(data.pagination.has_next_page);
  }

  useEffect(()=>{
    searchAnime(searchTerm);

  }, [currentPage]);

  return (
    <div className="App place-content-center text-textcolor flex flex-col justify-center items-center">
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
            src={SearchIcon} alt="Search Icon"
          />
        </div>
      </div>
      <div className='container px-5 py-2 mx-auto justify-center'>
        {
          
          animes?.length>0
          ? (
            <div className='justify-center items-center flex flex-wrap -m-1 md:-m-2'>
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
      </div>
      <div className='inline-flex shadow-md hover:shadow-lg focus:shadow-lg'>
        {
            currentPage<2 
        ? (
            null
            ):(
            <button className='rounded-l inline-block px-6 py-2.5 bg-slate-600 text-textcolor font-medium text-xs leading-tight uppercase hover:bg-slate-700 focus:bg-slate-700 focus:outline-none focus:ring-0 active:bg-slate-800 transition duration-150 ease-in-out' onClick={()=>setCurrentPage(currentPage-1)}>Prev</button>
            )
        }
        
            <p>{currentPage}</p>

        {
            hasNextPage===false 
        ? (
            null
            ):(
            
              <button
                className='rounded-l inline-block px-6 py-2.5 bg-slate-600 text-textcolor font-medium text-xs leading-tight uppercase hover:bg-slate-700 focus:bg-slate-700 focus:outline-none focus:ring-0 active:bg-slate-800 transition duration-150 ease-in-out'
                onClick={()=>setCurrentPage(currentPage+1)}
              >Next</button>
            )
        }
      </div>
      

    </div>
  );
}

export default App;
