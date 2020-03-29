import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import FaceRecognition from './Components/FaceRegconition/FaceRegconition';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';


function App() {

  return (
    <div className="App">
      <Particles 
        className="praticles" 
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#fff",
                blur: 10
              }
            }
          }
        }
        }  
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
}

export default App;
