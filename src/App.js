 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import NotFound from './Components/NotFound/NotFound'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path ='/' element={<Home/>}></Route>
        <Route path ='/review' element={<Reviews/>}></Route>
        <Route path ='/dashboard' element={<Dashboard/>}></Route>
        <Route path ='/blogs' element={<Blogs/>}></Route>
        <Route path ='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
       
    </div>
  );
}

export default App;
