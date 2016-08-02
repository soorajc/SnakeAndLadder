(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var MainApp = React.createClass({
  displayName: "MainApp",

  getInitialState: function getInitialState() {
    return { diceNumber: 1, playerNumber: 0, redDice: 1, greenDice: 1, blueDice: 1, yellowDice: 1 };
  },

  componentDidMount: function componentDidMount() {
    var snd = new Audio("../images/machines.mp3");
    snd.loop = true;
    //snd.play();
  },

  handleDice: function handleDice(diceNumber, playerNumber) {
    var tap = new Audio("../images/tap.mp3");
    console.log("This.state.player--", playerNumber);
    tap.play();
    this.setState({ playerNumber: playerNumber });
    if (playerNumber === 1) {
      var val = this.state.redDice + diceNumber + 1;
      var final = this.setDisplacement(val);
      if (final < 100) {
        this.setState({ redDice: final });
      } else if (final === 100) {
        alert("Red Wins");
        location.reload();
      }
      console.log("Testing final value", final);
    } else if (playerNumber === 2) {
      var val = this.state.greenDice + diceNumber + 1;
      var final = this.setDisplacement(val);
      if (final < 100) {
        this.setState({ greenDice: final });
      } else if (final === 100) {
        alert("Green Wins");
        location.reload();
      }
    } else if (playerNumber === 3) {
      var val = this.state.blueDice + diceNumber + 1;
      var final = this.setDisplacement(val);
      if (final < 100) {
        this.setState({ blueDice: final });
      } else if (final === 100) {
        alert("Blue Wins");
        location.reload();
      }
    } else if (playerNumber === 4) {
      var val = this.state.yellowDice + diceNumber + 1;
      var final = this.setDisplacement(val);
      if (final < 100) {
        this.setState({ yellowDice: final });
      } else if (final === 100) {
        alert("Yellow Wins");
        location.reload();
      }
    }
    var displacement = this.state.diceNumber + diceNumber + 1;
  },

  setDisplacement: function setDisplacement(displacement) {
    var finalValue = displacement;
    var ladder = new Audio("../images/up.mp3");
    var snake = new Audio("../images/down.mp3");
    if (displacement < 100) {
      if (displacement == 3) {
        finalValue = 24;
        ladder.play();
      } else if (displacement == 33) {
        finalValue = 87;
        ladder.play();
      } else if (displacement == 39) {
        finalValue = 81;
        ladder.play();
      } else if (displacement == 58) {
        finalValue = 85;
        ladder.play();
      } else if (displacement == 73) {
        finalValue = 92;
        ladder.play();
      } else if (displacement == 98) {
        finalValue = 59;
        snake.play();
      } else if (displacement == 95) {
        finalValue = 26;
        snake.play();
      } else if (displacement == 46) {
        finalValue = 27;
        snake.play();
      } else if (displacement == 89) {
        finalValue = 11;
        snake.play();
      } else if (displacement == 65) {
        finalValue = 4;
        snake.play();
      } else if (displacement == 53) {
        finalValue = 12;
        snake.play();
      }
    } else if (displacement == 100) {
      finalValue = 100;
    }
    return finalValue;
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      this.state.diceNumber === 100 ? React.createElement(Congrats, null) : React.createElement(GameBoard, { redDice: this.state.redDice, greenDice: this.state.greenDice, blueDice: this.state.blueDice, yellowDice: this.state.yellowDice, diceNumber: this.state.diceNumber, playerNumber: this.state.playerNumber }),
      React.createElement(ScoreBoard, { connectBoard: this.handleDice, diceNumber: this.state.diceNumber })
    );
  }
});

var Congrats = React.createClass({
  displayName: "Congrats",

  render: function render() {
    var redTab = {
      backgroundColor: "#F1F1F1",
      paddingBottom: 20,
      paddingTop: 20,
      paddingLeft: 50,
      height: 500
    };

    var greyTab = {
      backgroundColor: "#F1F1F1",
      paddingLeft: 5,
      textAlign: "left"
    };

    var textColor = {
      color: "white"
    };

    return React.createElement(
      "div",
      { className: "col-md-10 col-xs-10 col-lg-10", style: redTab },
      "Congrats!!!!!!!!!!!!!!!!!You Reached Home Safely......"
    );
  }
});

