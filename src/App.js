/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';

let playerTurn = false;

let turnNumber = 1;
let overallWins = 0, overallDraws = 0, overallLosses = 0;
let sessionWins = 0, sessionDraws = 0, sessionLosses = 0;
let overallArray = [];

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
        'slot9': null,
        'whoseTurn': '',
        'overallWins': 0,
        'overallDraws': 0,
        'overallLosses': 0,
        'sessionWins': 0,
        'sessionDraws': 0,
        'sessionLosses': 0,
        'gameOver': '',
        'saveStats': ''
    };
    this.saveStats = this.saveStats.bind(this);
  }

  componentDidMount(){
    this.loadData();
    this.setState({whoseTurn: 
      <div className="sideBar__whoseTurn alexsTurn">
      Alex's Turn
      </div>
    });
    this.AlexTurnOne();
  }

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
      turnNumber += 1;
      // console.log(turnNumber);
      // let everything catch up
      setTimeout(this.handleComputerTurn.bind(this), 500);
    }
  }

  handleComputerTurn(){
    this.setState({whoseTurn: 
      <div className="sideBar__whoseTurn alexsTurn">
      Alex's Turn
      </div>
    });
    //delayed so that Alex's turn is shown
    if(turnNumber === 1){
      setTimeout(this.AlexTurnOne.bind(this), 500);
    }
    else if(turnNumber === 2){
      setTimeout(this.AlexTurnTwo.bind(this), 500);
    }
    else{
      setTimeout(this.AlexTurnThreeAbove.bind(this), 500);
    }
    // console.log(turnNumber);
  }

  playersTurn(){
    playerTurn = true;
    this.setState({whoseTurn: 
      <div className="sideBar__whoseTurn playersTurn">
      Your Turn
      </div>
    });
  }

  AlexTurnOne(){
    let randomNumber = Math.random() * (4 - 1) + 1;
    randomNumber = Math.round(randomNumber);
    // console.log(randomNumber);
    if(randomNumber === 1){
      this.setState({slot1: "X"});
    }
    else if(randomNumber === 2){
      this.setState({slot3: "X"});
    }
    else if(randomNumber === 3){
      this.setState({slot7: "X"});
    }
    else if(randomNumber === 4){
      this.setState({slot9: "X"});
    }
    this.playersTurn();
  }

  AlexTurnTwo(){
    if(this.state.slot1 === "X" && this.state.slot9 === "O"){
      this.setState({slot3: "X"});
      console.log("here");
      this.playersTurn();
    }
    else if(this.state.slot3 === "X" && this.state.slot7 === "O"){
      this.setState({slot1: "X"});
      console.log("here");
      this.playersTurn();
    }
    else if(this.state.slot7 === "X" && this.state.slot3 === "O"){
      this.setState({slot1: "X"});
      console.log("here");
      this.playersTurn();
    }
    else if(this.state.slot9 === "X" && this.state.slot1 === "O"){
      this.setState({slot3: "X"});
      console.log("here");
      this.playersTurn();
    }
    else{
      this.AlexTurnThreeAbove();
    }
}

  AlexTurnThreeAbove(){
    this.AlexAbleWinCheck();
  }

  CheckPlayerWon(){
    if(this.state.slot1 === "O" && this.state.slot2 === "O" && this.state.slot3 === "O"){
      this.PlayerWins();
    }
    else if(this.state.slot1 === "O" && this.state.slot4 === "O" && this.state.slot7 === "O"){
      this.PlayerWins();
    }
    else if(this.state.slot1 === "O" && this.state.slot5 === "O" && this.state.slot9 === "O"){
      this.PlayerWins();
    }
    else if(this.state.slot2 === "O" && this.state.slot5 === "O" && this.state.slot8 === "O"){
      this.PlayerWins();
    }
    else if(this.state.slot3 === "O" && this.state.slot6 === "O" && this.state.slot9 === "O"){
      this.PlayerWins();
    }
    else if(this.state.slot3 === "O" && this.state.slot5 === "O" && this.state.slot7 === "O"){
      this.PlayerWins();
    }
    else if(this.state.slot4 === "O" && this.state.slot5 === "O" && this.state.slot6 === "O"){
      this.PlayerWins();
    }
    else if(this.state.slot7 === "O" && this.state.slot8 === "O" && this.state.slot9 === "O"){
      this.PlayerWins();
    }
    else{
      this.checkDraw();
    }
  }


  AlexAbleWinCheck(){
    console.log("here");
    if(this.state.slot1 === "X" && this.state.slot9 === "X" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot1 === "X" && this.state.slot4 === "X" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot1 === "X" && this.state.slot5 === "X" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot1 === "X" && this.state.slot2 === "X" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot1 === "X" && this.state.slot7 === "X" && this.state.slot4 === null){
      this.setState({slot4: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot1 === "X" && this.state.slot3 === "X" && this.state.slot2 === null){
      this.setState({slot2: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot2 === "X" && this.state.slot3 === "X" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot2 === "X" && this.state.slot5 === "X" && this.state.slot8 === null){
      this.setState({slot8: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot2 === "X" && this.state.slot8 === "X" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot3 === "X" && this.state.slot5 === "X" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot3 === "X" && this.state.slot6 === "X" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot3 === "X" && this.state.slot7 === "X" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot3 === "X" && this.state.slot9 === "X" && this.state.slot6 === null){
      this.setState({slot6: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot4 === "X" && this.state.slot5 === "X" && this.state.slot6 === null){
      this.setState({slot6: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot4 === "X" && this.state.slot6 === "X" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot4 === "X" && this.state.slot7 === "X" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot5 === "X" && this.state.slot6 === "X" && this.state.slot4 === null){
      this.setState({slot4: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot5 === "X" && this.state.slot7 === "X" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot5 === "X" && this.state.slot8 === "X" && this.state.slot2 === null){
      this.setState({slot2: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot5 === "X" && this.state.slot9 === "X" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot6 === "X" && this.state.slot9 === "X" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot7 === "X" && this.state.slot8 === "X" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot7 === "X" && this.state.slot9 === "X" && this.state.slot8 === null){
      this.setState({slot8: "X"});
      console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot8 === "X" && this.state.slot9 === "X" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      console.log("here");
      this.AlexWins();
    }
    else{
      console.log("here");
      this.PlayerNextTurnWinPossibleCheck();
    }
  }

  PlayerNextTurnWinPossibleCheck(){
    if(this.state.slot1 === "O" && this.state.slot9 === "O" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "O" && this.state.slot4 === "O" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "O" && this.state.slot5 === "O" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "O" && this.state.slot2 === "O" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "O" && this.state.slot7 === "O" && this.state.slot4 === null){
      this.setState({slot4: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "O" && this.state.slot3 === "O" && this.state.slot2 === null){
      this.setState({slot2: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot2 === "O" && this.state.slot3 === "O" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot2 === "O" && this.state.slot5 === "O" && this.state.slot8 === null){
      this.setState({slot8: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot2 === "O" && this.state.slot8 === "O" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot3 === "O" && this.state.slot5 === "O" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot3 === "O" && this.state.slot6 === "O" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot3 === "O" && this.state.slot7 === "O" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot3 === "O" && this.state.slot9 === "O" && this.state.slot6 === null){
      this.setState({slot6: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot4 === "O" && this.state.slot5 === "O" && this.state.slot6 === null){
      this.setState({slot6: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot4 === "O" && this.state.slot6 === "O" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot4 === "O" && this.state.slot7 === "O" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot5 === "O" && this.state.slot6 === "O" && this.state.slot4 === null){
      this.setState({slot4: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot5 === "O" && this.state.slot7 === "O" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot5 === "O" && this.state.slot8 === "O" && this.state.slot2 === null){
      this.setState({slot2: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot5 === "O" && this.state.slot9 === "O" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot6 === "O" && this.state.slot9 === "O" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot7 === "O" && this.state.slot8 === "O" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot7 === "O" && this.state.slot9 === "O" && this.state.slot8 === null){
      this.setState({slot8: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot8 === "O" && this.state.slot9 === "O" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else{
      console.log("here");
      this.AlexSetUpWin();
    }
  }

  AlexSetUpWin(){
    console.log("here");
    if(this.state.slot1 === "X" && this.state.slot7 !== "O" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "X" && this.state.slot9 !== "O" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "X" && this.state.slot3 !== "O" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "X" && this.state.slot3 !== "O" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot3 === "X" && this.state.slot9 !== "O" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot7 === "X" && this.state.slot9 !== "O" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot9 === "X" && this.state.slot3 !== "O" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      console.log("here");
      this.CheckPlayerWon();
    }
    else{
      console.log("here");
      this.DoubleUp();
    }
  }

  DoubleUp(){
    // this.showDrawButton();
    if(this.state.slot1 === "X" && this.state.slot2 === null && this.state.slot3 === null){
      this.setState({slot2: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot2 === "X" && this.state.slot3 === null && this.state.slot1 === null){
      this.setState({slot1: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot3 === "X" && this.state.slot2 === null && this.state.slot1 === null){
      this.setState({slot2: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "X" && this.state.slot4 === null && this.state.slot7 === null){
      this.setState({slot4: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot4 === "X" && this.state.slot1 === null && this.state.slot7 === null){
      this.setState({slot1: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot7 === "X" && this.state.slot1 === null && this.state.slot4 === null){
      this.setState({slot4: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "X" && this.state.slot5 === null && this.state.slot9 === null){
      this.setState({slot5: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot5 === "X" && this.state.slot1 === null && this.state.slot9 === null){
      this.setState({slot1: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot9 === "X" && this.state.slot1 === null && this.state.slot5 === null){
      this.setState({slot5: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot2 === "X" && this.state.slot5 === null && this.state.slot8 === null){
      this.setState({slot5: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot5 === "X" && this.state.slot2 === null && this.state.slot8 === null){
      this.setState({slot2: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot8 === "X" && this.state.slot2 === null && this.state.slot5 === null){
      this.setState({slot5: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot3 === "X" && this.state.slot6 === null && this.state.slot9 === null){
      this.setState({slot6: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot6 === "X" && this.state.slot3 === null && this.state.slot9 === null){
      this.setState({slot3: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot9 === "X" && this.state.slot6 === null && this.state.slot3 === null){
      this.setState({slot6: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot3 === "X" && this.state.slot5 === null && this.state.slot7 === null){
      this.setState({slot5: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot5 === "X" && this.state.slot3 === null && this.state.slot7 === null){
      this.setState({slot3: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot7 === "X" && this.state.slot5 === null && this.state.slot3 === null){
      this.setState({slot5: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot4 === "X" && this.state.slot5 === null && this.state.slot6 === null){
      this.setState({slot5: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot5 === "X" && this.state.slot4 === null && this.state.slot6 === null){
      this.setState({slot4: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot6 === "X" && this.state.slot5 === null && this.state.slot4 === null){
      this.setState({slot5: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot7 === "X" && this.state.slot8 === null && this.state.slot9 === null){
      this.setState({slot8: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot8 === "X" && this.state.slot7 === null && this.state.slot9 === null){
      this.setState({slot7: "X"});
      this.CheckPlayerWon();
    }
    else if(this.state.slot9 === "X" && this.state.slot8 === null && this.state.slot7 === null){
      this.setState({slot7: "X"});
      this.playersTurn();
    }
    else{
      this.RandomChoice();
    }
  }

  RandomChoice(){
    let randomNumber = Math.random() * (9 - 1) + 1;
    randomNumber = Math.round(randomNumber);
    // console.log(randomNumber);
    if(randomNumber === 1 && this.state.slot1 === null){
      this.setState({slot1: "X"});
      console.log("here");
      this.checkDraw();
    }
    else if(randomNumber === 2 && this.state.slot2 === null){
      this.setState({slot2: "X"});
      console.log("here");
      this.checkDraw();
    }
    else if(randomNumber === 3 && this.state.slot3 === null){
      this.setState({slot3: "X"});
      console.log("here");
      this.checkDraw();
    }
    else if(randomNumber === 4 && this.state.slot4 === null){
      this.setState({slot4: "X"});
      console.log("here");
      this.checkDraw();
    }
    else if(randomNumber === 5 && this.state.slot5 === null){
      this.setState({slot5: "X"});
      console.log("here");
      this.checkDraw();
    }
    else if(randomNumber === 6 && this.state.slot6 === null){
      this.setState({slot6: "X"});
      console.log("here");
      this.checkDraw();
    }
    else if(randomNumber === 7 && this.state.slot7 === null){
      this.setState({slot7: "X"});
      console.log("here");
      this.checkDraw();
    }
    else if(randomNumber === 8 && this.state.slot8 === null){
      this.setState({slot8: "X"});
      console.log("here");
      this.checkDraw();
    }
    else if(randomNumber === 9 && this.state.slot9 === null){
      this.setState({slot9: "X"});
      console.log("here");
      this.checkDraw();
    }
    else{
      console.log("here");
      this.RandomChoice();
    }
  }

  // showDrawButton(){
  //   console.log("Probably a draw");
  // }

  checkDraw(){
    if(this.state.slot1 === null){
      this.playersTurn();
    }
    else if(this.state.slot2 === null){
      this.playersTurn();
    }
    else if(this.state.slot3 === null){
      this.playersTurn();
    }
    else if(this.state.slot4 === null){
      this.playersTurn();
    }
    else if(this.state.slot5 === null){
      this.playersTurn();
    }
    else if(this.state.slot6 === null){
      this.playersTurn();
    }
    else if(this.state.slot7 === null){
      this.playersTurn();
    }
    else if(this.state.slot8 === null){
      this.playersTurn();
    }
    else if(this.state.slot9 === null){
      this.playersTurn();
    }
    else{
      console.log("Draw of sure");
      overallDraws += 1;
      sessionDraws += 1;
      this.setState({overallDraws: overallDraws});
      this.setState({sessionDraws: sessionDraws});
      this.setState({gameover:
        <button className="gameOver alexWin">
          Draw!!
        </button>
        })
        setTimeout(this.ResetGame.bind(this), 5000);
    }
  }

  AlexWins(){
    console.log("Alex Won");
    overallWins += 1;
    sessionWins += 1;
    this.setState({overallWins: overallWins});
    this.setState({sessionWins: sessionWins});
    this.setState({gameover:
      <button className="gameOver alexWin">
        Alex Wins!!
      </button>
      })
      setTimeout(this.ResetGame.bind(this), 5000);
  }

  PlayerWins(){
    console.log("Player Won");
    this.setState({overallLosses: overallLosses});
    this.setState({sessionLosses: sessionLosses});
    this.setState({gameover:
      <button className="gameOver playerWin">
        You Won!!
      </button>
      })
      setTimeout(this.ResetGame.bind(this), 5000);
  }

  ResetGame(){
    this.saveStats();
    this.setState({
      gameover:'',
      slot1: null,
      slot2: null,
      slot3: null,
      slot4: null,
      slot5: null,
      slot6: null,
      slot7: null,
      slot8: null,
      slot9: null,
      whoseTurn:''
    });
    turnNumber = 1;
    this.componentDidMount();
  }

  //firebase code below
  saveStats(){
    // console.log("saved");
    this.setState({saveStats: ''});  const ticTacToeRef = firebase.database().ref('tictactoe');
    const item = {
        'overallWins': overallWins,
        'overallDraws': overallDraws,
        'overallLosses': overallLosses
    }
    ticTacToeRef.push(item);
}

loadData(){
  let query = firebase.database().ref("tictactoe").orderByKey();
  query.once("value")
  .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          // console.log(key);
          // console.log(childData);
          for (const [key, value] of Object.entries(childData)) {
            overallArray.push(value);
            console.log(overallArray);
          }
      });
  });
  setTimeout(this.showLoadedData.bind(this), 500);
}
  //create loop that adds all save together.. tomorrow.. it is last af
  showLoadedData(){
    this.setState({overallDraws: overallArray[0]});
    this.setState({overallLosses: overallArray[1]});
    this.setState({overallWins: overallArray[2]});
    console.log(this.state.overallDraws);
  }




  render() {
    return (
      <div className="App">
        {this.state.gameover}
        <div className="title">
          Tic Tac Toe
        </div>
        <div className="sideBar">
          {this.state.whoseTurn}
          <div className="sideBar__ScoreWrapper sideBar__ScoreWrapper__session">
            <div className="sideBar__ScoreWrapper__title">
              Session Statistics
            </div>
            <div className="sideBar__ScoreWrapper__split">
              <div className="sideBar__ScoreWrapper__alex">
                Wins:
              </div>
              <div className="sideBar__ScoreWrapper__alex">
                Draws:
              </div>
              <div className="sideBar__ScoreWrapper__losses">
                Losses:
              </div>
            </div>
            <div className="sideBar__ScoreWrapper__splitOutside">
            <div className="sideBar__ScoreWrapper__alex">
                {this.state.sessionWins}
              </div>
              <div className="sideBar__ScoreWrapper__alex">
                {this.state.sessionDraws}
              </div>
              <div className="sideBar__ScoreWrapper__losses">
                {this.state.sessionLosses}
              </div>
            </div>
          </div>
          <div className="sideBar__ScoreWrapper sideBar__ScoreWrapper__overall">
            <div className="sideBar__ScoreWrapper__title">
              Overall Statistics
            </div>
            <div className="sideBar__ScoreWrapper__split">
              <div className="sideBar__ScoreWrapper__alex">
                Wins:
              </div>
              <div className="sideBar__ScoreWrapper__alex">
                Draws:
              </div>
              <div className="sideBar__ScoreWrapper__losses">
                Losses:
              </div>
            </div>
            <div className="sideBar__ScoreWrapper__splitOutside">
            <div className="sideBar__ScoreWrapper__alex">
                {this.state.overallWins}
              </div>
              <div className="sideBar__ScoreWrapper__alex">
                {this.state.overallDraws}
              </div>
              <div className="sideBar__ScoreWrapper__losses">
                {this.state.overallLosses}
              </div>
            </div>
          </div>
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
