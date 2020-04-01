import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import FaceRecognition from './Components/FaceRegconition/FaceRegconition';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: 'ca98921915544a3da2f8edafcc57a7a8'
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (respo) => {
    const clarifaiFace = respo.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }


  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
    Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      response => {this.displayFaceBox(this.calculateFaceLocation(response));
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);})
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({isSignedIn : false});
    } else if (route === 'home') {
      this.setState({isSignedIn : true});
    }
      this.setState({route: route});
  
  }

render(){
  const {isSignedIn, imageUrl, route, box} = this.state;
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
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
       
        {
          route === 'home' ?
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition box={box} imageUrl={imageUrl}/>
          </div>
          :
          (
            route === 'signin' ?
            <Signin onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange} />
          )
        }
        
      </div>
    );
  }

}

export default App;
