import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Platforms from './pages/Platforms'
import Games from './pages/Games';
import Content from './component/Content'
import Navbar from './component/Navbar';
import SearchBar from './component/SearchBar';
import AllGames from './component/AllGames';
import { useState, useEffect } from 'react';



const App = () => {

  const [getPlatforms, setGetPlatforms] = useState([]);
  const [getResponse, setGetResponse] = useState(false);
  console.log(getPlatforms);

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/platforms?key=bb65dd58f7bb4405b5196d2c42fdb801&ordering');
        setGetPlatforms(response.data.results);
        setGetResponse(true);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchPlatforms();
  }, []);

  if (getResponse === false) {
    return <div className="loading">
      <div className="loadingState"></div>
    </div>
  }
  else {
    return (
      <>
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='platforms' element={<Platforms getPlatforms={getPlatforms} getResponse={getResponse} />} />
          <Route path='games' element={<Games getPlatforms={getPlatforms} getResponse={getResponse} />} >
            <Route index element={<AllGames/>} />
            <Route path=':platform' element={<Content/>} />
          </Route>
          {/* {
            getPlatforms.map((data) => {
              return <Route key={Math.floor(Math.random() * 1000)} path={`games/${data.slug}`} element={<Content />} />
            })
          // } */}
        </Routes>
      </>
    )
  }
}

export default App;
