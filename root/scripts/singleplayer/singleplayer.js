
var message1 = 'Testing';
var GameBoard = require('./gameboard.js');
var ScoreBoard = require('./scoreboard.js');
var ScoreCard = require('./scorecard.js');


var SinglePlayer = React.createClass({

  getInitialState: function() {
   return {diceNumber : 1 , redDice: 1, ladderCount: 0, snakeCount: 0, diceCount: 0, sixCount: 0};
 },




  getCount: function(val) {
    if((val == 3) || (val == 33) || (val ==  39) || (val ==  58) || (val ==  73) || (val ==  26) || (val ==  28)  ){
        this.setState({ladderCount: this.state.ladderCount + 1 });
    }else if((val==98) ||(val== 95)  || (val==46) || (val==89) || (val==65) || (val==53) || (val==30) || (val==32)){
        this.setState({snakeCount: this.state.snakeCount + 1 });
    }
  },

  handleDice: function(diceNumber, sixCount) {
      this.setState({diceCount: this.state.diceCount + 1, sixCount: sixCount});
      var val =  this.state.redDice + diceNumber + 1;
      this.getCount(val);
      var final = this.setDisplacement(val);
      if(final < 100){
        this.setState({redDice: final});
      }else if ( final === 100){
        alert("Congrats!!!! You Reached Home");
        this.setState({redDice: final});
      }
  },

  setDisplacement: function(displacement) {
    var finalValue = displacement;
    if(displacement < 100){
      if(displacement == 3){
       finalValue = 24;
      }else if(displacement == 33) {
       finalValue = 87;
      }else if(displacement == 39) {
       finalValue = 81;
      }else if(displacement == 58) {
       finalValue = 85;
      }else if(displacement == 73) {
       finalValue = 92;
     }else if(displacement == 98) {
       finalValue = 59;
     }else if(displacement == 95) {
       finalValue = 26;
     }else if(displacement == 46) {
       finalValue = 27;
     }else if(displacement == 89) {
       finalValue = 11;
     }else if(displacement == 65) {
       finalValue = 4;
     }else if(displacement == 53) {
        finalValue = 12;
      }
    } else if(displacement == 100) {
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
        <GameBoard redDice={this.state.redDice}/>
        <ScoreBoard connectBoard={this.handleDice} diceNumber={this.state.diceNumber} handleMenu={this.props.handleMenu}/>
      </div>
      <div>
      <ul id="draggablePanelList" className="col-md-10" style={scoreCard}>
        <ScoreCard headerStyle={{"backgroundColor": "red"}} diceCount={this.state.diceCount} sixCount={this.state.sixCount} ladderCount={this.state.ladderCount} snakeCount={this.state.snakeCount}/>
     </ul>
      </div>
      </div>
    );
  }
});





module.exports = SinglePlayer;
