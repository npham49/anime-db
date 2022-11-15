import { useState, useEffect } from "react";
import AnimeCard from "./components/AnimeCard";
import SearchIcon from "./icons/search.svg";
import "./App.css";
import "./assets/searchbar.scss";

const API_URL = "https://api.jikan.moe/v4";

const App = () => {
  const [animes, setAnimes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  const searchAnime = async (search) => {
    const response = await fetch(
      `${API_URL}/anime?q=${search}&limit=10&page=${currentPage}&order_by=popularity`
    );
    const data = await response.json();
    setAnimes([]);
    setAnimes([data.data]);
    console.log(data.data);
    setHasNextPage(data.pagination.has_next_page);
  };

  useEffect(() => {
    searchAnime(searchTerm);
  }, [currentPage]);

  return (
    <div className="place-content-center text-textcolor flex flex-col justify-center items-center bg-gray-900 pb-8 text-white">
      <div className="sticky flex flex-row h-16 w-full bg-gray-700 top-0 z-30">
        <h1
          className="text-5xl cursor-pointer p-3"
          onClick={() => {
            setCurrentPage(1);
            searchAnime("");
          }}
        >
          Anime DB
        </h1>
        <div className="ml-auto flex flex-row p-2 w-96">
          <input
            className="block w-full p-2 text-sm border  rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
            type="text"
            placeholder="Input anime name...."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => {
              searchAnime(searchTerm.replace(/ /g, "%20"));
              setCurrentPage(1);
            }}
            class=" bg-blue-600 hover:bg-blue-700 z-40 text-white absolute right-3.5 top-3.5 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>

      <div className="container px-5 py-2 mx-auto justify-center">
        {animes?.length > 0 ? (
          <div className="justify-center items-center flex flex-wrap -m-1 md:-m-2">
            {animes[0].map((anime) => (
              <AnimeCard anime={anime} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No search results.</h2>
          </div>
        )}
      </div>
      <div className="inline-flex">
        {currentPage < 2 ? null : (
          <button
            className="bg-gray-800 hover:bg-gray-700 text-textcolor font-bold py-2 px-4 rounded-l"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>
        )}

        <div className="bg-gray-800 text-textcolor font-bold py-2 px-4 border-r border-l border-gray-800">
          <p>{currentPage}</p>
        </div>

        {hasNextPage === false ? null : (
          <button
            className="bg-gray-800 hover:bg-gray-700 text-textcolor font-bold py-2 px-4 rounded-r"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