var GameBoard = React.createClass({
  displayName: "GameBoard",

  render: function render() {
    var redTab = {
      backgroundColor: "#DB1627",
      paddingBottom: 20,
      paddingTop: 20,
      paddingLeft: 50
    };

    var greyTab = {
      backgroundColor: "#F1F1F1",
      paddingLeft: 5,
      textAlign: "left"
    };

    var textColor = {
      color: "white"
    };

    var badgeStyle1 = {
      position: "absolute",
      left: 260,
      top: 15,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 250,
      width: 40,
      fontSize: 20
    };

    var badgeStyle2 = {
      position: "absolute",
      left: 460,
      top: 160,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 350,
      width: 40,
      fontSize: 20
    };

    var badgeStyle4 = {
      position: "absolute",
      left: 260,
      top: 360,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 320,
      width: 220,
      fontSize: 20
    };

    var badgeStyle5 = {
      position: "absolute",
      left: 678,
      top: 55,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 675,
      width: 220,
      fontSize: 20
    };

    var badgeStyle6 = {
      position: "absolute",
      left: 460,
      top: 190,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 350,
      width: 40,
      fontSize: 20
    };

    var badgeStyle3 = {
      position: "absolute",
      left: 880,
      top: 80,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 360,
      width: 150,
      fontSize: 20
    };

    var badgeStyle6 = {
      position: "absolute",
      left: 115,
      top: 80,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 295,
      width: 90,
      fontSize: 20
    };

    var badgeStyle7 = {
      position: "absolute",
      left: 217,
      top: 15,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 595,
      width: 420,
      fontSize: 20
    };

    var badgeStyle8 = {
      position: "absolute",
      left: 525,
      top: 20,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 370,
      width: 120,
      fontSize: 20
    };

    var badgeStyle9 = {
      position: "absolute",
      left: 612,
      top: 155,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 370,
      width: 140,
      fontSize: 20
    };

    var badgeStyle10 = {
      position: "absolute",
      left: 795,
      top: 155,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 370,
      width: 140,
      fontSize: 20
    };

    var scoreText = {
      textAlign: "center",
      fontSize: 20,
      color: "white"
    };

    var badgeStyle11 = {
      position: "absolute",
      left: 790,
      top: 15,
      bottom: 10,
      textAlign: "center",
      paddingTop: 8,
      height: 320,
      width: 220,
      fontSize: 20
    };

    var tiles = [];
    for (var i = 10; i > 0; i--) {
      var col = i * 10;
      if (i % 2 === 0) {
        for (var j = 0; j <= 9; j++) {
          tiles.push(React.createElement(Tile, { value: col - j, displacement: this.props.diceNumber, redDice: this.props.redDice, greenDice: this.props.greenDice, blueDice: this.props.blueDice, yellowDice: this.props.yellowDice, playerNumber: this.props.playerNumber }));
        }
      } else {
        for (var j = 9; j >= 0; j--) {
          tiles.push(React.createElement(Tile, { value: col - j, displacement: this.props.diceNumber, redDice: this.props.redDice, greenDice: this.props.greenDice, blueDice: this.props.blueDice, yellowDice: this.props.yellowDice, playerNumber: this.props.playerNumber }));
        }
      }
    }

    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "col-md-10 col-xs-10 col-lg-10", style: redTab },
        tiles,
        React.createElement(
          "div",
          { style: scoreText },
          "Player On Board: ",
          this.props.playerNumber
        ),
        React.createElement(
          "div",
          { style: scoreText },
          "Please Roll The Dice Console: Red Wins!!!"
        )
      ),
      React.createElement("img", { src: "./images/testdose5.gif", style: badgeStyle1 }),
      React.createElement("img", { src: "./images/testdose11.gif", style: badgeStyle2 }),
      React.createElement("img", { src: "./images/testdose2.gif", style: badgeStyle3 }),
      React.createElement("img", { src: "./images/testdose10.gif", style: badgeStyle8 }),
      React.createElement("img", { src: "./images/testdose4.gif", style: badgeStyle9 }),
      React.createElement("img", { src: "./images/testdose40.gif", style: badgeStyle10 }),
      React.createElement("img", { src: "./images/ladder-22.png", style: badgeStyle4 }),
      React.createElement("img", { src: "./images/five.png", style: badgeStyle6 }),
      React.createElement("img", { src: "./images/ladder-21.png", style: badgeStyle5 }),
      React.createElement("img", { src: "./images/ladder-22.png", style: badgeStyle7 }),
      React.createElement("img", { src: "./images/ladder-22.png", style: badgeStyle11 })
    );
  }
});

var Tile = React.createClass({
  displayName: "Tile",

  render: function render() {
    var revenueStyle = {
      paddingBottom: 20,
      paddingTop: 20,
      fontSize: 18
    };

    var sourceStyle = {
      paddingBottom: 20,
      paddingTop: 20
    };

    var rowStyle = {
      borderBottom: "3px solid white"
    };

    var bodyStyle = {
      backgroundColor: "#F5F5F5"
    };

    var headerStyle = {
      backgroundColor: "#F1F1F1",
      borderBottom: "3px solid white"
    };

    var setPaddingLeft = {
      backgroundColor: "#F1F1F1",
      color: 'black',
      width: 100,
      height: 50,
      border: "1px solid black",
      paddingBottom: 10,
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      textAlign: 'center'
    };

    var setPaddingTop = {
      paddingTop: 30
    };

    var badgeStyle11 = {
      marginLeft: 10,
      marginTop: -5,
      height: 20,
      width: 20,
      backgroundColor: 'red',
      borderRadius: 10
    };

    var badgeStyle12 = {
      marginLeft: 10,
      marginTop: -5,
      height: 20,
      width: 20,
      backgroundColor: 'red',
      borderRadius: 10
    };

    if (this.props.playerNumber === 4 || 3 || 2 || 1) {
      var highlight = {
        marginLeft: 10,
        marginTop: -5,
        height: 20,
        width: 20,
        backgroundColor: 'yellow',
        borderRadius: 10
      };
    } else {
      var highlight = {
        width: 0,
        height: 0,
        fontSize: 0
      };
    }

    var hideDiv = {
      width: 0,
      height: 0,
      fontSize: 0
    };

    var highlight1 = {
      marginLeft: -5,
      marginTop: -3,
      position: "absolute",
      height: 20,
      width: 20,
      backgroundColor: 'red',
      borderRadius: 10
    };

    var highlight2 = {
      marginLeft: 39,
      marginTop: -3,
      height: 20,
      position: "absolute",
      width: 20,
      backgroundColor: 'green',
      borderRadius: 10
    };

    var highlight3 = {
      marginLeft: 60,
      marginTop: -3,
      height: 20,
      position: "absolute",
      width: 20,
      backgroundColor: 'blue',
      borderRadius: 10
    };

    var highlight4 = {
      marginLeft: 17,
      marginTop: -3,
      position: "absolute",
      height: 20,
      width: 20,
      backgroundColor: 'yellow',
      borderRadius: 10
    };

    var higlightArray = [1, 20, 50, 60];
    return React.createElement(
      "div",
      { className: "col-md-1 col-xs-1 col-lg-1", style: setPaddingLeft },
      this.props.value,
      React.createElement(
        "span",
        null,
        React.createElement("div", { style: this.props.redDice === this.props.value ? highlight1 : hideDiv }),
        React.createElement("div", { style: this.props.greenDice === this.props.value ? highlight2 : hideDiv }),
        React.createElement("div", { style: this.props.blueDice === this.props.value ? highlight3 : hideDiv }),
        React.createElement("div", { style: this.props.yellowDice === this.props.value ? highlight4 : hideDiv })
      )
    );
  }
});

var randomdice = 0;
var count = 0;

