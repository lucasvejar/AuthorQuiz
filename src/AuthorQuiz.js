import React from 'react';
import './App.css';
import Hero from './components/hero/hero';
import Turn from './components/turn/turn';
import Continue from './components/continue/continue';
import Footer from './components/footer/footer';
import { Link } from 'react-router-dom';


function AuthorQuiz({turnData, highlight, onAnswerSelected, onContinue}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
      <Continue show={highlight === 'correct'} onContinue={onContinue} />
      <p><Link to="/add" >Add an author</Link></p>
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
