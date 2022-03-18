import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LandingPage from './components/LangingPage';
import Detail from './components/Detail';
import Create from './components/Create';
import Page404 from './components/Page404';

function App() {
  return (
    <div className="App">
      {/* <h1>Henry Videogames</h1> */}
      <Routes>
        <Route exact path={'/'} element={<LandingPage />}/>
        <Route exact path={'/home'} element={<Home />} />
        <Route exact path={'/detail/:id'} element={<Detail />} />
        <Route exact path={'/create'} element={<Create />} />
        <Route path={'*'} element={<Page404/>} />
      </Routes>
    </div>
  );
}

export default App;
