var randomdice = 0;
var count = 0;
var sixCount = 0;
var message = "";

var ScoreBoard = React.createClass({
  getInitialState: function() {
   return {dice : "../images/rotating.jpg", playerNumber: 1,  message:'', sixerCount: 0};
 },

 handleDice: function() {
   var playerVal = 0;
   var imageArray = ["../images/1.gif", "../images/2.gif", "../images/3.gif", "../images/4.gif", "../images/5.gif", "../images/6.gif"];
   randomdice=Math.round(Math.random()*5);
   if(randomdice === 5){
     this.setState({sixerCount: this.state.sixerCount + 1});
   }
   if(this.state.playerNumber<4){
     if(randomdice === 5 && count <2) {
       this.setState({message:"Got a 6 roll again"});
       count = count +1;
       console.log("The count you are searching is", count, this.state.sixerCount);
       this.setState({playerNumber:this.state.playerNumber});
     }else{
       count = 0;
       this.setState({sixerCount:0});
       this.setState({playerNumber:this.state.playerNumber + 1, message: ''});
     }
   }
   if(this.state.playerNumber>=4){
     count = 0;
     this.setState({playerNumber: 1, message: ''});
   }

   this.setState({dice:imageArray[randomdice]});
   console.log("Before connectBoard", this.state.playerNumber);
   if(this.state.playerNumber==5){
     playerVal = 1;
   }else{
     playerVal = this.state.playerNumber;
   }

   this.props.connectBoard(randomdice, playerVal, this.state.sixerCount);
 },

 reloader : function() {
   location.reload();
 },

  render: function() {
    var setPaddingLeft = {
      paddingLeft: 20
    }

    var setPaddingTop = {
      paddingTop: 30
    }

    var setChartWidth = {
      width: "75%",
      height: "75%"
    }

    var messageStyle = {
      fontSize: 20,
      color: "orange"
    }

    var diceImage = {
      marginTop : 5,
      border: "2px solid black"
    }

    var diceButton = {
      marginTop : 5,
      border: "2px solid black"
    }

    var setColor = {
      backgroundColor:"white"
    };

    return (
        <div className="col-md-2 col-xs-2 col-lg-2" style={setColor}>
          <button type="button" style={diceButton} className="btn btn-success" onClick={this.handleDice}>Throw Dice</button>
          <img src={this.props.diceNumber === 100 ? "../images/rotating.jpg" : this.state.dice} width="100" height="100" style={diceImage} />
          <button type="button" style={diceButton} onClick={this.props.handleMenu} className="btn btn-info">Go To Menu</button>
          <p>{this.state.message}</p>
        </div>
    );
  }
});

module.exports = ScoreBoard;
