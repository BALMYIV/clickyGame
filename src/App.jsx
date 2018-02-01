
import React from 'react';
import Nav from './components/navbar';
import Card from './components/card';
import bozos from './idiots.json';
import './App.css';

const shuffle = require('shuffle-array');

class App extends React.Component {

  state = {
    bozos,
    navStatus: 'don\'t pick the same clown twice',
    score: 0,
    highScore: 0,
    pickedCards: []
  };

  onCardClick = (id, name) => {

    if (this.state.pickedCards.indexOf(id) === -1) {

        const pickedCards = this.state.pickedCards;
        pickedCards.push(id);

        this.setState({ navStatus: 'smart pick' });
        this.setState({ pickedCards: pickedCards });

        if (this.state.highScore <= this.state.score) {

            this.setState({ score: this.state.score + 1 });
            this.setState({ highScore: this.state.highScore + 1 });
        } 
        else {

            this.setState({ score: this.state.score + 1 });
        }
    } 
    else {

      this.setState({ score: 0 });
      this.setState({ navStatus: name+' cucked you!'   });
      this.setState({ pickedCards: [] });
    }
  };

  render() {

    return (

      <container fluid>
        <Nav
          navStatus={this.state.navStatus}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <div className="main">
          <div className="row">
            <div className="col-11 col-med-10 offset-md-1 ">
              {shuffle(
                this.state.bozos.map(bozo => (

                  <Card
                    key={bozo.id}
                    id={bozo.id}
                    onCardClick={this.onCardClick}
                    name={bozo.name}
                    image={bozo.image}
                    subtitle={this.state.navStatus}
                    score={this.state.score}
                    highScore={this.state.highScore}
                  />
                ))
              )}
            </div> 
          </div>
        </div>
      </container>
    );
  }
}

export default App;
