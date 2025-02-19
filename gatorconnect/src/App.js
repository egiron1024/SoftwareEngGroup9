import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import SignUp from './components/pages/SignUp.js';
import Team from './components/pages/Team.js';
import Mission from './components/pages/Mission.js';
import Profile from './components/pages/Profile.js';
import AddPostPage from './components/pages/AddPostPage.js';
import ListingDetail from './components/pages/ListingDetails';
import Login from './components/pages/Login';
import Messaging from './components/pages/Messaging';
import ChangePass from './components/pages/ChangePass'
import DisplayStripe from './components/pages/PaymentInfo'
import EditListing from './components/pages/EditListing.js';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <div className="page-container"> {}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='/mission' element={<Mission />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/add-post' element= {<AddPostPage/>} />
                    <Route path='/listing/:id' element={<ListingDetail />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/messages' element={<Messaging />} />
                    <Route path='/changePassword' element={<ChangePass />}/>
                    <Route path='/stripe' element = {<DisplayStripe />} />
                    <Route path='/edit-listing/:id' element={<EditListing/>} /> 
                </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
