import React from 'react';
import './App.css';
import SignIn from './screens/SignIn';
import Articles from './screens/Articles';
import ArticleDetails from './screens/ArticleDetails';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:articleId" element={<ArticleDetails />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
