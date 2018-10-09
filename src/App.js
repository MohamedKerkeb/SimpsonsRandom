import React, { Component } from 'react';
//import logo from './logo.svg';
import GenerateSimpsons from './GenerateEmployee';
import DisplaySimpsons from './DisplayEmployee';
import './App.css';

class App extends Component {

  state = {
    simpsons: []
  };

  getSimpsons() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response => response.json())
    .then(data => {this.setState({simpsons: data[0],});
    });
  }

  



  render() {

    console.log(this.state)

    // const sampleEmployee = {
    //   gender: 'male',
    //   name: {
    //       title: 'mr',
    //       first: 'mathys',
    //       last: 'aubert'
    //   },
    //   location: {
    //     street: '9467 rue gasparin',
    //     city: 'perpignan',
    //     postcode: '90208'
    //   },
    //   email: 'mathys.aubert@example.com',
    //   picture: {
    //     medium: 'https://randomuser.me/api/portraits/med/men/66.jpg'
    //   }
    // };
    
    return (
      <div className="App">
          <GenerateSimpsons selectSimpsons={() => this.getSimpsons() }/>
          <DisplaySimpsons simpsons={this.state.simpsons} />
      </div>
    );
  }
}

export default App;
