var GameBoard = require('./gameboard.js');
var ScoreBoard = require('./scoreboard.js');
var ScoreCard = require('./scorecard.js');


var MultiPlayer = React.createClass({

  getInitialState: function() {
   return {diceNumber : 1 , playerNumber:0, redDice: 1, redSnake:0, greenSnake: 0, blueSnake: 0, yellowSnake: 0,  redLadder: 0, greenLadder: 0, blueLadder: 0, yellowLadder:0, greenDice: 1, blueDice: 1, yellowDice: 1, diceCountRed: 0, sixCountRed: 0 ,diceCountGreen: 0, sixCountGreen: 0,diceCountBlue: 0, sixCountBlue: 0, diceCountYellow: 0, sixCountYellow: 0};
 },

  getCount: function(val, playerNumber) {
    if((val == 3) || (val == 33) || (val ==  39) || (val ==  58) || (val ==  73) || (val ==  26) || (val ==  28)  ){
      if(playerNumber===1){
        this.setState({redLadder: this.state.redLadder + 1 });
      }else if(playerNumber ===2 ){
        this.setState({greenLadder: this.state.redLadder + 1 });
      }else if(playerNumber ===3 ){
        this.setState({blueLadder: this.state.redLadder + 1 });
      }else if(playerNumber ===4 ){
        this.setState({yellowLadder: this.state.redLadder + 1 });
      }
    }else if((val==98) ||(val== 95)  || (val==46) || (val==89) || (val==65) || (val==53) || (val==30) || (val==32)){
      if(playerNumber===1){
        this.setState({redSnake: this.state.redSnake + 1 });
      }else if(playerNumber ===2 ){
        this.setState({greenSnake: this.state.greenSnake + 1 });
      }else if(playerNumber ===3 ){
        this.setState({blueSnake: this.state.blueSnake + 1 });
      }else if(playerNumber ===4 ){
        this.setState({yellowSnake: this.state.yellowSnake + 1 });
      }
    }
  },

  handleDice: function(diceNumber, playerNumber, sixCount) {
    var tap = new Audio("../sound/tap.mp3");
    tap.play();
    this.setState({playerNumber: playerNumber });
    if(playerNumber === 1){
      this.setState({diceCountRed: this.state.diceCountRed + 1, sixCountRed: sixCount});
      var val =  this.state.redDice + diceNumber + 1;
      this.getCount(val,playerNumber);
      var final = this.setDisplacement(val);
      if(final < 100){
        this.setState({redDice: final});
      }else if ( final === 100){
        alert("Red Wins");
        this.setState({redDice: final});
      }
    }else if( playerNumber === 2){
      this.setState({diceCountGreen: this.state.diceCountGreen + 1, sixCountGreen: sixCount});
      var val =  this.state.greenDice + diceNumber + 1;
      this.getCount(val,playerNumber);
      var final = this.setDisplacement(val);
      if(final < 100) {
        this.setState({greenDice: final});
      }else if ( final === 100){
        alert("Green Wins");
        this.setState({greenDice: final});
      }
    }else if ( playerNumber === 3){
      this.setState({diceCountBlue: this.state.diceCountBlue + 1, sixCountBlue: sixCount});
      var val =  this.state.blueDice + diceNumber + 1;
      this.getCount(val,playerNumber);
      var final = this.setDisplacement(val);
      if(final <100){
          this.setState({blueDice: final });
      }else if ( final === 100){
        alert("Blue Wins");
        this.setState({blueDice: final });
      }
    }else if ( playerNumber === 4 ){
      this.setState({diceCountYellow: this.state.diceCountYellow + 1, sixCountYellow: sixCount});
      var val =  this.state.yellowDice + diceNumber + 1;
      this.getCount(val,playerNumber);
      var final = this.setDisplacement(val);
      if(final <100){
        this.setState({yellowDice: final});
      }else if ( final === 100){
        alert("Yellow Wins");
        this.setState({yellowDice: final});
      }
    }
    var displacement = this.state.diceNumber + diceNumber +1;

  },

  setDisplacement: function(displacement) {
    var finalValue = displacement;
    var ladder = new Audio("../sound/up.mp3");
    var snake = new Audio("../sound/down.mp3");
    if(displacement < 100){
      if(displacement == 3){
         finalValue = 24;
         ladder.play();
      }else if(displacement == 33) {
         finalValue = 87;
         ladder.play();
      }else if(displacement == 39) {
         finalValue = 81;
         ladder.play();
      }else if(displacement == 58) {
         finalValue = 85;
         ladder.play();
      }else if(displacement == 73) {
         finalValue = 92;
         ladder.play();
     }else if(displacement == 98) {
         finalValue = 59;
         snake.play();
     }else if(displacement == 95) {
         finalValue = 26;
         snake.play();
     }else if(displacement == 46) {
         finalValue = 27;
         snake.play();
     }else if(displacement == 89) {
         finalValue = 11;
         snake.play();
     }else if(displacement == 65) {
         finalValue = 4;
         snake.play();
     }else if(displacement == 53) {
         finalValue = 12;
         snake.play();
      }
    }else if(displacement == 100) {
        finalValue = 100;
    }
    return finalValue;
  },

  render: function() {

    var scoreCard = {
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20
    };

    return (
      <div>
          <div>
            <GameBoard redDice={this.state.redDice} greenDice={this.state.greenDice} blueDice={this.state.blueDice} yellowDice={this.state.yellowDice} diceNumber={this.state.diceNumber} playerNumber={this.state.playerNumber}/>
            <ScoreBoard connectBoard={this.handleDice} diceNumber={this.state.diceNumber} handleMenu={this.props.handleMenu}/>
          </div>
          <div>
            <ul id="draggablePanelList" className="col-md-10" style={scoreCard}>
              <h2>Game Statistics</h2>
              <ScoreCard  headerStyle={{"backgroundColor": "red"}} diceCount={this.state.diceCountRed} sixCount={this.state.sixCountRed} ladderCount={this.state.redLadder} snakeCount={this.state.redSnake}/>
              <ScoreCard  headerStyle={{"backgroundColor": "green"}}diceCount={this.state.diceCountGreen} sixCount={this.state.sixCountGreen} ladderCount={this.state.greenLadder} snakeCount={this.state.greenSnake}/>
              <ScoreCard  headerStyle={{"backgroundColor": "blue"}} diceCount={this.state.diceCountBlue} sixCount={this.state.sixCountBlue} ladderCount={this.state.blueLadder} snakeCount={this.state.blueSnake}/>
              <ScoreCard  headerStyle={{"backgroundColor": "yellow"}} diceCount={this.state.diceCountYellow} sixCount={this.state.sixCountYellow} ladderCount={this.state.yellowLadder} snakeCount={this.state.yellowSnake}/>
           </ul>
          </div>
      </div>
    );
  }
});

module.exports = MultiPlayer;
