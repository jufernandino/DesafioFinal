import { useState } from 'react'
import './App.css'

function Playlist(){

  //ARRAY COM LISTA DAS MUSICAS
  const [musics, setMusics] = useState([
    {id:1,
      title: "The Zephyr Song",
      artist: "Red Hot Chili Pepers",
      album: "By The Way",
      favorite: false,},
    {
      id:2,
      title: "Talk",
      artist: "Coldplay",
      album: "X&Y",
      favorite: false,
    },
    {
      id:3,
      title: "Cidade Negra",
      artist: "Firmamento",
      album: "Cidade Negra AcÚstico MTV",
      favorite: false,
    },
  ]);
  
  return ( 
    //APLICATIVO GERAL
    <div className="app"> 
      {/*AREA PRINCIPAL*/}
      <div className='area'>
            {/*IMAGEM DA PLAYLIST*/}
            <div className='image-playlist'></div>
            {/*NOME E INFORMAÇÕES DA PLAYLIST*/}
            <div className="name-playlist">
                <p>Playlist</p>
                <h1>Daily Mix 1</h1>
                <p>Red Hot Chilli Peppers, Coldplay e mais</p>
                <p><span>Spotify - 50 músicas</span> <span className='playlist-time' >1h 7min</span></p>
            </div>
      </div>
      {/*CABEÇALHO PARA AREA EM QUE APARECE AS MUSICAS*/}
      <div className="header-playlist">
        <div className='header-playlist-tittle'> <span className="material-symbols-outlined"> numbers </span> <h4> TÍTULO </h4> </div>
        <h4>ÁLBUM</h4>
        <span className="material-symbols-outlined"> schedule </span>
      </div>
       {/*LINHA SEPARANDO O CABEÇALHO*/}
      <hr className='line-header'></hr>
      {/*AREA EM QUE APARECE AS MUSICAS*/}
      <div className="playlist"> 
        {musics.map ((music) => ( // Mapear os itens da função "musics"
          <ul key={music.id}>  {/*Listar todas as músicas*/}
            <div className="music">
              
              {/*AREA #TITULO*/}
              <div className="TITLE">
                <p>{music.title}</p>
                <p>{music.artist}</p>
              </div>

              {/*AREA ALBUM*/}
              <div className="ALBUM">
                <p>({music.album})</p>
              </div>

              {/*AREA COM INTERAÇÕES*/}
              <div className="ITERACTIONS">
                <button className='favorite-button'>
                  <span className="material-symbols-outlined"> favorite </span>
                </button>
                <button className='delete-button'>
                <span className="material-symbols-outlined"> delete </span>
                </button>
              </div>

            </div>
          </ul> //Fim da listagem das músicas
        ))} {/*Fim do map*/}
      
      </div> {/*FIM DA AREA DAS MUSICAS*/}

    </div>
    //FIM DO APLICATIVO GERAL
  );
}

function App(){
  
  return ( 
      Playlist()    
    )
}

export default App
