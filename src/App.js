import React from 'react';
import './App.css';
import SignIn from './screens/SignIn';
import Articles from './screens/Articles';
import Dashboard from './screens/Dashboard';
import ArticleDetails from './screens/ArticleDetails';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
require('typeface-abril-fatface')
require('typeface-inter')

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:articleId" element={<ArticleDetails />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
