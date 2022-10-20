
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AnimeCard = ({anime}) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
    return (
        <div onClick={() => setOpen(o => !o)} className='flex flex-col bg-cardbg hover:bg-cardbghover w-64 justify-center items-center p-2 m-4 rounded-lg cursor-pointer'>
          {/* the popup */}
          <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div className="modal rounded-lg shadow">
              <div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'>
                <h3 class="text-xl font-semibold text-gray-900">
                  Description
                </h3>
                <button className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal" onClick={closeModal}>
                  <p className='w-5 h-5'>&times;</p>
                </button>
              </div>
              
              <p>{anime.synopsis}</p>
            </div>
          </Popup>
          {/* remaining content of card */}
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