var ScoreBoard = React.createClass({
  displayName: "ScoreBoard",

  getInitialState: function getInitialState() {
    return { dice: "../images/rotating.jpg", playerNumber: 1 };
  },

  handleDice: function handleDice() {
    var imageArray = ["../images/1.gif", "../images/2.gif", "../images/3.gif", "../images/4.gif", "../images/5.gif", "../images/6.gif"];
    randomdice = Math.round(Math.random() * 5);
    if (this.state.playerNumber < 4) {
      if (randomdice === 5 && count <= 3) {
        alert("You got a 6 roll again");
        count = count + 1;
        this.setState({ playerNumber: this.state.playerNumber });
      } else {
        this.setState({ playerNumber: this.state.playerNumber + 1 });
      }
    } else {
      this.setState({ playerNumber: 1 });
    }

    this.setState({ dice: imageArray[randomdice] });
    this.props.connectBoard(randomdice, this.state.playerNumber);
  },

  reloader: function reloader() {
    location.reload();
  },

  render: function render() {
    var setPaddingLeft = {
      paddingLeft: 20
    };

    var setPaddingTop = {
      paddingTop: 30
    };

    var setChartWidth = {
      width: "75%",
      height: "75%"
    };

    var canvasWidth = {
      width: "100%",
      height: "auto"
    };

    var setColor = {
      backgroundColor: "#F5F5F5"
    };

    return React.createElement(
      "div",
      { className: "col-md-2 col-xs-2 col-lg-2", style: setColor },
      React.createElement(
        "button",
        { type: "button", onClick: this.props.diceNumber === 100 ? this.reloader : this.handleDice },
        this.props.diceNumber === 100 ? "Play Again" : "Throw Dice"
      ),
      "The dice value is ",
      randomdice + 1,
      React.createElement("img", { src: this.props.diceNumber === 100 ? "../images/rotating.jpg" : this.state.dice, width: "200", height: "200" })
    );
  }
});

var ProductGrid = React.createClass({
  displayName: "ProductGrid",

  render: function render() {
    var setPaddingLeft = {
      paddingLeft: 20
    };

    var givenData = {
      "productData": [{
        "view": "10989",
        "purchase": "8908",
        "conversion": "3.5%",
        "revenue": "$54274",
        "rank": "1",
        "productName": "TWISTED BOOTS",
        "status": "154 Views 2 Days Ago",
        "productImageUrl": "./images/boot.jpg"
      }, {
        "view": "10989",
        "purchase": "8908",
        "conversion": "3.5%",
        "revenue": "$54274",
        "rank": "2",
        "productName": "TWISTED BOOTS",
        "status": "154 Views 2 Days Ago",
        "productImageUrl": "./images/boot.jpg"
      }, {
        "view": "10989",
        "purchase": "8908",
        "conversion": "3.5%",
        "revenue": "$54274",
        "rank": "3",
        "productName": "TWISTED BOOTS",
        "status": "154 Views 2 Days Ago",
        "productImageUrl": "./images/boot.jpg"
      }, {
        "view": "10989",
        "purchase": "8908",
        "conversion": "3.5%",
        "revenue": "$54274",
        "rank": "4",
        "productName": "TWISTED BOOTS",
        "status": "154 Views 2 Days Ago",
        "productImageUrl": "./images/boot.jpg"
      }]
    };

    return React.createElement(
      "div",
      { style: setPaddingLeft },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-12" },
          React.createElement(
            "h5",
            null,
            this.props.gridTitle
          )
        )
      ),
      React.createElement(
        "div",
        { className: "row" },
        givenData.productData.map(function (item, index) {
          return React.createElement(ProductTile, {
            productName: item.productName,
            status: item.status,
            productImageUrl: item.productImageUrl,
            rank: item.rank,
            view: item.view,
            purchase: item.purchase,
            revenue: item.revenue,
            conversion: item.conversion
          });
        })
      )
    );
  }
});

