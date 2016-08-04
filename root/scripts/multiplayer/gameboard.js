var Tile=require('./tile.js');

var GameBoard = React.createClass({
  render: function() {
    var redTab = {
      backgroundColor:"#DB1627",
      paddingBottom: 20,
      paddingTop: 20,
      paddingLeft:38,
      paddingRight: 20,
    };

    var greyTab = {
      backgroundColor:"#F1F1F1",
      paddingLeft:5,
      textAlign:"left"
    };

    var textColor = {
      color:"white"
    };

    var badgeStyle1 = {
      position: "absolute",
      left:260,
      top:15,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 250,
      width: 40,
      fontSize: 20,
    };

    var badgeStyle2 = {
      position: "absolute",
      left:460,
      top:160,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 350,
      width: 40,
      fontSize: 20,
    };

    var badgeStyle4 = {
      position: "absolute",
      left:260,
      top:360,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 320,
      width: 220,
      fontSize: 20,
    };

    var badgeStyle5 = {
      position: "absolute",
      left:678,
      top:55,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 675,
      width: 220,
      fontSize: 20,
    };

    var badgeStyle6 = {
      position: "absolute",
      left:460,
      top:190,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 350,
      width: 40,
      fontSize: 20,
    };

    var badgeStyle3 = {
      position: "absolute",
      left:880,
      top:80,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 360,
      width: 150,
      fontSize: 20,
    };

    var badgeStyle6 = {
      position: "absolute",
      left:115,
      top:80,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 295,
      width: 90,
      fontSize: 20,
    };

    var badgeStyle7 = {
      position: "absolute",
      left:217,
      top:15,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 595,
      width: 420,
      fontSize: 20,
    };

    var badgeStyle8 = {
      position: "absolute",
      left:525,
      top:20,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 370,
      width: 120,
      fontSize: 20,
    };

    var badgeStyle9 = {
      position: "absolute",
      left:612,
      top:155,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 370,
      width: 140,
      fontSize: 20,
    };

    var badgeStyle10 = {
      position: "absolute",
      left:795,
      top:155,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 370,
      width: 140,
      fontSize: 20,
    };

    var scoreText = {
      textAlign: "center",
      fontSize: 20,
      color: "white"
    };

    var badgeStyle11 = {
      position: "absolute",
      left:790,
      top:15,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 320,
      width: 220,
      fontSize: 20,
    };

    var tiles = [];
    for (var i = 10; i >0; i--) {
      var col = i*10;
      if(i%2 === 0){
        for(var j=0;j<=9;j++){
          tiles.push(<Tile value={col-j} displacement={this.props.diceNumber}  redDice={this.props.redDice} greenDice={this.props.greenDice} blueDice={this.props.blueDice} yellowDice={this.props.yellowDice}  playerNumber={this.props.playerNumber}/>);
        }
      }else{
        for(var j=9;j>=0;j--){
          tiles.push(<Tile value={col-j} displacement={this.props.diceNumber}  redDice={this.props.redDice} greenDice={this.props.greenDice} blueDice={this.props.blueDice} yellowDice={this.props.yellowDice}  playerNumber={this.props.playerNumber}/>);
        }
      }
      }

    return (
        <div>
        <div className="col-md-10 col-xs-10 col-lg-10" style={redTab}>
          {tiles}
        </div>
        <img  src={"./images/testdose5.gif"} style={badgeStyle1}/>
        <img  src={"./images/testdose11.gif"} style={badgeStyle2}/>
        <img  src={"./images/testdose2.gif"} style={badgeStyle3}/>
        <img  src={"./images/testdose10.gif"} style={badgeStyle8}/>
        <img  src={"./images/testdose4.gif"} style={badgeStyle9}/>
        <img  src={"./images/testdose40.gif"} style={badgeStyle10}/>
        <img  src={"./images/ladder-22.png"} style={badgeStyle4}/>
        <img  src={"./images/five.png"} style={badgeStyle6}/>
        <img  src={"./images/ladder-21.png"} style={badgeStyle5}/>
        <img  src={"./images/ladder-22.png"} style={badgeStyle7}/>
        <img  src={"./images/ladder-22.png"} style={badgeStyle11}/>
        </div>
    );
  }
});

module.exports = GameBoard;
