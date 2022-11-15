
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import Iframe from 'react-iframe';
import 'reactjs-popup/dist/index.css';

const AnimeCard = ({anime}) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
    return (
        <div onClick={() => setOpen(o => !o)} className='flex flex-col bg-gray-800 border border-gray-700 hover:bg-gray-700 shadow-md w-64 justify-center items-center m-4 rounded-lg cursor-pointer'>
          {/* the popup */}
          <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div>
              <div className='flex justify-between items-start'>
                <h3 class="text-xl font-semibold text-gray-900">
                  Info
                </h3>
                <button className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal" onClick={closeModal}>
                  <p className='w-6 h-6'>&times;</p>
                </button>
              </div>
              <div className='h-2/3 overflow-y-auto p-6 bg-gray-800 text-white'>
                <p><b>Japanese tittle:</b> {anime.title_japanese} ({anime.title} ) </p>
                <p><b>English tittle:</b> {anime.title_english}</p>
                <h4><b>Description:</b></h4>
                <p>{anime.synopsis}</p>
                <p><b>Trailer:</b></p>
                {anime.trailer.embed_url ? 
                  <Iframe url={anime.trailer.embed_url}
                  width="100%"
                  height="360px"
                  display="block"
                  position="relative"/>
                   : <p>Unavailable</p>}
              </div>
              
            </div>
          </Popup>
          {/* remaining content of card */}
          <div >
            <img className='w-64 rounded-t-lg' src={anime.images.webp.image_url} alt={anime.title}/>
          </div>
          <div className="p-6 mb-2">
            <h2 className="text-xl font-bold">{anime.title}</h2>
            <p>{anime.type}</p>
            <p>{anime.aired.string}</p>
          </div>
        </div>
    )


}

export default AnimeCard;