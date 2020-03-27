import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import FaceRecognition from './Components/FaceRegconition/FaceRegconition';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
}

export default App;
