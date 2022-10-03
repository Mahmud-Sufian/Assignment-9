import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailReview from './components/DetailReview/DetailReview';
import Home from './components/Home/Home';
import Header from './components/HomePage/Header/Header';
import MyAreaChart from './components/MyAreaChart/MyAreaChart';
import NotFound from './components/NotFound/NotFound'; 
import TotalReview from './components/TotalReview/TotalReview';

function App() {
  return (
    <div className="">
       <Header></Header>
       <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/review' element={<TotalReview></TotalReview>}></Route>
          <Route path='/review/:reviewId' element={<DetailReview></DetailReview>}></Route>
          <Route path='/dashboard' element={<MyAreaChart></MyAreaChart>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
    </div>
  );
}

export default App;
