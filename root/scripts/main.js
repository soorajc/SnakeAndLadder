


var MainApp = React.createClass({

  getInitialState: function() {
   return {diceNumber : 1 , playerNumber:0, redDice: 1, greenDice: 1, blueDice: 1, yellowDice: 1};
 },

  componentDidMount() {
    var snd = new Audio("../images/machines.mp3");
    snd.loop = true;
    //snd.play();
  },

  handleDice: function(diceNumber, playerNumber) {
    var tap = new Audio("../images/tap.mp3");
    console.log("This.state.player--", playerNumber);
    tap.play();
    this.setState({playerNumber: playerNumber });
    if(playerNumber === 1){
      var val =  this.state.redDice + diceNumber + 1;
      var final = this.setDisplacement(val);
      if(final < 100){
        this.setState({redDice: final});
      }else if ( final === 100){
        alert("Red Wins");
        location.reload();
      }
      console.log("Testing final value",final );
    }else if( playerNumber === 2){
      var val =  this.state.greenDice + diceNumber + 1;
      var final = this.setDisplacement(val);
      if(final < 100) {
        this.setState({greenDice: final});
      }else if ( final === 100){
        alert("Green Wins");
        location.reload();
      }
    }else if ( playerNumber === 3){
      var val =  this.state.blueDice + diceNumber + 1;
      var final = this.setDisplacement(val);
      if(final <100){
          this.setState({blueDice: final });
      }else if ( final === 100){
        alert("Blue Wins");
          location.reload();
      }
    }else if ( playerNumber === 4 ){
      var val =  this.state.yellowDice + diceNumber + 1;
      var final = this.setDisplacement(val);
      if(final <100){
        this.setState({yellowDice: final});
      }else if ( final === 100){
        alert("Yellow Wins");
          location.reload();
      }
    }
    var displacement = this.state.diceNumber + diceNumber +1;

  },

  setDisplacement: function(displacement) {
    var finalValue = displacement;
    var ladder = new Audio("../images/up.mp3");
    var snake = new Audio("../images/down.mp3");
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
    } else if(displacement == 100) {
       finalValue = 100;
    }
    return finalValue;
  },

  render: function() {
    return (
      <div>
        {this.state.diceNumber === 100 ? <Congrats /> : <GameBoard  redDice={this.state.redDice} greenDice={this.state.greenDice} blueDice={this.state.blueDice} yellowDice={this.state.yellowDice} diceNumber={this.state.diceNumber} playerNumber={this.state.playerNumber}/>}
        <ScoreBoard connectBoard={this.handleDice} diceNumber={this.state.diceNumber}/>
      </div>
    );
  }
});


var Congrats = React.createClass({
  render: function() {
    var redTab = {
      backgroundColor:"#F1F1F1",
      paddingBottom: 20,
      paddingTop: 20,
      paddingLeft:50,
      height: 500,
    };

    var greyTab = {
      backgroundColor:"#F1F1F1",
      paddingLeft:5,
      textAlign:"left"
    };

    var textColor = {
      color:"white"
    };

    return (
        <div className="col-md-10 col-xs-10 col-lg-10" style={redTab}>
          Congrats!!!!!!!!!!!!!!!!!You Reached Home Safely......
        </div>
    );
  }
});








