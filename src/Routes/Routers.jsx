import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import TourDetails from '../Pages/TourDetails/TourDetails';
import Tours from '../Pages/Tours/Tours';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import SearchResult from '../Pages/SerachResult/SearchResult';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/home"></Navigate>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/tours' element={<Tours></Tours>}></Route>
            <Route path='/tours/:id' element={<TourDetails></TourDetails>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/tours/search' element={<SearchResult></SearchResult>}></Route>
        </Routes>
    );
};

export default Routers;