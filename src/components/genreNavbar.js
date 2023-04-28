import React, { useState, useRef } from 'react';
import './styles/genreNavbar.css';
import businessImg from '../assets/business.png';
import economicsImg from '../assets/economics.png';
import enviImg from '../assets/environment.png';
import politicsImg from '../assets/politics.png';
import techImg from '../assets/technology.png';
import worldImg from '../assets/world.png';

const GenreNavbar = ({title}) => {

  const GenreCard = ({ image, genre }) => (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <p className="card-text">{genre}</p>
    </div>
  );

  return (
    <>
      <div className="genre-text-box">
        <h1 className="genre-title">{title}</h1>
        <h2 className="genre-edit">Edit</h2>
      </div>

      <div className="scrolling-wrapper" >
        <GenreCard image={businessImg} genre="Business" />
        <GenreCard image={economicsImg} genre="Economics" />
        <GenreCard image={techImg} genre="Technology" />
        <GenreCard image={enviImg} genre="Environment" />
        <GenreCard image={politicsImg} genre="Politics" />
        <GenreCard image={worldImg} genre="World" />
      </div>
    </>
  );
};

export default GenreNavbar;
