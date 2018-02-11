import React, { Component } from 'react';

import './App.css';

let playerTurn = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        'slot1': null,
        'slot2': null,
        'slot3': null,
        'slot4': null,
        'slot5': null,
        'slot6': null,
        'slot7': null,
        'slot8': null,
        'slot9': null
    };
  }

  // componentDidMount(){
  //   this.setState({slot1:null});  
  // }

  handlePlayerTurn(e){
    if(playerTurn){
      playerTurn = false;

      if(e.target.name === "1"){
        if(this.state.slot1 === null){
          this.setState({slot1: "O"});
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "2"){
        if(this.state.slot2 === null){
          this.setState({slot2: "O"});
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "3"){
        if(this.state.slot3 === null){
          this.setState({slot3: "O"});
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "3"){
        if(this.state.slot3 === null){
          this.setState({slot3: "O"});
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "4"){
        if(this.state.slot4 === null){
          this.setState({slot4: "O"});
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "5"){
        if(this.state.slot5 === null){
          this.setState({slot5: "O"});
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "6"){
        if(this.state.slot6 === null){
          this.setState({slot6: "O"});
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "7"){
        if(this.state.slot7 === null){
          this.setState({slot7: "O"});
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "8"){
        if(this.state.slot8 === null){
          this.setState({slot8: "O"});
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "9"){
        if(this.state.slot9 === null){
          this.setState({slot9: "O"});
        }
        else{
          playerTurn = true;
        }
      }
    }
  }




  render() {
    return (
      <div className="App">
        <div className="title">
          Tic Tac Toe
        </div>
        <div className="sideBar">
        </div>
        <div className="gameWrapper">
          {/* row 1 */}
          <button className="gameSquares" name="1" onClick={(e) => this.handlePlayerTurn(e)}>
            {this.state.slot1}
          </button>
          <button className="gameSquares" name="2" onClick={(e) => this.handlePlayerTurn(e)}>
            {this.state.slot2}
          </button>
          <button className="gameSquares" name="3" onClick={(e) => this.handlePlayerTurn(e)}>
            {this.state.slot3}
          </button>
          {/* row 2 */}
          <button className="gameSquares" name="4" onClick={(e) => this.handlePlayerTurn(e)}>
            {this.state.slot4}
          </button>
          <button className="gameSquares" name="5" onClick={(e) => this.handlePlayerTurn(e)}>
            {this.state.slot5}
          </button>
          <button className="gameSquares" name="6" onClick={(e) => this.handlePlayerTurn(e)}>
            {this.state.slot6}
          </button>
          {/* row 3 */}
          <button className="gameSquares" name="7" onClick={(e) => this.handlePlayerTurn(e)}>
            {this.state.slot7}
          </button>
          <button className="gameSquares" name="8" onClick={(e) => this.handlePlayerTurn(e)}>
            {this.state.slot8}
          </button>
          <button className="gameSquares" name="9" onClick={(e) => this.handlePlayerTurn(e)}>
            {this.state.slot9}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