var GameBoard = React.createClass({
  render: function() {
    var redTab = {
      backgroundColor:"#DB1627",
      paddingBottom: 20,
      paddingTop: 20,
      paddingLeft:50
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
          <div style={scoreText}>
              Player On Board: {this.props.playerNumber}
          </div>
          <div style={scoreText}>
            Please Roll The Dice
            Console: Red Wins!!!
          </div>
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


var Tile = React.createClass({
  render: function() {
    var revenueStyle = {
      paddingBottom:20,
      paddingTop:20,
      fontSize:18
    };



    var sourceStyle = {
      paddingBottom:20,
      paddingTop:20
    };

    var rowStyle = {
      borderBottom: "3px solid white"
    };

    var bodyStyle = {
      backgroundColor:"#F5F5F5"
    };

    var headerStyle = {
      backgroundColor:"#F1F1F1",
      borderBottom: "3px solid white"
    }

    var setPaddingLeft = {
      backgroundColor:"#F1F1F1",
      color:'black',
      width: 100,
      height: 50,
      border: "1px solid black",
      paddingBottom:10,
      paddingTop:10,
      paddingLeft: 10,
      paddingRight: 10,
      textAlign: 'center'
    }

    var setPaddingTop = {
      paddingTop:30
    }

    var badgeStyle11 = {
      marginLeft:10,
      marginTop: -5,
      height: 20,
      width: 20,
      backgroundColor: 'red',
      borderRadius: 10
    };

    var badgeStyle12 = {
      marginLeft:10,
      marginTop: -5,
      height: 20,
      width: 20,
      backgroundColor: 'red',
      borderRadius: 10
    };

    if(this.props.playerNumber === 4 || 3 || 2 || 1){
      var highlight = {
        marginLeft:10,
        marginTop: -5,
        height: 20,
        width: 20,
        backgroundColor: 'yellow',
        borderRadius: 10
      }
    }else{
      var highlight = {
        width: 0,
        height: 0,
        fontSize: 0,
      }
    }

    var hideDiv = {
      width: 0,
      height: 0,
      fontSize: 0,
    }

    var highlight1 = {
      marginLeft:-5,
      marginTop:-3,
      position:"absolute",
      height: 20,
      width: 20,
      backgroundColor: 'red',
      borderRadius: 10
    }

    var highlight2 = {
      marginLeft:39,
      marginTop: -3,
      height: 20,
      position:"absolute",
      width: 20,
      backgroundColor: 'green',
      borderRadius: 10
    }

    var highlight3 = {
      marginLeft:60,
      marginTop: -3,
      height: 20,
      position:"absolute",
      width: 20,
      backgroundColor: 'blue',
      borderRadius: 10
    }

    var highlight4 = {
      marginLeft:17,
      marginTop: -3,
      position:"absolute",
      height: 20,
      width: 20,
      backgroundColor: 'yellow',
      borderRadius: 10
    }

    var higlightArray = [ 1, 20, 50, 60];
    return (
      <div className="col-md-1 col-xs-1 col-lg-1" style={setPaddingLeft}>
        {this.props.value}
      <span>
        <div  style={ this.props.redDice === this.props.value ? highlight1 : hideDiv}></div>
        <div  style={ this.props.greenDice === this.props.value ? highlight2 : hideDiv}></div>
        <div  style={ this.props.blueDice === this.props.value ? highlight3 : hideDiv}></div>
        <div  style={ this.props.yellowDice === this.props.value ? highlight4 : hideDiv}></div>
      </span>
      </div>
    );
  }
});

var randomdice = 0;
var count = 0;

var ScoreBoard = React.createClass({
  getInitialState: function() {
   return {dice : "../images/rotating.jpg", playerNumber: 1};
 },

 handleDice: function() {
   var imageArray = ["../images/1.gif", "../images/2.gif", "../images/3.gif", "../images/4.gif", "../images/5.gif", "../images/6.gif"];
   randomdice=Math.round(Math.random()*5);
   if(this.state.playerNumber<4){
     if(randomdice === 5 && count <=3) {
       alert("You got a 6 roll again");
       count = count +1;
       this.setState({playerNumber:this.state.playerNumber});
     }else{
       this.setState({playerNumber:this.state.playerNumber + 1});
     }
   }else {
     this.setState({playerNumber: 1});
   }

   this.setState({dice:imageArray[randomdice]});
   this.props.connectBoard(randomdice, this.state.playerNumber);
 },

 reloader : function() {
   location.reload();
 },

  render: function() {
    var setPaddingLeft = {
      paddingLeft:20
    }

    var setPaddingTop = {
      paddingTop:30
    }

    var setChartWidth = {
      width: "75%",
      height: "75%"
    }

    var canvasWidth = {
      width: "100%",
      height: "auto"
    }


    var setColor = {
      backgroundColor:"#F5F5F5"
    };

    return (
      <div className="col-md-2 col-xs-2 col-lg-2" style={setColor}>
        <button type="button" onClick={this.props.diceNumber === 100 ? this.reloader : this.handleDice}>{this.props.diceNumber === 100 ? "Play Again":"Throw Dice"}</button>
         The dice value is {randomdice+1}
        <img src={this.props.diceNumber === 100 ? "../images/rotating.jpg" : this.state.dice} width="200" height="200" />
      </div>
    );
  }
});


var ProductGrid = React.createClass({
  render: function() {
    var setPaddingLeft = {
      paddingLeft:20
    };

    var givenData = {
      "productData" : [
        {
          "view": "10989",
          "purchase":"8908",
          "conversion": "3.5%",
          "revenue":"$54274",
          "rank":"1",
          "productName": "TWISTED BOOTS",
          "status": "154 Views 2 Days Ago",
          "productImageUrl" : "./images/boot.jpg"
        },
        {
          "view": "10989",
          "purchase":"8908",
          "conversion": "3.5%",
          "revenue":"$54274",
          "rank":"2",
          "productName": "TWISTED BOOTS",
          "status": "154 Views 2 Days Ago",
          "productImageUrl" : "./images/boot.jpg"
        },
        {
          "view": "10989",
          "purchase":"8908",
          "conversion": "3.5%",
          "revenue":"$54274",
          "rank":"3",
          "productName": "TWISTED BOOTS",
          "status": "154 Views 2 Days Ago",
          "productImageUrl" : "./images/boot.jpg"
        },
        {
          "view": "10989",
          "purchase":"8908",
          "conversion": "3.5%",
          "revenue":"$54274",
          "rank":"4",
          "productName": "TWISTED BOOTS",
          "status": "154 Views 2 Days Ago",
          "productImageUrl" : "./images/boot.jpg"
        },

      ]
    }

    return (
      <div style={setPaddingLeft}>
        <div className="row">
          <div className="col-md-12" >
            <h5>
              {this.props.gridTitle}
            </h5>
          </div>
        </div>
        <div className="row">
        {
          givenData.productData.map((item, index) => {
            return (<ProductTile
                      productName={item.productName}
                      status={item.status}
                      productImageUrl={item.productImageUrl}
                      rank={item.rank}
                      view={item.view}
                      purchase={item.purchase}
                      revenue={item.revenue}
                      conversion={item.conversion}
                    />);
          })
        }
        </div>
      </div>
    );
  }
});


var ProductTile = React.createClass({
  render: function() {
    var setBorder = {
      border: "1px solid black",
      paddingBottom: 5,
      marginRight:30,
      marginLeft:20
    };

    var textColor = {
      color:"#DBDBDB"
    };

    var badgeStyle = {
      position: "absolute",
      left:15,
      top:15,
      textAlign: "center",
      paddingTop: 8,
      height: 40,
      width: 40,
      background: "#F1F1F1",
      fontSize: 20,
    };

    var labelStyle = {
      color:"#DBDBDB",
      border: 0,
    };

    var setPaddingLeft = {
      paddingLeft:20
    };


    var countStyle = {
      border: 0,
    }

    var arrowStyle = {
      textAlign:"center",
      border: 0,
      fontSize: 20
    }

    var setPosition = {
      position:"relative"
    }

    var setTileBackground = {
      backgroundImage: 'url(\'./images/tile-bg.png\')',
      borderTop:"1px solid #DBDBDB",
      height: 180
    }

    return (
      <div className="col-md-2" style={setBorder}>
        <div className="row">
          <div className="col-md-12">
            <div style={badgeStyle}>{this.props.rank}</div>
            <img  src={this.props.productImageUrl} width="200" height="300" />
            <h6 style={textColor}>{this.props.productName}</h6>
            <h6 style={textColor}>{this.props.status}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={setTileBackground}>
            <table className="table">
              <tbody>
                <tr>
                  <td style={labelStyle}>View</td>
                  <td style={countStyle}>{this.props.view}</td>
                </tr>
                <tr>
                  <td style={labelStyle}>Purchase</td>
                  <td style={countStyle}>{this.props.purchase}</td>
                </tr>
                <tr>
                  <td style={labelStyle}>Conversions</td>
                  <td style={countStyle}>{this.props.conversion}</td>
                </tr>
                <tr>
                  <td style={labelStyle}>Revenues</td>
                  <td style={countStyle}>{this.props.revenue}</td>
                </tr>
              </tbody>
            </table>
            <div style={arrowStyle}>^</div>
          </div>
        </div>
      </div>
    );
  }
});



ReactDOM.render(
  <MainApp />,
  document.getElementById('content')
);
