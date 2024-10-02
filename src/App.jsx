import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NutrientTop } from './components/NutrientTop';
import { NutrientSearch } from './components/NutrientSearch';
import { NutrientDetail } from './components/NutrientDetail';

import './App.css';

export const App = () => {
  return (
    <>
      <Router basename="/nutrient_search">
        <div className="wapper">
          <Routes>
            <Route exact path="/" element = { <NutrientTop /> } />
            <Route exact path="/search" element = { <NutrientSearch /> } />
            <Route exact path="/detail" element = { <NutrientDetail /> } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