var ProductTile = React.createClass({
  displayName: "ProductTile",

  render: function render() {
    var setBorder = {
      border: "1px solid black",
      paddingBottom: 5,
      marginRight: 30,
      marginLeft: 20
    };

    var textColor = {
      color: "#DBDBDB"
    };

    var badgeStyle = {
      position: "absolute",
      left: 15,
      top: 15,
      textAlign: "center",
      paddingTop: 8,
      height: 40,
      width: 40,
      background: "#F1F1F1",
      fontSize: 20
    };

    var labelStyle = {
      color: "#DBDBDB",
      border: 0
    };

    var setPaddingLeft = {
      paddingLeft: 20
    };

    var countStyle = {
      border: 0
    };

    var arrowStyle = {
      textAlign: "center",
      border: 0,
      fontSize: 20
    };

    var setPosition = {
      position: "relative"
    };

    var setTileBackground = {
      backgroundImage: 'url(\'./images/tile-bg.png\')',
      borderTop: "1px solid #DBDBDB",
      height: 180
    };

    return React.createElement(
      "div",
      { className: "col-md-2", style: setBorder },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-12" },
          React.createElement(
            "div",
            { style: badgeStyle },
            this.props.rank
          ),
          React.createElement("img", { src: this.props.productImageUrl, width: "200", height: "300" }),
          React.createElement(
            "h6",
            { style: textColor },
            this.props.productName
          ),
          React.createElement(
            "h6",
            { style: textColor },
            this.props.status
          )
        )
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-12", style: setTileBackground },
          React.createElement(
            "table",
            { className: "table" },
            React.createElement(
              "tbody",
              null,
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  { style: labelStyle },
                  "View"
                ),
                React.createElement(
                  "td",
                  { style: countStyle },
                  this.props.view
                )
              ),
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  { style: labelStyle },
                  "Purchase"
                ),
                React.createElement(
                  "td",
                  { style: countStyle },
                  this.props.purchase
                )
              ),
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  { style: labelStyle },
                  "Conversions"
                ),
                React.createElement(
                  "td",
                  { style: countStyle },
                  this.props.conversion
                )
              ),
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  { style: labelStyle },
                  "Revenues"
                ),
                React.createElement(
                  "td",
                  { style: countStyle },
                  this.props.revenue
                )
              )
            )
          ),
          React.createElement(
            "div",
            { style: arrowStyle },
            "^"
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(MainApp, null), document.getElementById('content'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUU5QixpQkFBZSxFQUFFLDJCQUFXO0FBQzNCLFdBQU8sRUFBQyxVQUFVLEVBQUcsQ0FBQyxFQUFHLFlBQVksRUFBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBQyxDQUFDO0dBQ2hHOztBQUVBLG1CQUFpQixFQUFBLDZCQUFHO0FBQ2xCLFFBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDOUMsT0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O0dBRWpCOztBQUVELFlBQVUsRUFBRSxvQkFBUyxVQUFVLEVBQUUsWUFBWSxFQUFFO0FBQzdDLFFBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDekMsV0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNqRCxPQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDWCxRQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7QUFDN0MsUUFBRyxZQUFZLEtBQUssQ0FBQyxFQUFDO0FBQ3BCLFVBQUksR0FBRyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDL0MsVUFBSSxLQUFLLEdBQUcsSUFB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VUFBSyxTQUFTLEVBQUMsS0FBSztRQUNsQjs7WUFBSyxTQUFTLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBRSxpQkFBaUIsQUFBQztVQUNsRDs7Y0FBTyxTQUFTLEVBQUMsT0FBTztZQUN0Qjs7O2NBQ0U7OztnQkFDRTs7b0JBQUksS0FBSyxFQUFFLFVBQVUsQUFBQzs7aUJBQVU7Z0JBQ2hDOztvQkFBSSxLQUFLLEVBQUUsVUFBVSxBQUFDO2tCQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtpQkFBTTtlQUMxQztjQUNMOzs7Z0JBQ0U7O29CQUFJLEtBQUssRUFBRSxVQUFVLEFBQUM7O2lCQUFjO2dCQUNwQzs7b0JBQUksS0FBSyxFQUFFLFVBQVUsQUFBQztrQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7aUJBQU07ZUFDOUM7Y0FDTDs7O2dCQUNFOztvQkFBSSxLQUFLLEVBQUUsVUFBVSxBQUFDOztpQkFBaUI7Z0JBQ3ZDOztvQkFBSSxLQUFLLEVBQUUsVUFBVSxBQUFDO2tCQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtpQkFBTTtlQUNoRDtjQUNMOzs7Z0JBQ0U7O29CQUFJLEtBQUssRUFBRSxVQUFVLEFBQUM7O2lCQUFjO2dCQUNwQzs7b0JBQUksS0FBSyxFQUFFLFVBQVUsQUFBQztrQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87aUJBQU07ZUFDN0M7YUFDQztXQUNGO1VBQ1I7O2NBQUssS0FBSyxFQUFFLFVBQVUsQUFBQzs7V0FBUTtTQUMzQjtPQUNGO0tBQ0YsQ0FDTjtHQUNIO0NBQ0YsQ0FBQyxDQUFDOztBQUlILFFBQVEsQ0FBQyxNQUFNLENBQ2Isb0JBQUMsT0FBTyxPQUFHLEVBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDbkMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxuXHJcblxyXG52YXIgTWFpbkFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgcmV0dXJuIHtkaWNlTnVtYmVyIDogMSAsIHBsYXllck51bWJlcjowLCByZWREaWNlOiAxLCBncmVlbkRpY2U6IDEsIGJsdWVEaWNlOiAxLCB5ZWxsb3dEaWNlOiAxfTtcclxuIH0sXHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdmFyIHNuZCA9IG5ldyBBdWRpbyhcIi4uL2ltYWdlcy9tYWNoaW5lcy5tcDNcIik7XHJcbiAgICBzbmQubG9vcCA9IHRydWU7XHJcbiAgICAvL3NuZC5wbGF5KCk7XHJcbiAgfSxcclxuXHJcbiAgaGFuZGxlRGljZTogZnVuY3Rpb24oZGljZU51bWJlciwgcGxheWVyTnVtYmVyKSB7XHJcbiAgICB2YXIgdGFwID0gbmV3IEF1ZGlvKFwiLi4vaW1hZ2VzL3RhcC5tcDNcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMuc3RhdGUucGxheWVyLS1cIiwgcGxheWVyTnVtYmVyKTtcclxuICAgIHRhcC5wbGF5KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtwbGF5ZXJOdW1iZXI6IHBsYXllck51bWJlciB9KTtcclxuICAgIGlmKHBsYXllck51bWJlciA9PT0gMSl7XG4gICAgICB2YXIgdmFsID0gIHRoaXMuc3RhdGUucmVkRGljZSArIGRpY2VOdW1iZXIgKyAxO1xyXG4gICAgICB2YXIgZmluYWwgPSB0aGlzLnNldERpc3BsYWNlbWVudCh2YWwpO1xyXG4gICAgICBpZihmaW5hbCA8IDEwMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVkRGljZTogZmluYWx9KTtcclxuICAgICAgfWVsc2UgaWYgKCBmaW5hbCA9PT0gMTAwKXtcclxuICAgICAgICBhbGVydChcIlJlZCBXaW5zXCIpO1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVGVzdGluZyBmaW5hbCB2YWx1ZVwiLGZpbmFsICk7XHJcbiAgICB9ZWxzZSBpZiggcGxheWVyTnVtYmVyID09PSAyKXtcclxuICAgICAgdmFyIHZhbCA9ICB0aGlzLnN0YXRlLmdyZWVuRGljZSArIGRpY2VOdW1iZXIgKyAxO1xyXG4gICAgICB2YXIgZmluYWwgPSB0aGlzLnNldERpc3BsYWNlbWVudCh2YWwpO1xyXG4gICAgICBpZihmaW5hbCA8IDEwMCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2dyZWVuRGljZTogZmluYWx9KTtcclxuICAgICAgfWVsc2UgaWYgKCBmaW5hbCA9PT0gMTAwKXtcclxuICAgICAgICBhbGVydChcIkdyZWVuIFdpbnNcIik7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH1cclxuICAgIH1lbHNlIGlmICggcGxheWVyTnVtYmVyID09PSAzKXtcclxuICAgICAgdmFyIHZhbCA9ICB0aGlzLnN0YXRlLmJsdWVEaWNlICsgZGljZU51bWJlciArIDE7XHJcbiAgICAgIHZhciBmaW5hbCA9IHRoaXMuc2V0RGlzcGxhY2VtZW50KHZhbCk7XHJcbiAgICAgIGlmKGZpbmFsIDwxMDApe1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ymx1ZURpY2U6IGZpbmFsIH0pO1xyXG4gICAgICB9ZWxzZSBpZiAoIGZpbmFsID09PSAxMDApe1xyXG4gICAgICAgIGFsZXJ0KFwiQmx1ZSBXaW5zXCIpO1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH1cclxuICAgIH1lbHNlIGlmICggcGxheWVyTnVtYmVyID09PSA0ICl7XHJcbiAgICAgIHZhciB2YWwgPSAgdGhpcy5zdGF0ZS55ZWxsb3dEaWNlICsgZGljZU51bWJlciArIDE7XHJcbiAgICAgIHZhciBmaW5hbCA9IHRoaXMuc2V0RGlzcGxhY2VtZW50KHZhbCk7XHJcbiAgICAgIGlmKGZpbmFsIDwxMDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3llbGxvd0RpY2U6IGZpbmFsfSk7XHJcbiAgICAgIH1lbHNlIGlmICggZmluYWwgPT09IDEwMCl7XHJcbiAgICAgICAgYWxlcnQoXCJZZWxsb3cgV2luc1wiKTtcclxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgZGlzcGxhY2VtZW50ID0gdGhpcy5zdGF0ZS5kaWNlTnVtYmVyICsgZGljZU51bWJlciArMTtcclxuXHJcbiAgfSxcclxuXHJcbiAgc2V0RGlzcGxhY2VtZW50OiBmdW5jdGlvbihkaXNwbGFjZW1lbnQpIHtcclxuICAgIHZhciBmaW5hbFZhbHVlID0gZGlzcGxhY2VtZW50O1xyXG4gICAgdmFyIGxhZGRlciA9IG5ldyBBdWRpbyhcIi4uL2ltYWdlcy91cC5tcDNcIik7XHJcbiAgICB2YXIgc25ha2UgPSBuZXcgQXVkaW8oXCIuLi9pbWFnZXMvZG93bi5tcDNcIik7XHJcbiAgICBpZihkaXNwbGFjZW1lbnQgPCAxMDApe1xyXG4gICAgICBpZihkaXNwbGFjZW1lbnQgPT0gMyl7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gMjQ7XHJcbiAgICAgICBsYWRkZXIucGxheSgpO1xyXG4gICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gMzMpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA4NztcclxuICAgICAgIGxhZGRlci5wbGF5KCk7XHJcbiAgICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSAzOSkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDgxO1xyXG4gICAgICAgbGFkZGVyLnBsYXkoKTtcclxuICAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDU4KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gODU7XHJcbiAgICAgICBsYWRkZXIucGxheSgpO1xyXG4gICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gNzMpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA5MjtcclxuICAgICAgIGxhZGRlci5wbGF5KCk7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDk4KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gNTk7XHJcbiAgICAgICBzbmFrZS5wbGF5KCk7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDk1KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gMjY7XHJcbiAgICAgICBzbmFrZS5wbGF5KCk7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDQ2KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gMjc7XHJcbiAgICAgICBzbmFrZS5wbGF5KCk7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDg5KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gMTE7XHJcbiAgICAgICBzbmFrZS5wbGF5KCk7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDY1KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gNDtcclxuICAgICAgIHNuYWtlLnBsYXkoKTtcclxuICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gNTMpIHtcclxuICAgICAgICBmaW5hbFZhbHVlID0gMTI7XHJcbiAgICAgICAgc25ha2UucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDEwMCkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDEwMDtcclxuICAgIH1cclxuICAgIHJldHVybiBmaW5hbFZhbHVlO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmRpY2VOdW1iZXIgPT09IDEwMCA/IDxDb25ncmF0cyAvPiA6IDxHYW1lQm9hcmQgIHJlZERpY2U9e3RoaXMuc3RhdGUucmVkRGljZX0gZ3JlZW5EaWNlPXt0aGlzLnN0YXRlLmdyZWVuRGljZX0gYmx1ZURpY2U9e3RoaXMuc3RhdGUuYmx1ZURpY2V9IHllbGxvd0RpY2U9e3RoaXMuc3RhdGUueWVsbG93RGljZX0gZGljZU51bWJlcj17dGhpcy5zdGF0ZS5kaWNlTnVtYmVyfSBwbGF5ZXJOdW1iZXI9e3RoaXMuc3RhdGUucGxheWVyTnVtYmVyfS8+fVxyXG4gICAgICAgIDxTY29yZUJvYXJkIGNvbm5lY3RCb2FyZD17dGhpcy5oYW5kbGVEaWNlfSBkaWNlTnVtYmVyPXt0aGlzLnN0YXRlLmRpY2VOdW1iZXJ9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxudmFyIENvbmdyYXRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgcmVkVGFiID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjFGMUYxXCIsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxyXG4gICAgICBwYWRkaW5nVG9wOiAyMCxcclxuICAgICAgcGFkZGluZ0xlZnQ6NTAsXHJcbiAgICAgIGhlaWdodDogNTAwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgZ3JleVRhYiA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0YxRjFGMVwiLFxyXG4gICAgICBwYWRkaW5nTGVmdDo1LFxyXG4gICAgICB0ZXh0QWxpZ246XCJsZWZ0XCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHRleHRDb2xvciA9IHtcclxuICAgICAgY29sb3I6XCJ3aGl0ZVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgY29sLXhzLTEwIGNvbC1sZy0xMFwiIHN0eWxlPXtyZWRUYWJ9PlxyXG4gICAgICAgICAgQ29uZ3JhdHMhISEhISEhISEhISEhISEhIVlvdSBSZWFjaGVkIEhvbWUgU2FmZWx5Li4uLi4uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIEdhbWVCb2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHJlZFRhYiA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0RCMTYyN1wiLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAyMCxcclxuICAgICAgcGFkZGluZ1RvcDogMjAsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OjUwXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBncmV5VGFiID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjFGMUYxXCIsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OjUsXHJcbiAgICAgIHRleHRBbGlnbjpcImxlZnRcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdGV4dENvbG9yID0ge1xyXG4gICAgICBjb2xvcjpcIndoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjI2MCxcclxuICAgICAgdG9wOjE1LFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMjUwLFxyXG4gICAgICB3aWR0aDogNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUyID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjQ2MCxcclxuICAgICAgdG9wOjE2MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlNCA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDoyNjAsXHJcbiAgICAgIHRvcDozNjAsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzMjAsXHJcbiAgICAgIHdpZHRoOiAyMjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU1ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjY3OCxcclxuICAgICAgdG9wOjU1LFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogNjc1LFxyXG4gICAgICB3aWR0aDogMjIwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlNiA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo0NjAsXHJcbiAgICAgIHRvcDoxOTAsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNTAsXHJcbiAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6ODgwLFxyXG4gICAgICB0b3A6ODAsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNjAsXHJcbiAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU2ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjExNSxcclxuICAgICAgdG9wOjgwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMjk1LFxyXG4gICAgICB3aWR0aDogOTAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU3ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjIxNyxcclxuICAgICAgdG9wOjE1LFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogNTk1LFxyXG4gICAgICB3aWR0aDogNDIwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlOCA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo1MjUsXHJcbiAgICAgIHRvcDoyMCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM3MCxcclxuICAgICAgd2lkdGg6IDEyMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTkgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6NjEyLFxyXG4gICAgICB0b3A6MTU1LFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzcwLFxyXG4gICAgICB3aWR0aDogMTQwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMTAgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6Nzk1LFxyXG4gICAgICB0b3A6MTU1LFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzcwLFxyXG4gICAgICB3aWR0aDogMTQwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzY29yZVRleHQgPSB7XHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMTEgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6NzkwLFxyXG4gICAgICB0b3A6MTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzMjAsXHJcbiAgICAgIHdpZHRoOiAyMjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHRpbGVzID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMTA7IGkgPjA7IGktLSkge1xyXG4gICAgICB2YXIgY29sID0gaSoxMDtcclxuICAgICAgaWYoaSUyID09PSAwKXtcclxuICAgICAgICBmb3IodmFyIGo9MDtqPD05O2orKyl7XHJcbiAgICAgICAgICB0aWxlcy5wdXNoKDxUaWxlIHZhbHVlPXtjb2wtan0gZGlzcGxhY2VtZW50PXt0aGlzLnByb3BzLmRpY2VOdW1iZXJ9ICByZWREaWNlPXt0aGlzLnByb3BzLnJlZERpY2V9IGdyZWVuRGljZT17dGhpcy5wcm9wcy5ncmVlbkRpY2V9IGJsdWVEaWNlPXt0aGlzLnByb3BzLmJsdWVEaWNlfSB5ZWxsb3dEaWNlPXt0aGlzLnByb3BzLnllbGxvd0RpY2V9ICBwbGF5ZXJOdW1iZXI9e3RoaXMucHJvcHMucGxheWVyTnVtYmVyfS8+KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGZvcih2YXIgaj05O2o+PTA7ai0tKXtcclxuICAgICAgICAgIHRpbGVzLnB1c2goPFRpbGUgdmFsdWU9e2NvbC1qfSBkaXNwbGFjZW1lbnQ9e3RoaXMucHJvcHMuZGljZU51bWJlcn0gIHJlZERpY2U9e3RoaXMucHJvcHMucmVkRGljZX0gZ3JlZW5EaWNlPXt0aGlzLnByb3BzLmdyZWVuRGljZX0gYmx1ZURpY2U9e3RoaXMucHJvcHMuYmx1ZURpY2V9IHllbGxvd0RpY2U9e3RoaXMucHJvcHMueWVsbG93RGljZX0gIHBsYXllck51bWJlcj17dGhpcy5wcm9wcy5wbGF5ZXJOdW1iZXJ9Lz4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC14cy0xMCBjb2wtbGctMTBcIiBzdHlsZT17cmVkVGFifT5cclxuICAgICAgICAgIHt0aWxlc31cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Njb3JlVGV4dH0+XHJcbiAgICAgICAgICAgICAgUGxheWVyIE9uIEJvYXJkOiB7dGhpcy5wcm9wcy5wbGF5ZXJOdW1iZXJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Njb3JlVGV4dH0+XHJcbiAgICAgICAgICAgIFBsZWFzZSBSb2xsIFRoZSBEaWNlXHJcbiAgICAgICAgICAgIENvbnNvbGU6IFJlZCBXaW5zISEhXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2U1LmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTF9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2UxMS5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGUyfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlMi5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGUzfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlMTAuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlOH0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTQuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlOX0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTQwLmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTEwfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2xhZGRlci0yMi5wbmdcIn0gc3R5bGU9e2JhZGdlU3R5bGU0fS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2ZpdmUucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlNn0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjEucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlNX0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjIucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlN30vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjIucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlMTF9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG52YXIgVGlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHJldmVudWVTdHlsZSA9IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbToyMCxcclxuICAgICAgcGFkZGluZ1RvcDoyMCxcclxuICAgICAgZm9udFNpemU6MThcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICB2YXIgc291cmNlU3R5bGUgPSB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206MjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6MjBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHJvd1N0eWxlID0ge1xyXG4gICAgICBib3JkZXJCb3R0b206IFwiM3B4IHNvbGlkIHdoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJvZHlTdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0Y1RjVGNVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoZWFkZXJTdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0YxRjFGMVwiLFxyXG4gICAgICBib3JkZXJCb3R0b206IFwiM3B4IHNvbGlkIHdoaXRlXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0UGFkZGluZ0xlZnQgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOjEwLFxyXG4gICAgICBwYWRkaW5nVG9wOjEwLFxyXG4gICAgICBwYWRkaW5nTGVmdDogMTAsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0UGFkZGluZ1RvcCA9IHtcclxuICAgICAgcGFkZGluZ1RvcDozMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMTEgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6MTAsXHJcbiAgICAgIG1hcmdpblRvcDogLTUsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTEyID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0OjEwLFxyXG4gICAgICBtYXJnaW5Ub3A6IC01LFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgIH07XHJcblxyXG4gICAgaWYodGhpcy5wcm9wcy5wbGF5ZXJOdW1iZXIgPT09IDQgfHwgMyB8fCAyIHx8IDEpe1xyXG4gICAgICB2YXIgaGlnaGxpZ2h0ID0ge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6MTAsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAtNSxcclxuICAgICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHZhciBoaWdobGlnaHQgPSB7XHJcbiAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgIGZvbnRTaXplOiAwLFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZGVEaXYgPSB7XHJcbiAgICAgIHdpZHRoOiAwLFxyXG4gICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgIGZvbnRTaXplOiAwLFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaWdobGlnaHQxID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0Oi01LFxyXG4gICAgICBtYXJnaW5Ub3A6LTMsXHJcbiAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2hsaWdodDIgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6MzksXHJcbiAgICAgIG1hcmdpblRvcDogLTMsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGlnaGxpZ2h0MyA9IHtcclxuICAgICAgbWFyZ2luTGVmdDo2MCxcclxuICAgICAgbWFyZ2luVG9wOiAtMyxcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2hsaWdodDQgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6MTcsXHJcbiAgICAgIG1hcmdpblRvcDogLTMsXHJcbiAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2xpZ2h0QXJyYXkgPSBbIDEsIDIwLCA1MCwgNjBdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMSBjb2wteHMtMSBjb2wtbGctMVwiIHN0eWxlPXtzZXRQYWRkaW5nTGVmdH0+XHJcbiAgICAgICAge3RoaXMucHJvcHMudmFsdWV9XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIDxkaXYgIHN0eWxlPXsgdGhpcy5wcm9wcy5yZWREaWNlID09PSB0aGlzLnByb3BzLnZhbHVlID8gaGlnaGxpZ2h0MSA6IGhpZGVEaXZ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgIHN0eWxlPXsgdGhpcy5wcm9wcy5ncmVlbkRpY2UgPT09IHRoaXMucHJvcHMudmFsdWUgPyBoaWdobGlnaHQyIDogaGlkZURpdn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiAgc3R5bGU9eyB0aGlzLnByb3BzLmJsdWVEaWNlID09PSB0aGlzLnByb3BzLnZhbHVlID8gaGlnaGxpZ2h0MyA6IGhpZGVEaXZ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgIHN0eWxlPXsgdGhpcy5wcm9wcy55ZWxsb3dEaWNlID09PSB0aGlzLnByb3BzLnZhbHVlID8gaGlnaGxpZ2h0NCA6IGhpZGVEaXZ9PjwvZGl2PlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIHJhbmRvbWRpY2UgPSAwO1xyXG52YXIgY291bnQgPSAwO1xyXG5cclxudmFyIFNjb3JlQm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgcmV0dXJuIHtkaWNlIDogXCIuLi9pbWFnZXMvcm90YXRpbmcuanBnXCIsIHBsYXllck51bWJlcjogMX07XHJcbiB9LFxyXG5cclxuIGhhbmRsZURpY2U6IGZ1bmN0aW9uKCkge1xyXG4gICB2YXIgaW1hZ2VBcnJheSA9IFtcIi4uL2ltYWdlcy8xLmdpZlwiLCBcIi4uL2ltYWdlcy8yLmdpZlwiLCBcIi4uL2ltYWdlcy8zLmdpZlwiLCBcIi4uL2ltYWdlcy80LmdpZlwiLCBcIi4uL2ltYWdlcy81LmdpZlwiLCBcIi4uL2ltYWdlcy82LmdpZlwiXTtcclxuICAgcmFuZG9tZGljZT1NYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqNSk7XHJcbiAgIGlmKHRoaXMuc3RhdGUucGxheWVyTnVtYmVyPDQpe1xyXG4gICAgIGlmKHJhbmRvbWRpY2UgPT09IDUgJiYgY291bnQgPD0zKSB7XHJcbiAgICAgICBhbGVydChcIllvdSBnb3QgYSA2IHJvbGwgYWdhaW5cIik7XHJcbiAgICAgICBjb3VudCA9IGNvdW50ICsxO1xyXG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyTnVtYmVyOnRoaXMuc3RhdGUucGxheWVyTnVtYmVyfSk7XHJcbiAgICAgfWVsc2V7XHJcbiAgICAgICB0aGlzLnNldFN0YXRlKHtwbGF5ZXJOdW1iZXI6dGhpcy5zdGF0ZS5wbGF5ZXJOdW1iZXIgKyAxfSk7XHJcbiAgICAgfVxyXG4gICB9ZWxzZSB7XHJcbiAgICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyTnVtYmVyOiAxfSk7XHJcbiAgIH1cclxuXHJcbiAgIHRoaXMuc2V0U3RhdGUoe2RpY2U6aW1hZ2VBcnJheVtyYW5kb21kaWNlXX0pO1xyXG4gICB0aGlzLnByb3BzLmNvbm5lY3RCb2FyZChyYW5kb21kaWNlLCB0aGlzLnN0YXRlLnBsYXllck51bWJlcik7XHJcbiB9LFxyXG5cclxuIHJlbG9hZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gfSxcclxuXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBzZXRQYWRkaW5nTGVmdCA9IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6MjBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0UGFkZGluZ1RvcCA9IHtcclxuICAgICAgcGFkZGluZ1RvcDozMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZXRDaGFydFdpZHRoID0ge1xyXG4gICAgICB3aWR0aDogXCI3NSVcIixcclxuICAgICAgaGVpZ2h0OiBcIjc1JVwiXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNhbnZhc1dpZHRoID0ge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGhlaWdodDogXCJhdXRvXCJcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIHNldENvbG9yID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjVGNUY1XCJcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBjb2wteHMtMiBjb2wtbGctMlwiIHN0eWxlPXtzZXRDb2xvcn0+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5wcm9wcy5kaWNlTnVtYmVyID09PSAxMDAgPyB0aGlzLnJlbG9hZGVyIDogdGhpcy5oYW5kbGVEaWNlfT57dGhpcy5wcm9wcy5kaWNlTnVtYmVyID09PSAxMDAgPyBcIlBsYXkgQWdhaW5cIjpcIlRocm93IERpY2VcIn08L2J1dHRvbj5cclxuICAgICAgICAgVGhlIGRpY2UgdmFsdWUgaXMge3JhbmRvbWRpY2UrMX1cclxuICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5kaWNlTnVtYmVyID09PSAxMDAgPyBcIi4uL2ltYWdlcy9yb3RhdGluZy5qcGdcIiA6IHRoaXMuc3RhdGUuZGljZX0gd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG52YXIgUHJvZHVjdEdyaWQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBzZXRQYWRkaW5nTGVmdCA9IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6MjBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGdpdmVuRGF0YSA9IHtcclxuICAgICAgXCJwcm9kdWN0RGF0YVwiIDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwidmlld1wiOiBcIjEwOTg5XCIsXHJcbiAgICAgICAgICBcInB1cmNoYXNlXCI6XCI4OTA4XCIsXHJcbiAgICAgICAgICBcImNvbnZlcnNpb25cIjogXCIzLjUlXCIsXHJcbiAgICAgICAgICBcInJldmVudWVcIjpcIiQ1NDI3NFwiLFxyXG4gICAgICAgICAgXCJyYW5rXCI6XCIxXCIsXHJcbiAgICAgICAgICBcInByb2R1Y3ROYW1lXCI6IFwiVFdJU1RFRCBCT09UU1wiLFxyXG4gICAgICAgICAgXCJzdGF0dXNcIjogXCIxNTQgVmlld3MgMiBEYXlzIEFnb1wiLFxyXG4gICAgICAgICAgXCJwcm9kdWN0SW1hZ2VVcmxcIiA6IFwiLi9pbWFnZXMvYm9vdC5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJ2aWV3XCI6IFwiMTA5ODlcIixcclxuICAgICAgICAgIFwicHVyY2hhc2VcIjpcIjg5MDhcIixcclxuICAgICAgICAgIFwiY29udmVyc2lvblwiOiBcIjMuNSVcIixcclxuICAgICAgICAgIFwicmV2ZW51ZVwiOlwiJDU0Mjc0XCIsXHJcbiAgICAgICAgICBcInJhbmtcIjpcIjJcIixcclxuICAgICAgICAgIFwicHJvZHVjdE5hbWVcIjogXCJUV0lTVEVEIEJPT1RTXCIsXHJcbiAgICAgICAgICBcInN0YXR1c1wiOiBcIjE1NCBWaWV3cyAyIERheXMgQWdvXCIsXHJcbiAgICAgICAgICBcInByb2R1Y3RJbWFnZVVybFwiIDogXCIuL2ltYWdlcy9ib290LmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInZpZXdcIjogXCIxMDk4OVwiLFxyXG4gICAgICAgICAgXCJwdXJjaGFzZVwiOlwiODkwOFwiLFxyXG4gICAgICAgICAgXCJjb252ZXJzaW9uXCI6IFwiMy41JVwiLFxyXG4gICAgICAgICAgXCJyZXZlbnVlXCI6XCIkNTQyNzRcIixcclxuICAgICAgICAgIFwicmFua1wiOlwiM1wiLFxyXG4gICAgICAgICAgXCJwcm9kdWN0TmFtZVwiOiBcIlRXSVNURUQgQk9PVFNcIixcclxuICAgICAgICAgIFwic3RhdHVzXCI6IFwiMTU0IFZpZXdzIDIgRGF5cyBBZ29cIixcclxuICAgICAgICAgIFwicHJvZHVjdEltYWdlVXJsXCIgOiBcIi4vaW1hZ2VzL2Jvb3QuanBnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwidmlld1wiOiBcIjEwOTg5XCIsXHJcbiAgICAgICAgICBcInB1cmNoYXNlXCI6XCI4OTA4XCIsXHJcbiAgICAgICAgICBcImNvbnZlcnNpb25cIjogXCIzLjUlXCIsXHJcbiAgICAgICAgICBcInJldmVudWVcIjpcIiQ1NDI3NFwiLFxyXG4gICAgICAgICAgXCJyYW5rXCI6XCI0XCIsXHJcbiAgICAgICAgICBcInByb2R1Y3ROYW1lXCI6IFwiVFdJU1RFRCBCT09UU1wiLFxyXG4gICAgICAgICAgXCJzdGF0dXNcIjogXCIxNTQgVmlld3MgMiBEYXlzIEFnb1wiLFxyXG4gICAgICAgICAgXCJwcm9kdWN0SW1hZ2VVcmxcIiA6IFwiLi9pbWFnZXMvYm9vdC5qcGdcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17c2V0UGFkZGluZ0xlZnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiID5cclxuICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmdyaWRUaXRsZX1cclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2l2ZW5EYXRhLnByb2R1Y3REYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICg8UHJvZHVjdFRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lPXtpdGVtLnByb2R1Y3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPXtpdGVtLnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJbWFnZVVybD17aXRlbS5wcm9kdWN0SW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICByYW5rPXtpdGVtLnJhbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3PXtpdGVtLnZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZT17aXRlbS5wdXJjaGFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJldmVudWU9e2l0ZW0ucmV2ZW51ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnNpb249e2l0ZW0uY29udmVyc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAvPik7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxudmFyIFByb2R1Y3RUaWxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2V0Qm9yZGVyID0ge1xyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDUsXHJcbiAgICAgIG1hcmdpblJpZ2h0OjMwLFxyXG4gICAgICBtYXJnaW5MZWZ0OjIwXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0ZXh0Q29sb3IgPSB7XHJcbiAgICAgIGNvbG9yOlwiI0RCREJEQlwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjE1LFxyXG4gICAgICB0b3A6MTUsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiNGMUYxRjFcIixcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbGFiZWxTdHlsZSA9IHtcclxuICAgICAgY29sb3I6XCIjREJEQkRCXCIsXHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNldFBhZGRpbmdMZWZ0ID0ge1xyXG4gICAgICBwYWRkaW5nTGVmdDoyMFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdmFyIGNvdW50U3R5bGUgPSB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYXJyb3dTdHlsZSA9IHtcclxuICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgZm9udFNpemU6IDIwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNldFBvc2l0aW9uID0ge1xyXG4gICAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0VGlsZUJhY2tncm91bmQgPSB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcXCcuL2ltYWdlcy90aWxlLWJnLnBuZ1xcJyknLFxyXG4gICAgICBib3JkZXJUb3A6XCIxcHggc29saWQgI0RCREJEQlwiLFxyXG4gICAgICBoZWlnaHQ6IDE4MFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTJcIiBzdHlsZT17c2V0Qm9yZGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17YmFkZ2VTdHlsZX0+e3RoaXMucHJvcHMucmFua308L2Rpdj5cclxuICAgICAgICAgICAgPGltZyAgc3JjPXt0aGlzLnByb3BzLnByb2R1Y3RJbWFnZVVybH0gd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIzMDBcIiAvPlxyXG4gICAgICAgICAgICA8aDYgc3R5bGU9e3RleHRDb2xvcn0+e3RoaXMucHJvcHMucHJvZHVjdE5hbWV9PC9oNj5cclxuICAgICAgICAgICAgPGg2IHN0eWxlPXt0ZXh0Q29sb3J9Pnt0aGlzLnByb3BzLnN0YXR1c308L2g2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCIgc3R5bGU9e3NldFRpbGVCYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2xhYmVsU3R5bGV9PlZpZXc8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2NvdW50U3R5bGV9Pnt0aGlzLnByb3BzLnZpZXd9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17bGFiZWxTdHlsZX0+UHVyY2hhc2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2NvdW50U3R5bGV9Pnt0aGlzLnByb3BzLnB1cmNoYXNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2xhYmVsU3R5bGV9PkNvbnZlcnNpb25zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtjb3VudFN0eWxlfT57dGhpcy5wcm9wcy5jb252ZXJzaW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2xhYmVsU3R5bGV9PlJldmVudWVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtjb3VudFN0eWxlfT57dGhpcy5wcm9wcy5yZXZlbnVlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Fycm93U3R5bGV9Pl48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxNYWluQXBwIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuKTtcclxuIl19
