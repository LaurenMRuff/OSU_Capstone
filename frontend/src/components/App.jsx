import React, { useState, useEffect } from "react";
import {
    BrowserRouter, redirect, Route, Routes, useHistory
} from 'react-router-dom';
import {render} from "react-dom";
import NavBar from './NavBar.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import ProfileList from './ProfileList.jsx';
import Profile from './Profile.jsx';
import Search from './Search.jsx';
import Browse from './Browse.jsx';

const App = () => {
  const [pet, setPet] = useState({
    type: 'dog',
    breed: 'poodle',
    age: 'senior',
    disposition: ['Good with children'],
    pic: '',
    dateCreated: '10/26/2012'
  });
  const [pets, setPets] = useState([
    {
      type: 'dog',
      breed: 'poodle',
      age: 'senior',
      disposition: ['Good with children'],
      pic: '',
      dateCreated: '10/26/2012'
    },
    {
      type: 'cat',
      breed: 'domestic shorthair',
      age: 'adult',
      disposition: ['Good with children'],
      pic: '',
      dateCreated: '10/26/2017'
    },
    {
      type: 'other',
      breed: 'turtle',
      age: 'baby',
      disposition: [],
      pic: '',
      dateCreated: '8/26/2022'
    },
    {
      type: 'other',
      breed: 'fish',
      age: 'youth',
      disposition: [],
      pic: '',
      dateCreated: '10/26/2019'
    },
    {
      type: 'dog',
      breed: 'German Shepherd',
      age: 'senior',
      disposition: ['Animal must be leashed at all times', 'Good with other animals'],
      pic: '',
      dateCreated: '10/26/2012'
    },
    {
      type: 'cat',
      breed: 'Mancoon',
      age: 'adult',
      disposition: ['Good with children', 'Good with other animals'],
      pic: '',
      dateCreated: '10/26/2017'
    }
  ]);

  // TO-DO: need to send request to get list of pets, set pets state
  /*
  useEffect() {
    // when server starts, it will send a request to Petfinder API to get all animals and save it into database
    // when component mounts, it will send a request to the server to get 10 at a time for the feed and when someone infinitely scrolls should we keep sending get requests?
      // or should we just get all of the animals when component mounts and save in the state?
  }
  */

  const selectPet = (selectedPet) => {
    // set pet to the selected pet
    setPet(selectedPet);
    // navigate to '/pet/:pet_id
    history.push(`/pet/${selectedPet.id}`);
  }

  /*
  Updates from Lauren:
    I wanted to make sure this would render for you before pushing it.
    ** note about testing: I've noticed that if I update a jsx files and the page renders blank,
                            there's probably an error, but it won't tell you where.

    I updated my react-router-dom to version 6 because I was using a newer version of React
        - requires the BrowserRouter wrapper to render page whenever routes are used which I added here.
        - "component" is also now "element"
        - switch and redirect are deprecated, so I updated/removed as necessary

   */

  return (
      <div>
        <h1> Welcome to the Adoptr Home Page!</h1>
        <NavBar />
        <BrowserRouter>
            <Routes>
                {/* based on documentation for react-router-dom version 6*/}
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/feed" element={<ProfileList pets={pets} selectPet={selectPet} />} />
                <Route path="/pet/*" element={<Profile pet={pet} />} />
                <Route path="/search" element={<Search pets={pets} selectPet={selectPet} />} />
                <Route path="/browse" element={<Browse selectPet={selectPet} />} />

                {/* deprecated so I commented it out  */}
                {/*<Route path="/">*/}
                {/*    <Redirect to="/feed" />*/}
                {/*</Route>*/}

                <Route path="*" element={() => '404 NOT FOUND'} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

// Required to render app page, all other pages can use standard export
const appDiv = document.getElementById("app");
render(<App />, appDiv);