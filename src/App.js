/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';

let playerTurn;

let turnNumber = 0;
let overallWins = 0, overallDraws = 0, overallLosses = 0;
let sessionWins = 0, sessionDraws = 0, sessionLosses = 0;
let overallArray = [];
let outcome = 0; //1 for win 2 for draw 3 for loss

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
        'saveStats': '',
        'outcome': ''
    };
    this.saveStats = this.saveStats.bind(this);
  }

  componentDidMount(){
    // console.clear();
        console.log("%c Thank you for you taking the time to look at my project.  If you would like to see the underlying code you can visit: https://github.com/AlexCassell/TicTacToe", 'background: black; color: white')
    this.loadData();
    let randomNumber = Math.random() * (2 - 1) + 1;
    randomNumber = Math.round(randomNumber);
    if(randomNumber === 1){
      playerTurn = false;
      this.setState({whoseTurn: 
        <div className="sideBar__whoseTurn alexsTurn">
        Alex's Turn
        </div>
      });
      this.AlexTurnOne();
    }
    else{
      playerTurn = true;
      this.setState({whoseTurn: 
        <div className="sideBar__whoseTurn playersTurn">
        Your Turn
        </div>
      });
    }
  }

  handlePlayerTurn(e){
    if(playerTurn){
      playerTurn = false;
      if(e.target.name === "1"){
        if(this.state.slot1 === null){
          this.setState({slot1: "O"});
          setTimeout(this.playerCheckPlayerWon.bind(this), 800);
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "2"){
        if(this.state.slot2 === null){
          this.setState({slot2: "O"});
          setTimeout(this.playerCheckPlayerWon.bind(this), 800);
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "3"){
        if(this.state.slot3 === null){
          this.setState({slot3: "O"});
          setTimeout(this.playerCheckPlayerWon.bind(this), 800);
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "4"){
        if(this.state.slot4 === null){
          this.setState({slot4: "O"});
          setTimeout(this.playerCheckPlayerWon.bind(this), 800);
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "5"){
        if(this.state.slot5 === null){
          this.setState({slot5: "O"});
          setTimeout(this.playerCheckPlayerWon.bind(this), 800);
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "6"){
        if(this.state.slot6 === null){
          this.setState({slot6: "O"});
          setTimeout(this.playerCheckPlayerWon.bind(this), 800);
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "7"){
        if(this.state.slot7 === null){
          this.setState({slot7: "O"});
          setTimeout(this.playerCheckPlayerWon.bind(this), 800);
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "8"){
        if(this.state.slot8 === null){
          this.setState({slot8: "O"});
          setTimeout(this.playerCheckPlayerWon.bind(this), 800);
        }
        else{
          playerTurn = true;
        }
      }
      if(e.target.name === "9"){
        if(this.state.slot9 === null){
          this.setState({slot9: "O"});
          setTimeout(this.playerCheckPlayerWon.bind(this), 800);
        }
        else{
          playerTurn = true;
        }
      }
      turnNumber += 1;
      console.log("turn: " + turnNumber);
      // let everything catch up
    }
  }

  playerCheckPlayerWon(){
    if(this.state.slot1 === "O" && this.state.slot2 === "O" && this.state.slot3 === "O"){
      // console.log("here");
      this.PlayerWins();
    }
    else if(this.state.slot1 === "O" && this.state.slot4 === "O" && this.state.slot7 === "O"){
      // console.log("here");
      this.PlayerWins();
    }
    else if(this.state.slot1 === "O" && this.state.slot5 === "O" && this.state.slot9 === "O"){
      // console.log("here");
      this.PlayerWins();
    }
    else if(this.state.slot2 === "O" && this.state.slot5 === "O" && this.state.slot8 === "O"){
      // console.log("here");
      this.PlayerWins();
    }
    else if(this.state.slot3 === "O" && this.state.slot6 === "O" && this.state.slot9 === "O"){
      // console.log("here");
      this.PlayerWins();
    }
    else if(this.state.slot3 === "O" && this.state.slot5 === "O" && this.state.slot7 === "O"){
      // console.log("here");
      this.PlayerWins();
    }
    else if(this.state.slot4 === "O" && this.state.slot5 === "O" && this.state.slot6 === "O"){
      // console.log("here");
      this.PlayerWins();
    }
    else if(this.state.slot7 === "O" && this.state.slot8 === "O" && this.state.slot9 === "O"){
      // console.log("here");
      this.PlayerWins();
    }
    else{
      this.playerCheckDraw();
      // console.log("here");
    }
  }

  playerCheckDraw(){
    if(this.state.slot1 === null){
      // console.log("here");
      this.handleComputerTurn();
    }
    else if(this.state.slot2 === null){
      // console.log("here");
      this.handleComputerTurn();
    }
    else if(this.state.slot3 === null){
      // console.log("here");
      this.handleComputerTurn();
    }
    else if(this.state.slot4 === null){
      // console.log("here");
      this.handleComputerTurn();
    }
    else if(this.state.slot5 === null){
      // console.log("here");
      this.handleComputerTurn();
    }
    else if(this.state.slot6 === null){
      // console.log("here");
      this.handleComputerTurn();
    }
    else if(this.state.slot7 === null){
      // console.log("here");
      this.handleComputerTurn();
    }
    else if(this.state.slot8 === null){
      // console.log("here");
      this.handleComputerTurn();
    }
    else if(this.state.slot9 === null){
      // console.log("here");
      this.handleComputerTurn();
    }
    else{
      // console.log("Draw of sure");
      outcome = 2;
      this.saveStats();
      outcome = 0;
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

  handleComputerTurn(){
    // console.log("here");
    this.setState({whoseTurn: 
      <div className="sideBar__whoseTurn alexsTurn">
      Alex's Turn
      </div>
    });
    //delayed so that Alex's turn is shown
    if(turnNumber <= 1){
      // console.log("here");
      setTimeout(this.AlexTurnOne.bind(this), 500);
    }
    else if(turnNumber === 2){
      // console.log("here");
      setTimeout(this.AlexTurnTwo.bind(this), 500);
    }
    else{
      // console.log("here");
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
    // console.log(turnNumber);
    if(turnNumber === 0){
      this.alexTurnOneZero();
    }
    else{
      if(this.state.slot1 === "O"){
        this.setState({slot2: "X"});
      }
      else if(this.state.slot2 === "O"){
        this.alexTurnOneZero();
      }
      else if(this.state.slot3 === "O"){
        this.setState({slot2: "X"});
      }
      else if(this.state.slot4 === "O"){
        this.setState({slot5: "X"});
      }
      else if(this.state.slot5 === "O"){
        this.alexTurnOneZero();
      }
      else if(this.state.slot6 === "O"){
        this.setState({slot5: "X"});
      }
      else if(this.state.slot7 === "O"){
        this.setState({slot8: "X"});
      }
      else if(this.state.slot8 === "O"){
        this.alexTurnOneZero();
      }
      else if(this.state.slot9 === "O"){
        this.setState({slot8: "X"});
      }
      turnNumber += 1;
      this.playersTurn();
    }
  }

  alexTurnOneZero(){
    let randomNumber = Math.random() * (4 - 1) + 1;
    randomNumber = Math.round(randomNumber);
    // console.log(randomNumber);
    if(randomNumber === 1 && this.state.slot1 === null){
      // console.log("here");
      this.setState({slot1: "X"});
      turnNumber += 1;
      this.playersTurn();
    }
    else if(randomNumber === 2 && this.state.slot3 === null){
      // console.log("here");
      this.setState({slot3: "X"});
      turnNumber += 1;
      this.playersTurn();
    }
    else if(randomNumber === 3 && this.state.slot7 === null){
      // console.log("here");
      this.setState({slot7: "X"});
      turnNumber += 1;
      this.playersTurn();
    }
    else if(randomNumber === 4 && this.state.slot9 === null){
      // console.log("here");
      this.setState({slot9: "X"});
      turnNumber += 1;
      this.playersTurn();
    }
    else{
      // console.log("here");
      this.alexTurnOneZero();
    }
  }

  AlexTurnTwo(){
    if(this.state.slot1 === "X" && this.state.slot9 === "O" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      // console.log("here");
      this.playersTurn();
    }
    else if(this.state.slot3 === "X" && this.state.slot7 === "O" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      // console.log("here");
      this.playersTurn();
    }
    else if(this.state.slot7 === "X" && this.state.slot3 === "O" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      // console.log("here");
      this.playersTurn();
    }
    else if(this.state.slot9 === "X" && this.state.slot1 === "O" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      // console.log("here");
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
    // console.log("here");
    if(this.state.slot1 === "X" && this.state.slot9 === "X" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot1 === "X" && this.state.slot4 === "X" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot1 === "X" && this.state.slot5 === "X" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot1 === "X" && this.state.slot2 === "X" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot1 === "X" && this.state.slot7 === "X" && this.state.slot4 === null){
      this.setState({slot4: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot1 === "X" && this.state.slot3 === "X" && this.state.slot2 === null){
      this.setState({slot2: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot2 === "X" && this.state.slot3 === "X" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot2 === "X" && this.state.slot5 === "X" && this.state.slot8 === null){
      this.setState({slot8: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot2 === "X" && this.state.slot8 === "X" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot3 === "X" && this.state.slot5 === "X" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot3 === "X" && this.state.slot6 === "X" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot3 === "X" && this.state.slot7 === "X" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot3 === "X" && this.state.slot9 === "X" && this.state.slot6 === null){
      this.setState({slot6: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot4 === "X" && this.state.slot5 === "X" && this.state.slot6 === null){
      this.setState({slot6: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot4 === "X" && this.state.slot6 === "X" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot4 === "X" && this.state.slot7 === "X" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot5 === "X" && this.state.slot6 === "X" && this.state.slot4 === null){
      this.setState({slot4: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot5 === "X" && this.state.slot7 === "X" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot5 === "X" && this.state.slot8 === "X" && this.state.slot2 === null){
      this.setState({slot2: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot5 === "X" && this.state.slot9 === "X" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot6 === "X" && this.state.slot9 === "X" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot7 === "X" && this.state.slot8 === "X" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot7 === "X" && this.state.slot9 === "X" && this.state.slot8 === null){
      this.setState({slot8: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else if(this.state.slot8 === "X" && this.state.slot9 === "X" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      // console.log("here");
      this.AlexWins();
    }
    else{
      // console.log("here");
      this.PlayerNextTurnWinPossibleCheck();
    }
  }

  PlayerNextTurnWinPossibleCheck(){
    if(this.state.slot1 === "O" && this.state.slot9 === "O" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "O" && this.state.slot4 === "O" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "O" && this.state.slot5 === "O" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "O" && this.state.slot2 === "O" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "O" && this.state.slot7 === "O" && this.state.slot4 === null){
      this.setState({slot4: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "O" && this.state.slot3 === "O" && this.state.slot2 === null){
      this.setState({slot2: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot2 === "O" && this.state.slot3 === "O" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot2 === "O" && this.state.slot5 === "O" && this.state.slot8 === null){
      this.setState({slot8: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot2 === "O" && this.state.slot8 === "O" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot3 === "O" && this.state.slot5 === "O" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot3 === "O" && this.state.slot6 === "O" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot3 === "O" && this.state.slot7 === "O" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot3 === "O" && this.state.slot9 === "O" && this.state.slot6 === null){
      this.setState({slot6: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot4 === "O" && this.state.slot5 === "O" && this.state.slot6 === null){
      this.setState({slot6: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot4 === "O" && this.state.slot6 === "O" && this.state.slot5 === null){
      this.setState({slot5: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot4 === "O" && this.state.slot7 === "O" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot5 === "O" && this.state.slot6 === "O" && this.state.slot4 === null){
      this.setState({slot4: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot5 === "O" && this.state.slot7 === "O" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot5 === "O" && this.state.slot8 === "O" && this.state.slot2 === null){
      this.setState({slot2: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot5 === "O" && this.state.slot9 === "O" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot6 === "O" && this.state.slot9 === "O" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot7 === "O" && this.state.slot8 === "O" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot7 === "O" && this.state.slot9 === "O" && this.state.slot8 === null){
      this.setState({slot8: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot8 === "O" && this.state.slot9 === "O" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else{
      // console.log("here");
      this.AlexSetUpWin();
    }
  }

  AlexSetUpWin(){
    // console.log("here");
    if(this.state.slot1 === "X" && this.state.slot7 !== "O" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "X" && this.state.slot9 !== "O" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "X" && this.state.slot3 !== "O" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot1 === "X" && this.state.slot3 !== "O" && this.state.slot9 === null){
      this.setState({slot9: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot3 === "X" && this.state.slot9 !== "O" && this.state.slot7 === null){
      this.setState({slot7: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot7 === "X" && this.state.slot9 !== "O" && this.state.slot3 === null){
      this.setState({slot3: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else if(this.state.slot9 === "X" && this.state.slot3 !== "O" && this.state.slot1 === null){
      this.setState({slot1: "X"});
      // console.log("here");
      this.CheckPlayerWon();
    }
    else{
      // console.log("here");
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
    if(this.state.slot1 === null){
      this.setState({slot1: "X"});
      // console.log("here");
      this.checkDraw();
    }
    else if(this.state.slot2 === null){
      this.setState({slot2: "X"});
      // console.log("here");
      this.checkDraw();
    }
    else if(this.state.slot3 === null){
      this.setState({slot3: "X"});
      // console.log("here");
      this.checkDraw();
    }
    else if(this.state.slot4 === null){
      this.setState({slot4: "X"});
      // console.log("here");
      this.checkDraw();
    }
    else if(this.state.slot5 === null){
      this.setState({slot5: "X"});
      // console.log("here");
      this.checkDraw();
    }
    else if(this.state.slot6 === null){
      this.setState({slot6: "X"});
      // console.log("here");
      this.checkDraw();
    }
    else if(this.state.slot7 === null){
      this.setState({slot7: "X"});
      // console.log("here");
      this.checkDraw();
    }
    else if(this.state.slot8 === null){
      this.setState({slot8: "X"});
      // console.log("here");
      this.checkDraw();
    }
    else if(this.state.slot9 === null){
      this.setState({slot9: "X"});
      // console.log("here");
      this.checkDraw();
    }
    else{
      // console.log("here");
      this.checkDraw();
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
      // console.log("Draw of sure");
      outcome = 2;
      this.saveStats();
      outcome = 0;
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
    // console.log("Alex Won");
    outcome = 1;
    this.saveStats();
    outcome = 0;
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
    // console.log("Player Won");
    outcome = 3;
    this.saveStats();
    outcome = 0;
    sessionLosses += 1;
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
    turnNumber = 0;
    this.componentDidMount();
  }

  //firebase code below
  saveStats(){
    this.setState({saveStats: ''});  const vsAlexRef = firebase.database().ref('vsAlex');
    const item = {
        'outcome': outcome
    }
    vsAlexRef.push(item);
}

loadData(){
  overallArray = [];
  let query = firebase.database().ref("vsAlex").orderByKey();
  query.once("value")
  .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          for (let [key, value] of Object.entries(childData)) {
            overallArray.push(value);
            // console.log(overallArray);
          }
      });
  });
  setTimeout(this.showLoadedData.bind(this), 1000);
}

  showLoadedData(){
    overallDraws = 0;
    overallLosses = 0;
    overallWins = 0;
    for(let i = 0; i < overallArray.length; i++){
        if(overallArray[i] === 1){
          overallWins += 1;
        }
        else if(overallArray[i] === 2){
          overallDraws += 1;
        }
        else if(overallArray[i] === 3){
          overallLosses += 1;
        }
  }
  this.setState({overallDraws: overallDraws});
  this.setState({overallLosses: overallLosses});
  this.setState({overallWins:overallWins});
}




  render() {
    return (
      <div className="App">
        {this.state.gameover}
        <div className="title">
          Tic Tac Toe
        </div>
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
