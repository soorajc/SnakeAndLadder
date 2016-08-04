(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var SinglePlayer = require('./singleplayer/singleplayer.js');
var MultiPlayer = require('./multiplayer/multiplayer.js');
var sound = new Audio("../sound/machines.mp3");

var MainApp = React.createClass({
  displayName: 'MainApp',

  getInitialState: function getInitialState() {
    return { option: "home" };
  },

  handleMenu: function handleMenu(choice) {
    this.setState({ option: choice });
  },

  componentDidMount: function componentDidMount() {
    sound.play();
  },

  render: function render() {
    var _this = this;

    var tileStyle = {
      marginTop: 10
    };

    var singleButton = {
      position: "absolute",
      marginLeft: -850,
      marginTop: 500,
      marginBottom: 10,
      fontSize: 20
    };

    var multipleButton = {
      position: "absolute",
      marginLeft: -550,
      marginTop: 500,
      marginBottom: 10,
      fontSize: 20
    };

    var setImage = {
      paddingLeft: 5,
      paddingTop: 20,
      paddingRight: 5,
      paddingBottom: 20
    };
    return React.createElement(
      'div',
      { className: 'col-md-12' },
      (function () {
        if (_this.state.option == "home") {
          sound.play();
          return React.createElement(
            'div',
            null,
            React.createElement(
              'div',
              { className: 'col-md-12', style: setImage },
              React.createElement('img', { src: './images/background.png', height: '100%', width: '100%' })
            ),
            React.createElement(
              'button',
              { type: 'button', className: 'btn btn-success', onClick: _this.handleMenu.bind(_this, "single"), style: singleButton },
              'SinglePlayer'
            ),
            React.createElement(
              'button',
              { type: 'button', className: 'btn btn-danger', onClick: _this.handleMenu.bind(_this, "multi"), style: multipleButton },
              'MultiPlayer'
            )
          );
        } else if (_this.state.option == "single") {
          sound.pause();
          sound.currentTime = 0;
          return React.createElement(SinglePlayer, { handleMenu: _this.handleMenu.bind(_this, "home") });
        } else if (_this.state.option == "multi") {
          sound.pause();
          sound.currentTime = 0;
          return React.createElement(MultiPlayer, { handleMenu: _this.handleMenu.bind(_this, "home") });
        }
      })()
    );
  }
});

ReactDOM.render(React.createElement(MainApp, null), document.getElementById('content'));

},{"./multiplayer/multiplayer.js":3,"./singleplayer/singleplayer.js":10}],2:[function(require,module,exports){
"use strict";

var Tile = require('./tile.js');

var GameBoard = React.createClass({
  displayName: "GameBoard",

  render: function render() {
    var redTab = {
      backgroundColor: "#DB1627",
      paddingBottom: 20,
      paddingTop: 20,
      paddingLeft: 38,
      paddingRight: 20
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
        tiles
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

module.exports = GameBoard;

},{"./tile.js":6}],3:[function(require,module,exports){
'use strict';

var GameBoard = require('./gameboard.js');
var ScoreBoard = require('./scoreboard.js');
var ScoreCard = require('./scorecard.js');

var MultiPlayer = React.createClass({
  displayName: 'MultiPlayer',

  getInitialState: function getInitialState() {
    return { diceNumber: 1, playerNumber: 0, redDice: 1, redSnake: 0, greenSnake: 0, blueSnake: 0, yellowSnake: 0, redLadder: 0, greenLadder: 0, blueLadder: 0, yellowLadder: 0, greenDice: 1, blueDice: 1, yellowDice: 1, diceCountRed: 0, sixCountRed: 0, diceCountGreen: 0, sixCountGreen: 0, diceCountBlue: 0, sixCountBlue: 0, diceCountYellow: 0, sixCountYellow: 0 };
  },

  getCount: function getCount(val, playerNumber) {
    if (val == 3 || val == 33 || val == 39 || val == 58 || val == 73 || val == 26 || val == 28) {
      if (playerNumber === 1) {
        this.setState({ redLadder: this.state.redLadder + 1 });
      } else if (playerNumber === 2) {
        this.setState({ greenLadder: this.state.redLadder + 1 });
      } else if (playerNumber === 3) {
        this.setState({ blueLadder: this.state.redLadder + 1 });
      } else if (playerNumber === 4) {
        this.setState({ yellowLadder: this.state.redLadder + 1 });
      }
    } else if (val == 98 || val == 95 || val == 46 || val == 89 || val == 65 || val == 53 || val == 30 || val == 32) {
      if (playerNumber === 1) {
        this.setState({ redSnake: this.state.redSnake + 1 });
      } else if (playerNumber === 2) {
        this.setState({ greenSnake: this.state.greenSnake + 1 });
      } else if (playerNumber === 3) {
        this.setState({ blueSnake: this.state.blueSnake + 1 });
      } else if (playerNumber === 4) {
        this.setState({ yellowSnake: this.state.yellowSnake + 1 });
      }
    }
  },

  handleDice: function handleDice(diceNumber, playerNumber, sixCount) {
    console.log("This.state.player--", playerNumber);
    this.setState({ playerNumber: playerNumber });
    if (playerNumber === 1) {
      this.setState({ diceCountRed: this.state.diceCountRed + 1, sixCountRed: sixCount });
      var val = this.state.redDice + diceNumber + 1;
      this.getCount(val, playerNumber);
      var final = this.setDisplacement(val);

      if (final < 100) {
        this.setState({ redDice: final });
      } else if (final === 100) {
        alert("Red Wins");
        this.setState({ redDice: final });
      }
      console.log("Testing final value", final);
    } else if (playerNumber === 2) {
      this.setState({ diceCountGreen: this.state.diceCountGreen + 1, sixCountGreen: sixCount });
      var val = this.state.greenDice + diceNumber + 1;
      this.getCount(val, playerNumber);
      var final = this.setDisplacement(val);
      if (final < 100) {
        this.setState({ greenDice: final });
      } else if (final === 100) {
        alert("Green Wins");
        this.setState({ greenDice: final });
      }
    } else if (playerNumber === 3) {
      this.setState({ diceCountBlue: this.state.diceCountBlue + 1, sixCountBlue: sixCount });
      var val = this.state.blueDice + diceNumber + 1;
      this.getCount(val, playerNumber);
      var final = this.setDisplacement(val);
      if (final < 100) {
        this.setState({ blueDice: final });
      } else if (final === 100) {
        alert("Blue Wins");
        this.setState({ blueDice: final });
      }
    } else if (playerNumber === 4) {
      this.setState({ diceCountYellow: this.state.diceCountYellow + 1, sixCountYellow: sixCount });
      var val = this.state.yellowDice + diceNumber + 1;
      this.getCount(val, playerNumber);
      var final = this.setDisplacement(val);
      if (final < 100) {
        this.setState({ yellowDice: final });
      } else if (final === 100) {
        alert("Yellow Wins");
        this.setState({ yellowDice: final });
      }
    }
    var displacement = this.state.diceNumber + diceNumber + 1;
  },

  setDisplacement: function setDisplacement(displacement) {
    var finalValue = displacement;
    if (displacement < 100) {
      if (displacement == 3) {
        finalValue = 24;
      } else if (displacement == 33) {
        finalValue = 87;
      } else if (displacement == 39) {
        finalValue = 81;
      } else if (displacement == 58) {
        finalValue = 85;
      } else if (displacement == 73) {
        finalValue = 92;
      } else if (displacement == 98) {
        finalValue = 59;
      } else if (displacement == 95) {
        finalValue = 26;
      } else if (displacement == 46) {
        finalValue = 27;
      } else if (displacement == 89) {
        finalValue = 11;
      } else if (displacement == 65) {
        finalValue = 4;
      } else if (displacement == 53) {
        finalValue = 12;
      }
    } else if (displacement == 100) {
      finalValue = 100;
    }
    return finalValue;
  },

  render: function render() {

    var scoreCard = {
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20
    };

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        React.createElement(GameBoard, { redDice: this.state.redDice, greenDice: this.state.greenDice, blueDice: this.state.blueDice, yellowDice: this.state.yellowDice, diceNumber: this.state.diceNumber, playerNumber: this.state.playerNumber }),
        React.createElement(ScoreBoard, { connectBoard: this.handleDice, diceNumber: this.state.diceNumber, handleMenu: this.props.handleMenu })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'ul',
          { id: 'draggablePanelList', className: 'col-md-10', style: scoreCard },
          React.createElement(
            'h2',
            null,
            'Game Statistics'
          ),
          React.createElement(ScoreCard, { headerStyle: { "backgroundColor": "red" }, diceCount: this.state.diceCountRed, sixCount: this.state.sixCountRed, ladderCount: this.state.redLadder, snakeCount: this.state.redSnake }),
          React.createElement(ScoreCard, { headerStyle: { "backgroundColor": "green" }, diceCount: this.state.diceCountGreen, sixCount: this.state.sixCountGreen, ladderCount: this.state.greenLadder, snakeCount: this.state.greenSnake }),
          React.createElement(ScoreCard, { headerStyle: { "backgroundColor": "blue" }, diceCount: this.state.diceCountBlue, sixCount: this.state.sixCountBlue, ladderCount: this.state.blueLadder, snakeCount: this.state.blueSnake }),
          React.createElement(ScoreCard, { headerStyle: { "backgroundColor": "yellow" }, diceCount: this.state.diceCountYellow, sixCount: this.state.sixCountYellow, ladderCount: this.state.yellowLadder, snakeCount: this.state.yellowSnake })
        )
      )
    );
  }
});

module.exports = MultiPlayer;

},{"./gameboard.js":2,"./scoreboard.js":4,"./scorecard.js":5}],4:[function(require,module,exports){
"use strict";

var randomdice = 0;
var count = 0;
var sixCount = 0;
var message = "";

var ScoreBoard = React.createClass({
  displayName: "ScoreBoard",

  getInitialState: function getInitialState() {
    return { dice: "../images/rotating.jpg", playerNumber: 1, message: '', sixerCount: 0 };
  },

  handleDice: function handleDice() {
    var playerVal = 0;
    var imageArray = ["../images/1.gif", "../images/2.gif", "../images/3.gif", "../images/4.gif", "../images/5.gif", "../images/6.gif"];
    randomdice = Math.round(Math.random() * 5);
    if (randomdice === 5) {
      this.setState({ sixerCount: this.state.sixerCount + 1 });
    }
    if (this.state.playerNumber < 4) {
      if (randomdice === 5 && count < 2) {
        this.setState({ message: "Got a 6 roll again" });
        count = count + 1;
        console.log("The count you are searching is", count, this.state.sixerCount);
        this.setState({ playerNumber: this.state.playerNumber });
      } else {
        count = 0;
        this.setState({ sixerCount: 0 });
        this.setState({ playerNumber: this.state.playerNumber + 1, message: '' });
      }
    }
    if (this.state.playerNumber >= 4) {
      count = 0;
      this.setState({ playerNumber: 1, message: '' });
    }

    this.setState({ dice: imageArray[randomdice] });
    console.log("Before connectBoard", this.state.playerNumber);
    if (this.state.playerNumber == 5) {
      playerVal = 1;
    } else {
      playerVal = this.state.playerNumber;
    }

    this.props.connectBoard(randomdice, playerVal, this.state.sixerCount);
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

    var messageStyle = {
      fontSize: 20,
      color: "orange"
    };

    var diceImage = {
      marginTop: 5,
      border: "2px solid black"
    };

    var diceButton = {
      marginTop: 5,
      border: "2px solid black"
    };

    var setColor = {
      backgroundColor: "white"
    };

    return React.createElement(
      "div",
      { className: "col-md-2 col-xs-2 col-lg-2", style: setColor },
      React.createElement(
        "button",
        { type: "button", style: diceButton, className: "btn btn-success", onClick: this.handleDice },
        "Throw Dice"
      ),
      React.createElement("img", { src: this.props.diceNumber === 100 ? "../images/rotating.jpg" : this.state.dice, width: "100", height: "100", style: diceImage }),
      React.createElement(
        "button",
        { type: "button", style: diceButton, onClick: this.props.handleMenu, className: "btn btn-info" },
        "Go To Menu"
      ),
      React.createElement(
        "p",
        null,
        this.state.message
      )
    );
  }
});

module.exports = ScoreBoard;

},{}],5:[function(require,module,exports){
"use strict";

var ScoreCard = React.createClass({
  displayName: "ScoreCard",

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

    var textPos = {
      textAlign: 'center'
    };

    return React.createElement(
      "li",
      { className: "panel", style: this.props.headerStyle },
      React.createElement("div", { className: "panel-heading" }),
      React.createElement(
        "div",
        { className: "panel-body" },
        React.createElement(
          "table",
          { className: "table table-striped" },
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              { className: "info" },
              React.createElement(
                "td",
                null,
                "Number of throws done-­"
              ),
              React.createElement(
                "td",
                { style: textPos },
                this.props.diceCount
              )
            ),
            React.createElement(
              "tr",
              { className: "warning" },
              React.createElement(
                "td",
                null,
                "Number of times a ​six was rolled"
              ),
              React.createElement(
                "td",
                { style: textPos },
                this.props.sixCount
              )
            ),
            React.createElement(
              "tr",
              { className: "success" },
              React.createElement(
                "td",
                null,
                "Number of ladders climbed"
              ),
              React.createElement(
                "td",
                { style: textPos },
                this.props.ladderCount
              )
            ),
            React.createElement(
              "tr",
              { className: "danger" },
              React.createElement(
                "td",
                null,
                "Number of snakes encountered"
              ),
              React.createElement(
                "td",
                { style: textPos },
                this.props.snakeCount
              )
            )
          )
        )
      )
    );
  }
});

module.exports = ScoreCard;

},{}],6:[function(require,module,exports){
"use strict";

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
      marginLeft: 17,
      marginTop: -3,
      height: 20,
      position: "absolute",
      width: 20,
      backgroundColor: 'green',
      borderRadius: 10
    };

    var highlight3 = {
      marginLeft: 39,
      marginTop: -3,
      height: 20,
      position: "absolute",
      width: 20,
      backgroundColor: 'blue',
      borderRadius: 10
    };

    var highlight4 = {
      marginLeft: 60,
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

module.exports = Tile;

},{}],7:[function(require,module,exports){
"use strict";

var Tile = require('./tile.js');

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
          tiles.push(React.createElement(Tile, { value: col - j, redDice: this.props.redDice }));
        }
      } else {
        for (var j = 9; j >= 0; j--) {
          tiles.push(React.createElement(Tile, { value: col - j, redDice: this.props.redDice }));
        }
      }
    }

    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "col-md-10 col-xs-10 col-lg-10", style: redTab },
        tiles
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

module.exports = GameBoard;

},{"./tile.js":11}],8:[function(require,module,exports){
"use strict";

var randomdice = 0;
var count = 0;
var sixCount = 0;
var message = "";

var ScoreBoard = React.createClass({
  displayName: "ScoreBoard",

  getInitialState: function getInitialState() {
    return { dice: "../images/rotating.jpg", playerNumber: 1, message: '', sixerCount: 0 };
  },

  handleDice: function handleDice() {
    var imageArray = ["../images/1.gif", "../images/2.gif", "../images/3.gif", "../images/4.gif", "../images/5.gif", "../images/6.gif"];
    randomdice = Math.round(Math.random() * 5);
    if (randomdice === 5) {
      sixCount = sixCount + 1;
    }
    this.setState({ dice: imageArray[randomdice] });
    this.props.connectBoard(randomdice, sixCount);
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

    var messageStyle = {
      fontSize: 20,
      color: "orange"
    };

    var diceImage = {
      marginTop: 5,
      border: "2px solid black"
    };

    var diceButton = {
      marginTop: 5,
      border: "2px solid black"
    };

    var setColor = {
      backgroundColor: "white"
    };

    return React.createElement(
      "div",
      { className: "col-md-2 col-xs-2 col-lg-2", style: setColor },
      React.createElement(
        "button",
        { type: "button", style: diceButton, className: "btn btn-success", onClick: this.handleDice },
        "Throw Dice"
      ),
      React.createElement("img", { src: this.props.diceNumber === 100 ? "../images/rotating.jpg" : this.state.dice, width: "100", height: "100", style: diceImage }),
      React.createElement(
        "button",
        { type: "button", style: diceButton, onClick: this.props.handleMenu, className: "btn btn-info" },
        "Go To Menu"
      )
    );
  }
});

module.exports = ScoreBoard;

},{}],9:[function(require,module,exports){
"use strict";

var ScoreCard = React.createClass({
  displayName: "ScoreCard",

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
      "li",
      { className: "panel", style: this.props.headerStyle },
      React.createElement(
        "div",
        { className: "panel-heading" },
        this.props.title
      ),
      React.createElement(
        "div",
        { className: "panel-body" },
        React.createElement(
          "table",
          { className: "table table-striped" },
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              { className: "info" },
              React.createElement(
                "td",
                null,
                "Number of throws done-­"
              ),
              React.createElement(
                "td",
                null,
                this.props.diceCount
              )
            ),
            React.createElement(
              "tr",
              { className: "warning" },
              React.createElement(
                "td",
                null,
                "Number of times a ​six was rolled"
              ),
              React.createElement(
                "td",
                null,
                this.props.sixCount
              )
            ),
            React.createElement(
              "tr",
              { className: "success" },
              React.createElement(
                "td",
                null,
                "Number of ladders climbed"
              ),
              React.createElement(
                "td",
                null,
                this.props.ladderCount
              )
            ),
            React.createElement(
              "tr",
              { className: "danger" },
              React.createElement(
                "td",
                null,
                "Number of snakes encountered"
              ),
              React.createElement(
                "td",
                null,
                this.props.snakeCount
              )
            )
          )
        )
      )
    );
  }
});

module.exports = ScoreCard;

},{}],10:[function(require,module,exports){
'use strict';

var message1 = 'Testing';
var GameBoard = require('./gameboard.js');
var ScoreBoard = require('./scoreboard.js');
var ScoreCard = require('./scorecard.js');

var SinglePlayer = React.createClass({
  displayName: 'SinglePlayer',

  getInitialState: function getInitialState() {
    return { diceNumber: 1, redDice: 1, ladderCount: 0, snakeCount: 0, diceCount: 0, sixCount: 0 };
  },

  getCount: function getCount(val) {
    if (val == 3 || val == 33 || val == 39 || val == 58 || val == 73 || val == 26 || val == 28) {
      this.setState({ ladderCount: this.state.ladderCount + 1 });
    } else if (val == 98 || val == 95 || val == 46 || val == 89 || val == 65 || val == 53 || val == 30 || val == 32) {
      this.setState({ snakeCount: this.state.snakeCount + 1 });
    }
  },

  handleDice: function handleDice(diceNumber, sixCount) {
    this.setState({ diceCount: this.state.diceCount + 1, sixCount: sixCount });
    var val = this.state.redDice + diceNumber + 1;
    this.getCount(val);
    var final = this.setDisplacement(val);
    if (final < 100) {
      this.setState({ redDice: final });
    } else if (final === 100) {
      alert("Congrats!!!! You Reached Home");
      this.setState({ redDice: final });
    }
  },

  setDisplacement: function setDisplacement(displacement) {
    var finalValue = displacement;
    if (displacement < 100) {
      if (displacement == 3) {
        finalValue = 24;
      } else if (displacement == 33) {
        finalValue = 87;
      } else if (displacement == 39) {
        finalValue = 81;
      } else if (displacement == 58) {
        finalValue = 85;
      } else if (displacement == 73) {
        finalValue = 92;
      } else if (displacement == 98) {
        finalValue = 59;
      } else if (displacement == 95) {
        finalValue = 26;
      } else if (displacement == 46) {
        finalValue = 27;
      } else if (displacement == 89) {
        finalValue = 11;
      } else if (displacement == 65) {
        finalValue = 4;
      } else if (displacement == 53) {
        finalValue = 12;
      }
    } else if (displacement == 100) {
      finalValue = 100;
    }
    return finalValue;
  },

  render: function render() {

    var scoreCard = {
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20
    };

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        React.createElement(GameBoard, { redDice: this.state.redDice }),
        React.createElement(ScoreBoard, { connectBoard: this.handleDice, diceNumber: this.state.diceNumber, handleMenu: this.props.handleMenu })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'ul',
          { id: 'draggablePanelList', className: 'col-md-10', style: scoreCard },
          React.createElement(ScoreCard, { headerStyle: { "backgroundColor": "red" }, diceCount: this.state.diceCount, sixCount: this.state.sixCount, ladderCount: this.state.ladderCount, snakeCount: this.state.snakeCount })
        )
      )
    );
  }
});

module.exports = SinglePlayer;

},{"./gameboard.js":7,"./scoreboard.js":8,"./scorecard.js":9}],11:[function(require,module,exports){
"use strict";

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
        React.createElement("div", { style: this.props.redDice === this.props.value ? highlight1 : hideDiv })
      )
    );
  }
});

module.exports = Tile;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL21haW4uanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL211bHRpcGxheWVyL2dhbWVib2FyZC5qcyIsIkU6L1NuYWtlIGFuZCBMYWRkZXIvUmVhY3QtRm9yLUJlZ2lubmVycy1TdGFydGVyLUZpbGVzLzAxIC0gSW50cm9kdWN0aW9uIC0gU3RhcnQgSGVyZS9yb290L3NjcmlwdHMvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL211bHRpcGxheWVyL3Njb3JlYm9hcmQuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL211bHRpcGxheWVyL3Njb3JlY2FyZC5qcyIsIkU6L1NuYWtlIGFuZCBMYWRkZXIvUmVhY3QtRm9yLUJlZ2lubmVycy1TdGFydGVyLUZpbGVzLzAxIC0gSW50cm9kdWN0aW9uIC0gU3RhcnQgSGVyZS9yb290L3NjcmlwdHMvbXVsdGlwbGF5ZXIvdGlsZS5qcyIsIkU6L1NuYWtlIGFuZCBMYWRkZXIvUmVhY3QtRm9yLUJlZ2lubmVycy1TdGFydGVyLUZpbGVzLzAxIC0gSW50cm9kdWN0aW9uIC0gU3RhcnQgSGVyZS9yb290L3NjcmlwdHMvc2luZ2xlcGxheWVyL2dhbWVib2FyZC5qcyIsIkU6L1NuYWtlIGFuZCBMYWRkZXIvUmVhY3QtRm9yLUJlZ2lubmVycy1TdGFydGVyLUZpbGVzLzAxIC0gSW50cm9kdWN0aW9uIC0gU3RhcnQgSGVyZS9yb290L3NjcmlwdHMvc2luZ2xlcGxheWVyL3Njb3JlYm9hcmQuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL3NpbmdsZXBsYXllci9zY29yZWNhcmQuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL3NpbmdsZXBsYXllci9zaW5nbGVwbGF5ZXIuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL3NpbmdsZXBsYXllci90aWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUM3RCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUMxRCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztBQUUvQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFFOUIsaUJBQWUsRUFBRSwyQkFBVztBQUMzQixXQUFPLEVBQUMsTUFBTSxFQUFHLE1BQU0sRUFBRSxDQUFDO0dBQzNCOztBQUVELFlBQVUsRUFBRSxvQkFBUyxNQUFNLEVBQUM7QUFDMUIsUUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMs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bkIsV0FBSyxFQUFFLEVBQUU7QUFDVCxxQkFBZSxFQUFFLE1BQU07QUFDdkIsa0JBQVksRUFBRSxFQUFFO0tBQ2pCLENBQUE7O0FBRUQsUUFBSSxVQUFVLEdBQUc7QUFDZixnQkFBVSxFQUFDLEVBQUU7QUFDYixlQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ2IsY0FBUSxFQUFDLFVBQVU7QUFDbkIsWUFBTSxFQUFFLEVBQUU7QUFDVixXQUFLLEVBQUUsRUFBRTtBQUNULHFCQUFlLEVBQUUsUUFBUTtBQUN6QixrQkFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQTs7QUFFRCxRQUFJLGFBQWEsR0FBRyxDQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDLFdBQ0U7O1FBQUssU0FBUyxFQUFDLDRCQUE0QixFQUFDLEtBQUssRUFBRSxjQUFjLEFBQUM7TUFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO01BQ25COzs7UUFDRSw2QkFBTSxLQUFLLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLE9BQU8sQUFBQyxHQUFPO09BQy9FO0tBQ0QsQ0FDTjtHQUNIO0NBQ0YsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG52YXIgU2luZ2xlUGxheWVyID0gcmVxdWlyZSgnLi9zaW5nbGVwbGF5ZXIvc2luZ2xlcGxheWVyLmpzJyk7XHJcbnZhciBNdWx0aVBsYXllciA9IHJlcXVpcmUoJy4vbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuanMnKTtcclxudmFyIHNvdW5kID0gbmV3IEF1ZGlvKFwiLi4vc291bmQvbWFjaGluZXMubXAzXCIpO1xyXG5cclxudmFyIE1haW5BcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblxyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgIHJldHVybiB7b3B0aW9uIDogXCJob21lXCIgfTtcclxuIH0sXHJcblxyXG4gaGFuZGxlTWVudTogZnVuY3Rpb24oY2hvaWNlKXtcclxuICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uOmNob2ljZX0pO1xyXG4gfSxcclxuXHJcbiBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHNvdW5kLnBsYXkoKTtcclxuIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGlsZVN0eWxlID0ge1xyXG4gICAgICBtYXJnaW5Ub3A6MTBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2luZ2xlQnV0dG9uID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBtYXJnaW5MZWZ0Oi04NTAsXHJcbiAgICAgIG1hcmdpblRvcDogNTAwLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG11bHRpcGxlQnV0dG9uID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBtYXJnaW5MZWZ0Oi01NTAsXHJcbiAgICAgIG1hcmdpblRvcDogNTAwLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNldEltYWdlID0ge1xyXG4gICAgICBwYWRkaW5nTGVmdDo1LFxyXG4gICAgICBwYWRkaW5nVG9wOjIwLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDUsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgeygoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wdGlvbiA9PSBcImhvbWVcIikge1xyXG4gICAgICAgIHNvdW5kLnBsYXkoKTtcclxuICAgICAgIHJldHVybihcclxuICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiIHN0eWxlPXtzZXRJbWFnZX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIiBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIvPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU1lbnUuYmluZCh0aGlzLFwic2luZ2xlXCIpfSBzdHlsZT17c2luZ2xlQnV0dG9ufT5TaW5nbGVQbGF5ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU1lbnUuYmluZCh0aGlzLFwibXVsdGlcIil9IHN0eWxlPXttdWx0aXBsZUJ1dHRvbn0+TXVsdGlQbGF5ZXI8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUub3B0aW9uID09IFwic2luZ2xlXCIpe1xyXG4gICAgICAgIHNvdW5kLnBhdXNlKCk7XHJcbiAgICAgICAgc291bmQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPFNpbmdsZVBsYXllciBoYW5kbGVNZW51PXt0aGlzLmhhbmRsZU1lbnUuYmluZCh0aGlzLCBcImhvbWVcIil9Lz5cclxuICAgICAgKTtcclxuICAgIH1lbHNlIGlmICh0aGlzLnN0YXRlLm9wdGlvbiA9PSBcIm11bHRpXCIpe1xyXG4gICAgICBzb3VuZC5wYXVzZSgpO1xyXG4gICAgICBzb3VuZC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8TXVsdGlQbGF5ZXIgaGFuZGxlTWVudT17dGhpcy5oYW5kbGVNZW51LmJpbmQodGhpcywgXCJob21lXCIpfS8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAgIH0pKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPE1haW5BcHAgLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4pO1xyXG4iLCJ2YXIgVGlsZT1yZXF1aXJlKCcuL3RpbGUuanMnKTtcclxuXHJcbnZhciBHYW1lQm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciByZWRUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNEQjE2MjdcIixcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxyXG4gICAgICBwYWRkaW5nTGVmdDozOCxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGdyZXlUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgcGFkZGluZ0xlZnQ6NSxcclxuICAgICAgdGV4dEFsaWduOlwibGVmdFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0ZXh0Q29sb3IgPSB7XHJcbiAgICAgIGNvbG9yOlwid2hpdGVcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTEgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MjYwLFxyXG4gICAgICB0b3A6MTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAyNTAsXHJcbiAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTIgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6NDYwLFxyXG4gICAgICB0b3A6MTYwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICB3aWR0aDogNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU0ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjI2MCxcclxuICAgICAgdG9wOjM2MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDMyMCxcclxuICAgICAgd2lkdGg6IDIyMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6Njc4LFxyXG4gICAgICB0b3A6NTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiA2NzUsXHJcbiAgICAgIHdpZHRoOiAyMjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU2ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjQ2MCxcclxuICAgICAgdG9wOjE5MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMyA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo4ODAsXHJcbiAgICAgIHRvcDo4MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM2MCxcclxuICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTYgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MTE1LFxyXG4gICAgICB0b3A6ODAsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAyOTUsXHJcbiAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTcgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MjE3LFxyXG4gICAgICB0b3A6MTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiA1OTUsXHJcbiAgICAgIHdpZHRoOiA0MjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU4ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjUyNSxcclxuICAgICAgdG9wOjIwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzcwLFxyXG4gICAgICB3aWR0aDogMTIwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlOSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo2MTIsXHJcbiAgICAgIHRvcDoxNTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNzAsXHJcbiAgICAgIHdpZHRoOiAxNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxMCA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo3OTUsXHJcbiAgICAgIHRvcDoxNTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNzAsXHJcbiAgICAgIHdpZHRoOiAxNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNjb3JlVGV4dCA9IHtcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxMSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo3OTAsXHJcbiAgICAgIHRvcDoxNSxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDMyMCxcclxuICAgICAgd2lkdGg6IDIyMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdGlsZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAxMDsgaSA+MDsgaS0tKSB7XHJcbiAgICAgIHZhciBjb2wgPSBpKjEwO1xyXG4gICAgICBpZihpJTIgPT09IDApe1xyXG4gICAgICAgIGZvcih2YXIgaj0wO2o8PTk7aisrKXtcclxuICAgICAgICAgIHRpbGVzLnB1c2goPFRpbGUgIHZhbHVlPXtjb2wtan0gZGlzcGxhY2VtZW50PXt0aGlzLnByb3BzLmRpY2VOdW1iZXJ9ICByZWREaWNlPXt0aGlzLnByb3BzLnJlZERpY2V9IGdyZWVuRGljZT17dGhpcy5wcm9wcy5ncmVlbkRpY2V9IGJsdWVEaWNlPXt0aGlzLnByb3BzLmJsdWVEaWNlfSB5ZWxsb3dEaWNlPXt0aGlzLnByb3BzLnllbGxvd0RpY2V9ICBwbGF5ZXJOdW1iZXI9e3RoaXMucHJvcHMucGxheWVyTnVtYmVyfS8+KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGZvcih2YXIgaj05O2o+PTA7ai0tKXtcclxuICAgICAgICAgIHRpbGVzLnB1c2goPFRpbGUgdmFsdWU9e2NvbC1qfSBkaXNwbGFjZW1lbnQ9e3RoaXMucHJvcHMuZGljZU51bWJlcn0gIHJlZERpY2U9e3RoaXMucHJvcHMucmVkRGljZX0gZ3JlZW5EaWNlPXt0aGlzLnByb3BzLmdyZWVuRGljZX0gYmx1ZURpY2U9e3RoaXMucHJvcHMuYmx1ZURpY2V9IHllbGxvd0RpY2U9e3RoaXMucHJvcHMueWVsbG93RGljZX0gIHBsYXllck51bWJlcj17dGhpcy5wcm9wcy5wbGF5ZXJOdW1iZXJ9Lz4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC14cy0xMCBjb2wtbGctMTBcIiBzdHlsZT17cmVkVGFifT5cclxuICAgICAgICAgIHt0aWxlc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2U1LmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTF9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2UxMS5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGUyfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlMi5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGUzfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlMTAuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlOH0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTQuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlOX0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTQwLmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTEwfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2xhZGRlci0yMi5wbmdcIn0gc3R5bGU9e2JhZGdlU3R5bGU0fS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2ZpdmUucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlNn0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjEucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlNX0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjIucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlN30vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjIucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlMTF9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZUJvYXJkO1xyXG4iLCJ2YXIgR2FtZUJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQuanMnKTtcclxudmFyIFNjb3JlQm9hcmQgPSByZXF1aXJlKCcuL3Njb3JlYm9hcmQuanMnKTtcclxudmFyIFNjb3JlQ2FyZCA9IHJlcXVpcmUoJy4vc2NvcmVjYXJkLmpzJyk7XHJcblxyXG5cclxuXHJcbnZhciBNdWx0aVBsYXllciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgcmV0dXJuIHtkaWNlTnVtYmVyIDogMSAsIHBsYXllck51bWJlcjowLCByZWREaWNlOiAxLCByZWRTbmFrZTowLCBncmVlblNuYWtlOiAwLCBibHVlU25ha2U6IDAsIHllbGxvd1NuYWtlOiAwLCAgcmVkTGFkZGVyOiAwLCBncmVlbkxhZGRlcjogMCwgYmx1ZUxhZGRlcjogMCwgeWVsbG93TGFkZGVyOjAsIGdyZWVuRGljZTogMSwgYmx1ZURpY2U6IDEsIHllbGxvd0RpY2U6IDEsIGRpY2VDb3VudFJlZDogMCwgc2l4Q291bnRSZWQ6IDAgLGRpY2VDb3VudEdyZWVuOiAwLCBzaXhDb3VudEdyZWVuOiAwLGRpY2VDb3VudEJsdWU6IDAsIHNpeENvdW50Qmx1ZTogMCwgZGljZUNvdW50WWVsbG93OiAwLCBzaXhDb3VudFllbGxvdzogMH07XHJcbiB9LFxyXG5cclxuICBnZXRDb3VudDogZnVuY3Rpb24odmFsLCBwbGF5ZXJOdW1iZXIpIHtcclxuICAgIGlmKCh2YWwgPT0gMykgfHwgKHZhbCA9PSAzMykgfHwgKHZhbCA9PSAgMzkpIHx8ICh2YWwgPT0gIDU4KSB8fCAodmFsID09ICA3MykgfHwgKHZhbCA9PSAgMjYpIHx8ICh2YWwgPT0gIDI4KSAgKXtcclxuICAgICAgaWYocGxheWVyTnVtYmVyPT09MSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVkTGFkZGVyOiB0aGlzLnN0YXRlLnJlZExhZGRlciArIDEgfSk7XHJcbiAgICAgIH1lbHNlIGlmKHBsYXllck51bWJlciA9PT0yICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Z3JlZW5MYWRkZXI6IHRoaXMuc3RhdGUucmVkTGFkZGVyICsgMSB9KTtcclxuICAgICAgfWVsc2UgaWYocGxheWVyTnVtYmVyID09PTMgKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtibHVlTGFkZGVyOiB0aGlzLnN0YXRlLnJlZExhZGRlciArIDEgfSk7XHJcbiAgICAgIH1lbHNlIGlmKHBsYXllck51bWJlciA9PT00ICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7eWVsbG93TGFkZGVyOiB0aGlzLnN0YXRlLnJlZExhZGRlciArIDEgfSk7XHJcbiAgICAgIH1cclxuICAgIH1lbHNlIGlmKCh2YWw9PTk4KSB8fCh2YWw9PSA5NSkgIHx8ICh2YWw9PTQ2KSB8fCAodmFsPT04OSkgfHwgKHZhbD09NjUpIHx8ICh2YWw9PTUzKSB8fCAodmFsPT0zMCkgfHwgKHZhbD09MzIpKXtcclxuICAgICAgaWYocGxheWVyTnVtYmVyPT09MSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVkU25ha2U6IHRoaXMuc3RhdGUucmVkU25ha2UgKyAxIH0pO1xyXG4gICAgICB9ZWxzZSBpZihwbGF5ZXJOdW1iZXIgPT09MiApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2dyZWVuU25ha2U6IHRoaXMuc3RhdGUuZ3JlZW5TbmFrZSArIDEgfSk7XHJcbiAgICAgIH1lbHNlIGlmKHBsYXllck51bWJlciA9PT0zICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ymx1ZVNuYWtlOiB0aGlzLnN0YXRlLmJsdWVTbmFrZSArIDEgfSk7XHJcbiAgICAgIH1lbHNlIGlmKHBsYXllck51bWJlciA9PT00ICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7eWVsbG93U25ha2U6IHRoaXMuc3RhdGUueWVsbG93U25ha2UgKyAxIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgaGFuZGxlRGljZTogZnVuY3Rpb24oZGljZU51bWJlciwgcGxheWVyTnVtYmVyLCBzaXhDb3VudCkge1xyXG4gICAgY29uc29sZS5sb2coXCJUaGlzLnN0YXRlLnBsYXllci0tXCIsIHBsYXllck51bWJlcik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtwbGF5ZXJOdW1iZXI6IHBsYXllck51bWJlciB9KTtcclxuICAgIGlmKHBsYXllck51bWJlciA9PT0gMSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RpY2VDb3VudFJlZDogdGhpcy5zdGF0ZS5kaWNlQ291bnRSZWQgKyAxLCBzaXhDb3VudFJlZDogc2l4Q291bnR9KTtcclxuICAgICAgdmFyIHZhbCA9ICB0aGlzLnN0YXRlLnJlZERpY2UgKyBkaWNlTnVtYmVyICsgMTtcclxuICAgICAgdGhpcy5nZXRDb3VudCh2YWwscGxheWVyTnVtYmVyKTtcclxuICAgICAgdmFyIGZpbmFsID0gdGhpcy5zZXREaXNwbGFjZW1lbnQodmFsKTtcclxuXHJcbiAgICAgIGlmKGZpbmFsIDwgMTAwKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWREaWNlOiBmaW5hbH0pO1xyXG4gICAgICB9ZWxzZSBpZiAoIGZpbmFsID09PSAxMDApe1xyXG4gICAgICAgIGFsZXJ0KFwiUmVkIFdpbnNcIik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVkRGljZTogZmluYWx9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcIlRlc3RpbmcgZmluYWwgdmFsdWVcIixmaW5hbCApO1xyXG4gICAgfWVsc2UgaWYoIHBsYXllck51bWJlciA9PT0gMil7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RpY2VDb3VudEdyZWVuOiB0aGlzLnN0YXRlLmRpY2VDb3VudEdyZWVuICsgMSwgc2l4Q291bnRHcmVlbjogc2l4Q291bnR9KTtcclxuICAgICAgdmFyIHZhbCA9ICB0aGlzLnN0YXRlLmdyZWVuRGljZSArIGRpY2VOdW1iZXIgKyAxO1xyXG4gICAgICB0aGlzLmdldENvdW50KHZhbCxwbGF5ZXJOdW1iZXIpO1xyXG4gICAgICB2YXIgZmluYWwgPSB0aGlzLnNldERpc3BsYWNlbWVudCh2YWwpO1xyXG4gICAgICBpZihmaW5hbCA8IDEwMCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2dyZWVuRGljZTogZmluYWx9KTtcclxuICAgICAgfWVsc2UgaWYgKCBmaW5hbCA9PT0gMTAwKXtcclxuICAgICAgICBhbGVydChcIkdyZWVuIFdpbnNcIik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Z3JlZW5EaWNlOiBmaW5hbH0pO1xyXG4gICAgICB9XHJcbiAgICB9ZWxzZSBpZiAoIHBsYXllck51bWJlciA9PT0gMyl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RpY2VDb3VudEJsdWU6IHRoaXMuc3RhdGUuZGljZUNvdW50Qmx1ZSArIDEsIHNpeENvdW50Qmx1ZTogc2l4Q291bnR9KTtcclxuICAgICAgdmFyIHZhbCA9ICB0aGlzLnN0YXRlLmJsdWVEaWNlICsgZGljZU51bWJlciArIDE7XHJcbiAgICAgIHRoaXMuZ2V0Q291bnQodmFsLHBsYXllck51bWJlcik7XHJcbiAgICAgIHZhciBmaW5hbCA9IHRoaXMuc2V0RGlzcGxhY2VtZW50KHZhbCk7XHJcbiAgICAgIGlmKGZpbmFsIDwxMDApe1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ymx1ZURpY2U6IGZpbmFsIH0pO1xyXG4gICAgICB9ZWxzZSBpZiAoIGZpbmFsID09PSAxMDApe1xyXG4gICAgICAgIGFsZXJ0KFwiQmx1ZSBXaW5zXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JsdWVEaWNlOiBmaW5hbCB9KTtcclxuICAgICAgfVxyXG4gICAgfWVsc2UgaWYgKCBwbGF5ZXJOdW1iZXIgPT09IDQgKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGljZUNvdW50WWVsbG93OiB0aGlzLnN0YXRlLmRpY2VDb3VudFllbGxvdyArIDEsIHNpeENvdW50WWVsbG93OiBzaXhDb3VudH0pO1xyXG4gICAgICB2YXIgdmFsID0gIHRoaXMuc3RhdGUueWVsbG93RGljZSArIGRpY2VOdW1iZXIgKyAxO1xyXG4gICAgICB0aGlzLmdldENvdW50KHZhbCxwbGF5ZXJOdW1iZXIpO1xyXG4gICAgICB2YXIgZmluYWwgPSB0aGlzLnNldERpc3BsYWNlbWVudCh2YWwpO1xyXG4gICAgICBpZihmaW5hbCA8MTAwKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt5ZWxsb3dEaWNlOiBmaW5hbH0pO1xyXG4gICAgICB9ZWxzZSBpZiAoIGZpbmFsID09PSAxMDApe1xyXG4gICAgICAgIGFsZXJ0KFwiWWVsbG93IFdpbnNcIik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7eWVsbG93RGljZTogZmluYWx9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGRpc3BsYWNlbWVudCA9IHRoaXMuc3RhdGUuZGljZU51bWJlciArIGRpY2VOdW1iZXIgKzE7XHJcblxyXG4gIH0sXHJcblxyXG4gIHNldERpc3BsYWNlbWVudDogZnVuY3Rpb24oZGlzcGxhY2VtZW50KSB7XHJcbiAgICB2YXIgZmluYWxWYWx1ZSA9IGRpc3BsYWNlbWVudDtcclxuICAgIGlmKGRpc3BsYWNlbWVudCA8IDEwMCl7XHJcbiAgICAgIGlmKGRpc3BsYWNlbWVudCA9PSAzKXtcclxuICAgICAgIGZpbmFsVmFsdWUgPSAyNDtcclxuICAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDMzKSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gODc7XHJcbiAgICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSAzOSkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDgxO1xyXG4gICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gNTgpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA4NTtcclxuICAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDczKSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gOTI7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDk4KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gNTk7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDk1KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gMjY7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDQ2KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gMjc7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDg5KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gMTE7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDY1KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gNDtcclxuICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gNTMpIHtcclxuICAgICAgICBmaW5hbFZhbHVlID0gMTI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gMTAwKSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gMTAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpbmFsVmFsdWU7XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIgc2NvcmVDYXJkID0ge1xyXG4gICAgICBwYWRkaW5nVG9wOiAyMCxcclxuICAgICAgcGFkZGluZ0xlZnQ6IDIwLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDIwXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxHYW1lQm9hcmQgcmVkRGljZT17dGhpcy5zdGF0ZS5yZWREaWNlfSBncmVlbkRpY2U9e3RoaXMuc3RhdGUuZ3JlZW5EaWNlfSBibHVlRGljZT17dGhpcy5zdGF0ZS5ibHVlRGljZX0geWVsbG93RGljZT17dGhpcy5zdGF0ZS55ZWxsb3dEaWNlfSBkaWNlTnVtYmVyPXt0aGlzLnN0YXRlLmRpY2VOdW1iZXJ9IHBsYXllck51bWJlcj17dGhpcy5zdGF0ZS5wbGF5ZXJOdW1iZXJ9Lz5cclxuICAgICAgICAgIDxTY29yZUJvYXJkIGNvbm5lY3RCb2FyZD17dGhpcy5oYW5kbGVEaWNlfSBkaWNlTnVtYmVyPXt0aGlzLnN0YXRlLmRpY2VOdW1iZXJ9IGhhbmRsZU1lbnU9e3RoaXMucHJvcHMuaGFuZGxlTWVudX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8dWwgaWQ9XCJkcmFnZ2FibGVQYW5lbExpc3RcIiBjbGFzc05hbWU9XCJjb2wtbWQtMTBcIiBzdHlsZT17c2NvcmVDYXJkfT5cclxuICAgICAgICAgICAgPGgyPkdhbWUgU3RhdGlzdGljczwvaDI+XHJcbiAgICAgICAgICAgIDxTY29yZUNhcmQgIGhlYWRlclN0eWxlPXt7XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZWRcIn19IGRpY2VDb3VudD17dGhpcy5zdGF0ZS5kaWNlQ291bnRSZWR9IHNpeENvdW50PXt0aGlzLnN0YXRlLnNpeENvdW50UmVkfSBsYWRkZXJDb3VudD17dGhpcy5zdGF0ZS5yZWRMYWRkZXJ9IHNuYWtlQ291bnQ9e3RoaXMuc3RhdGUucmVkU25ha2V9Lz5cclxuICAgICAgICAgICAgPFNjb3JlQ2FyZCAgaGVhZGVyU3R5bGU9e3tcImJhY2tncm91bmRDb2xvclwiOiBcImdyZWVuXCJ9fWRpY2VDb3VudD17dGhpcy5zdGF0ZS5kaWNlQ291bnRHcmVlbn0gc2l4Q291bnQ9e3RoaXMuc3RhdGUuc2l4Q291bnRHcmVlbn0gbGFkZGVyQ291bnQ9e3RoaXMuc3RhdGUuZ3JlZW5MYWRkZXJ9IHNuYWtlQ291bnQ9e3RoaXMuc3RhdGUuZ3JlZW5TbmFrZX0vPlxyXG4gICAgICAgICAgICA8U2NvcmVDYXJkICBoZWFkZXJTdHlsZT17e1wiYmFja2dyb3VuZENvbG9yXCI6IFwiYmx1ZVwifX0gZGljZUNvdW50PXt0aGlzLnN0YXRlLmRpY2VDb3VudEJsdWV9IHNpeENvdW50PXt0aGlzLnN0YXRlLnNpeENvdW50Qmx1ZX0gbGFkZGVyQ291bnQ9e3RoaXMuc3RhdGUuYmx1ZUxhZGRlcn0gc25ha2VDb3VudD17dGhpcy5zdGF0ZS5ibHVlU25ha2V9Lz5cclxuICAgICAgICAgICAgPFNjb3JlQ2FyZCAgaGVhZGVyU3R5bGU9e3tcImJhY2tncm91bmRDb2xvclwiOiBcInllbGxvd1wifX0gZGljZUNvdW50PXt0aGlzLnN0YXRlLmRpY2VDb3VudFllbGxvd30gc2l4Q291bnQ9e3RoaXMuc3RhdGUuc2l4Q291bnRZZWxsb3d9IGxhZGRlckNvdW50PXt0aGlzLnN0YXRlLnllbGxvd0xhZGRlcn0gc25ha2VDb3VudD17dGhpcy5zdGF0ZS55ZWxsb3dTbmFrZX0vPlxyXG4gICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTXVsdGlQbGF5ZXI7XHJcbiIsInZhciByYW5kb21kaWNlID0gMDtcclxudmFyIGNvdW50ID0gMDtcclxudmFyIHNpeENvdW50ID0gMDtcclxudmFyIG1lc3NhZ2UgPSBcIlwiO1xyXG5cclxudmFyIFNjb3JlQm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgcmV0dXJuIHtkaWNlIDogXCIuLi9pbWFnZXMvcm90YXRpbmcuanBnXCIsIHBsYXllck51bWJlcjogMSwgIG1lc3NhZ2U6JycsIHNpeGVyQ291bnQ6IDB9O1xyXG4gfSxcclxuXHJcbiBoYW5kbGVEaWNlOiBmdW5jdGlvbigpIHtcclxuICAgdmFyIHBsYXllclZhbCA9IDA7XHJcbiAgIHZhciBpbWFnZUFycmF5ID0gW1wiLi4vaW1hZ2VzLzEuZ2lmXCIsIFwiLi4vaW1hZ2VzLzIuZ2lmXCIsIFwiLi4vaW1hZ2VzLzMuZ2lmXCIsIFwiLi4vaW1hZ2VzLzQuZ2lmXCIsIFwiLi4vaW1hZ2VzLzUuZ2lmXCIsIFwiLi4vaW1hZ2VzLzYuZ2lmXCJdO1xyXG4gICByYW5kb21kaWNlPU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo1KTtcclxuICAgaWYocmFuZG9tZGljZSA9PT0gNSl7XHJcbiAgICAgdGhpcy5zZXRTdGF0ZSh7c2l4ZXJDb3VudDogdGhpcy5zdGF0ZS5zaXhlckNvdW50ICsgMX0pO1xyXG4gICB9XHJcbiAgIGlmKHRoaXMuc3RhdGUucGxheWVyTnVtYmVyPDQpe1xyXG4gICAgIGlmKHJhbmRvbWRpY2UgPT09IDUgJiYgY291bnQgPDIpIHtcclxuICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6XCJHb3QgYSA2IHJvbGwgYWdhaW5cIn0pO1xyXG4gICAgICAgY291bnQgPSBjb3VudCArMTtcclxuICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGNvdW50IHlvdSBhcmUgc2VhcmNoaW5nIGlzXCIsIGNvdW50LCB0aGlzLnN0YXRlLnNpeGVyQ291bnQpO1xyXG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyTnVtYmVyOnRoaXMuc3RhdGUucGxheWVyTnVtYmVyfSk7XHJcbiAgICAgfWVsc2V7XHJcbiAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICB0aGlzLnNldFN0YXRlKHtzaXhlckNvdW50OjB9KTtcclxuICAgICAgIHRoaXMuc2V0U3RhdGUoe3BsYXllck51bWJlcjp0aGlzLnN0YXRlLnBsYXllck51bWJlciArIDEsIG1lc3NhZ2U6ICcnfSk7XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgIGlmKHRoaXMuc3RhdGUucGxheWVyTnVtYmVyPj00KXtcclxuICAgICBjb3VudCA9IDA7XHJcbiAgICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyTnVtYmVyOiAxLCBtZXNzYWdlOiAnJ30pO1xyXG4gICB9XHJcblxyXG4gICB0aGlzLnNldFN0YXRlKHtkaWNlOmltYWdlQXJyYXlbcmFuZG9tZGljZV19KTtcclxuICAgY29uc29sZS5sb2coXCJCZWZvcmUgY29ubmVjdEJvYXJkXCIsIHRoaXMuc3RhdGUucGxheWVyTnVtYmVyKTtcclxuICAgaWYodGhpcy5zdGF0ZS5wbGF5ZXJOdW1iZXI9PTUpe1xyXG4gICAgIHBsYXllclZhbCA9IDE7XHJcbiAgIH1lbHNle1xyXG4gICAgIHBsYXllclZhbCA9IHRoaXMuc3RhdGUucGxheWVyTnVtYmVyO1xyXG4gICB9XHJcblxyXG4gICB0aGlzLnByb3BzLmNvbm5lY3RCb2FyZChyYW5kb21kaWNlLCBwbGF5ZXJWYWwsIHRoaXMuc3RhdGUuc2l4ZXJDb3VudCk7XHJcbiB9LFxyXG5cclxuIHJlbG9hZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gfSxcclxuXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBzZXRQYWRkaW5nTGVmdCA9IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6MjBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0UGFkZGluZ1RvcCA9IHtcclxuICAgICAgcGFkZGluZ1RvcDozMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZXRDaGFydFdpZHRoID0ge1xyXG4gICAgICB3aWR0aDogXCI3NSVcIixcclxuICAgICAgaGVpZ2h0OiBcIjc1JVwiXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1lc3NhZ2VTdHlsZSA9IHtcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICBjb2xvcjogXCJvcmFuZ2VcIlxyXG4gICAgfVxyXG5cclxuICAgIHZhciBkaWNlSW1hZ2UgPSB7XHJcbiAgICAgIG1hcmdpblRvcCA6IDUsXHJcbiAgICAgIGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIlxyXG4gICAgfVxyXG5cclxuICAgIHZhciBkaWNlQnV0dG9uID0ge1xyXG4gICAgICBtYXJnaW5Ub3AgOiA1LFxyXG4gICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0Q29sb3IgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIGNvbC14cy0yIGNvbC1sZy0yXCIgc3R5bGU9e3NldENvbG9yfT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPXtkaWNlQnV0dG9ufSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZURpY2V9PlRocm93IERpY2U8L2J1dHRvbj5cclxuICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmRpY2VOdW1iZXIgPT09IDEwMCA/IFwiLi4vaW1hZ2VzL3JvdGF0aW5nLmpwZ1wiIDogdGhpcy5zdGF0ZS5kaWNlfSB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHN0eWxlPXtkaWNlSW1hZ2V9IC8+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT17ZGljZUJ1dHRvbn0gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVNZW51fSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5HbyBUbyBNZW51PC9idXR0b24+XHJcbiAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2NvcmVCb2FyZDtcclxuIiwidmFyIFNjb3JlQ2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHJlZFRhYiA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0YxRjFGMVwiLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAyMCxcclxuICAgICAgcGFkZGluZ1RvcDogMjAsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OjUwLFxyXG4gICAgICBoZWlnaHQ6IDUwMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGdyZXlUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgcGFkZGluZ0xlZnQ6NSxcclxuICAgICAgdGV4dEFsaWduOlwibGVmdFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0ZXh0UG9zID0ge1xyXG4gICAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJwYW5lbFwiIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlclN0eWxlfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgIDx0ZD5OdW1iZXLCoG9mwqB0aHJvd3PCoGRvbmUtwq08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZXh0UG9zfT57dGhpcy5wcm9wcy5kaWNlQ291bnR9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ3YXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+TnVtYmVywqBvZsKgdGltZXPCoGHCoOKAi3NpeCB3YXPCoHJvbGxlZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RleHRQb3N9Pnt0aGlzLnByb3BzLnNpeENvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkPk51bWJlcsKgb2bCoGxhZGRlcnPCoGNsaW1iZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZXh0UG9zfT57dGhpcy5wcm9wcy5sYWRkZXJDb3VudH08L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgPHRkPk51bWJlcsKgb2bCoHNuYWtlcyBlbmNvdW50ZXJlZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RleHRQb3N9Pnt0aGlzLnByb3BzLnNuYWtlQ291bnR9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTY29yZUNhcmQ7XHJcbiIsInZhciBUaWxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgcmV2ZW51ZVN0eWxlID0ge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOjIwLFxyXG4gICAgICBwYWRkaW5nVG9wOjIwLFxyXG4gICAgICBmb250U2l6ZToxOFxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHZhciBzb3VyY2VTdHlsZSA9IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbToyMCxcclxuICAgICAgcGFkZGluZ1RvcDoyMFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcm93U3R5bGUgPSB7XHJcbiAgICAgIGJvcmRlckJvdHRvbTogXCIzcHggc29saWQgd2hpdGVcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYm9keVN0eWxlID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjVGNUY1XCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhlYWRlclN0eWxlID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjFGMUYxXCIsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogXCIzcHggc29saWQgd2hpdGVcIlxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZXRQYWRkaW5nTGVmdCA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0YxRjFGMVwiLFxyXG4gICAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgICB3aWR0aDogMTAwLFxyXG4gICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206MTAsXHJcbiAgICAgIHBhZGRpbmdUb3A6MTAsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAxMCxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiAxMCxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZXRQYWRkaW5nVG9wID0ge1xyXG4gICAgICBwYWRkaW5nVG9wOjMwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxMSA9IHtcclxuICAgICAgbWFyZ2luTGVmdDoxMCxcclxuICAgICAgbWFyZ2luVG9wOiAtNSxcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMTIgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6MTAsXHJcbiAgICAgIG1hcmdpblRvcDogLTUsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgfTtcclxuXHJcbiAgICBpZih0aGlzLnByb3BzLnBsYXllck51bWJlciA9PT0gNCB8fCAzIHx8IDIgfHwgMSl7XHJcbiAgICAgIHZhciBoaWdobGlnaHQgPSB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDoxMCxcclxuICAgICAgICBtYXJnaW5Ub3A6IC01LFxyXG4gICAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdmFyIGhpZ2hsaWdodCA9IHtcclxuICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgZm9udFNpemU6IDAsXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGlkZURpdiA9IHtcclxuICAgICAgd2lkdGg6IDAsXHJcbiAgICAgIGhlaWdodDogMCxcclxuICAgICAgZm9udFNpemU6IDAsXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2hsaWdodDEgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6LTUsXHJcbiAgICAgIG1hcmdpblRvcDotMyxcclxuICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGlnaGxpZ2h0MiA9IHtcclxuICAgICAgbWFyZ2luTGVmdDoxNyxcclxuICAgICAgbWFyZ2luVG9wOiAtMyxcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaWdobGlnaHQzID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0OjM5LFxyXG4gICAgICBtYXJnaW5Ub3A6IC0zLFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICBwb3NpdGlvbjpcImFic29sdXRlXCIsXHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGlnaGxpZ2h0NCA9IHtcclxuICAgICAgbWFyZ2luTGVmdDo2MCxcclxuICAgICAgbWFyZ2luVG9wOiAtMyxcclxuICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGlnbGlnaHRBcnJheSA9IFsgMSwgMjAsIDUwLCA2MF07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xIGNvbC14cy0xIGNvbC1sZy0xXCIgc3R5bGU9e3NldFBhZGRpbmdMZWZ0fT5cclxuICAgICAgICB7dGhpcy5wcm9wcy52YWx1ZX1cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgPGRpdiAgc3R5bGU9eyB0aGlzLnByb3BzLnJlZERpY2UgPT09IHRoaXMucHJvcHMudmFsdWUgPyBoaWdobGlnaHQxIDogaGlkZURpdn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiAgc3R5bGU9eyB0aGlzLnByb3BzLmdyZWVuRGljZSA9PT0gdGhpcy5wcm9wcy52YWx1ZSA/IGhpZ2hsaWdodDIgOiBoaWRlRGl2fT48L2Rpdj5cclxuICAgICAgICA8ZGl2ICBzdHlsZT17IHRoaXMucHJvcHMuYmx1ZURpY2UgPT09IHRoaXMucHJvcHMudmFsdWUgPyBoaWdobGlnaHQzIDogaGlkZURpdn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiAgc3R5bGU9eyB0aGlzLnByb3BzLnllbGxvd0RpY2UgPT09IHRoaXMucHJvcHMudmFsdWUgPyBoaWdobGlnaHQ0IDogaGlkZURpdn0+PC9kaXY+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUaWxlO1xyXG4iLCJ2YXIgVGlsZT1yZXF1aXJlKCcuL3RpbGUuanMnKTtcclxuXHJcbnZhciBHYW1lQm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciByZWRUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNEQjE2MjdcIixcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxyXG4gICAgICBwYWRkaW5nTGVmdDo1MFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgZ3JleVRhYiA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0YxRjFGMVwiLFxyXG4gICAgICBwYWRkaW5nTGVmdDo1LFxyXG4gICAgICB0ZXh0QWxpZ246XCJsZWZ0XCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHRleHRDb2xvciA9IHtcclxuICAgICAgY29sb3I6XCJ3aGl0ZVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDoyNjAsXHJcbiAgICAgIHRvcDoxNSxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDI1MCxcclxuICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMiA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo0NjAsXHJcbiAgICAgIHRvcDoxNjAsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNTAsXHJcbiAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTQgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MjYwLFxyXG4gICAgICB0b3A6MzYwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzIwLFxyXG4gICAgICB3aWR0aDogMjIwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlNSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo2NzgsXHJcbiAgICAgIHRvcDo1NSxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDY3NSxcclxuICAgICAgd2lkdGg6IDIyMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTYgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6NDYwLFxyXG4gICAgICB0b3A6MTkwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICB3aWR0aDogNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUzID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0Ojg4MCxcclxuICAgICAgdG9wOjgwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzYwLFxyXG4gICAgICB3aWR0aDogMTUwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlNiA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDoxMTUsXHJcbiAgICAgIHRvcDo4MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDI5NSxcclxuICAgICAgd2lkdGg6IDkwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlNyA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDoyMTcsXHJcbiAgICAgIHRvcDoxNSxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDU5NSxcclxuICAgICAgd2lkdGg6IDQyMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTggPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6NTI1LFxyXG4gICAgICB0b3A6MjAsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNzAsXHJcbiAgICAgIHdpZHRoOiAxMjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU5ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjYxMixcclxuICAgICAgdG9wOjE1NSxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM3MCxcclxuICAgICAgd2lkdGg6IDE0MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTEwID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0Ojc5NSxcclxuICAgICAgdG9wOjE1NSxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM3MCxcclxuICAgICAgd2lkdGg6IDE0MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2NvcmVUZXh0ID0ge1xyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTExID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0Ojc5MCxcclxuICAgICAgdG9wOjE1LFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzIwLFxyXG4gICAgICB3aWR0aDogMjIwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0aWxlcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDEwOyBpID4wOyBpLS0pIHtcclxuICAgICAgdmFyIGNvbCA9IGkqMTA7XHJcbiAgICAgIGlmKGklMiA9PT0gMCl7XHJcbiAgICAgICAgZm9yKHZhciBqPTA7ajw9OTtqKyspe1xyXG4gICAgICAgICAgdGlsZXMucHVzaCg8VGlsZSB2YWx1ZT17Y29sLWp9IHJlZERpY2U9e3RoaXMucHJvcHMucmVkRGljZX0gLz4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgZm9yKHZhciBqPTk7aj49MDtqLS0pe1xyXG4gICAgICAgICAgdGlsZXMucHVzaCg8VGlsZSB2YWx1ZT17Y29sLWp9IHJlZERpY2U9e3RoaXMucHJvcHMucmVkRGljZX0vPik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgY29sLXhzLTEwIGNvbC1sZy0xMFwiIHN0eWxlPXtyZWRUYWJ9PlxyXG4gICAgICAgICAge3RpbGVzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTUuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlMX0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTExLmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTJ9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2UyLmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTN9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2UxMC5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGU4fS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlNC5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGU5fS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlNDAuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlMTB9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvbGFkZGVyLTIyLnBuZ1wifSBzdHlsZT17YmFkZ2VTdHlsZTR9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvZml2ZS5wbmdcIn0gc3R5bGU9e2JhZGdlU3R5bGU2fS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2xhZGRlci0yMS5wbmdcIn0gc3R5bGU9e2JhZGdlU3R5bGU1fS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2xhZGRlci0yMi5wbmdcIn0gc3R5bGU9e2JhZGdlU3R5bGU3fS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2xhZGRlci0yMi5wbmdcIn0gc3R5bGU9e2JhZGdlU3R5bGUxMX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHYW1lQm9hcmQ7XHJcbiIsInZhciByYW5kb21kaWNlID0gMDtcclxudmFyIGNvdW50ID0gMDtcclxudmFyIHNpeENvdW50ID0gMDtcclxudmFyIG1lc3NhZ2UgPSBcIlwiO1xyXG5cclxudmFyIFNjb3JlQm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgcmV0dXJuIHtkaWNlIDogXCIuLi9pbWFnZXMvcm90YXRpbmcuanBnXCIsIHBsYXllck51bWJlcjogMSwgIG1lc3NhZ2U6JycsIHNpeGVyQ291bnQ6IDB9O1xyXG4gfSxcclxuXHJcbiBoYW5kbGVEaWNlOiBmdW5jdGlvbigpIHtcclxuICAgdmFyIGltYWdlQXJyYXkgPSBbXCIuLi9pbWFnZXMvMS5naWZcIiwgXCIuLi9pbWFnZXMvMi5naWZcIiwgXCIuLi9pbWFnZXMvMy5naWZcIiwgXCIuLi9pbWFnZXMvNC5naWZcIiwgXCIuLi9pbWFnZXMvNS5naWZcIiwgXCIuLi9pbWFnZXMvNi5naWZcIl07XHJcbiAgIHJhbmRvbWRpY2U9TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjUpO1xyXG4gICBpZihyYW5kb21kaWNlID09PSA1KXtcclxuICAgICAgc2l4Q291bnQgPSBzaXhDb3VudCsxXHJcbiAgIH1cclxuICAgdGhpcy5zZXRTdGF0ZSh7ZGljZTppbWFnZUFycmF5W3JhbmRvbWRpY2VdfSk7XHJcbiAgIHRoaXMucHJvcHMuY29ubmVjdEJvYXJkKHJhbmRvbWRpY2UsIHNpeENvdW50KTtcclxuIH0sXHJcblxyXG4gcmVsb2FkZXIgOiBmdW5jdGlvbigpIHtcclxuICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiB9LFxyXG5cclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHNldFBhZGRpbmdMZWZ0ID0ge1xyXG4gICAgICBwYWRkaW5nTGVmdDoyMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZXRQYWRkaW5nVG9wID0ge1xyXG4gICAgICBwYWRkaW5nVG9wOjMwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNldENoYXJ0V2lkdGggPSB7XHJcbiAgICAgIHdpZHRoOiBcIjc1JVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiNzUlXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWVzc2FnZVN0eWxlID0ge1xyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgIGNvbG9yOiBcIm9yYW5nZVwiXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRpY2VJbWFnZSA9IHtcclxuICAgICAgbWFyZ2luVG9wIDogNSxcclxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRpY2VCdXR0b24gPSB7XHJcbiAgICAgIG1hcmdpblRvcCA6IDUsXHJcbiAgICAgIGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIlxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZXRDb2xvciA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLXhzLTIgY29sLWxnLTJcIiBzdHlsZT17c2V0Q29sb3J9PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9e2RpY2VCdXR0b259IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGljZX0+VGhyb3cgRGljZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuZGljZU51bWJlciA9PT0gMTAwID8gXCIuLi9pbWFnZXMvcm90YXRpbmcuanBnXCIgOiB0aGlzLnN0YXRlLmRpY2V9IHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgc3R5bGU9e2RpY2VJbWFnZX0gLz5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPXtkaWNlQnV0dG9ufSBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZU1lbnV9IGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPkdvIFRvIE1lbnU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2NvcmVCb2FyZDtcclxuIiwidmFyIFNjb3JlQ2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHJlZFRhYiA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0YxRjFGMVwiLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAyMCxcclxuICAgICAgcGFkZGluZ1RvcDogMjAsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OjUwLFxyXG4gICAgICBoZWlnaHQ6IDUwMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGdyZXlUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgcGFkZGluZ0xlZnQ6NSxcclxuICAgICAgdGV4dEFsaWduOlwibGVmdFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0ZXh0Q29sb3IgPSB7XHJcbiAgICAgIGNvbG9yOlwid2hpdGVcIlxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwicGFuZWxcIiBzdHlsZT17dGhpcy5wcm9wcy5oZWFkZXJTdHlsZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+TnVtYmVywqBvZsKgdGhyb3dzwqBkb25lLcKtPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5kaWNlQ291bnR9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ3YXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+TnVtYmVywqBvZsKgdGltZXPCoGHCoOKAi3NpeCB3YXPCoHJvbGxlZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuc2l4Q291bnR9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+TnVtYmVywqBvZsKgbGFkZGVyc8KgY2xpbWJlZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMubGFkZGVyQ291bnR9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJkYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZD5OdW1iZXLCoG9mwqBzbmFrZXMgZW5jb3VudGVyZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLnNuYWtlQ291bnR9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTY29yZUNhcmQ7XHJcbiIsIlxyXG52YXIgbWVzc2FnZTEgPSAnVGVzdGluZyc7XHJcbnZhciBHYW1lQm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZC5qcycpO1xyXG52YXIgU2NvcmVCb2FyZCA9IHJlcXVpcmUoJy4vc2NvcmVib2FyZC5qcycpO1xyXG52YXIgU2NvcmVDYXJkID0gcmVxdWlyZSgnLi9zY29yZWNhcmQuanMnKTtcclxuXHJcblxyXG52YXIgU2luZ2xlUGxheWVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICByZXR1cm4ge2RpY2VOdW1iZXIgOiAxICwgcmVkRGljZTogMSwgbGFkZGVyQ291bnQ6IDAsIHNuYWtlQ291bnQ6IDAsIGRpY2VDb3VudDogMCwgc2l4Q291bnQ6IDB9O1xyXG4gfSxcclxuXHJcblxyXG5cclxuXHJcbiAgZ2V0Q291bnQ6IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgaWYoKHZhbCA9PSAzKSB8fCAodmFsID09IDMzKSB8fCAodmFsID09ICAzOSkgfHwgKHZhbCA9PSAgNTgpIHx8ICh2YWwgPT0gIDczKSB8fCAodmFsID09ICAyNikgfHwgKHZhbCA9PSAgMjgpICApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xhZGRlckNvdW50OiB0aGlzLnN0YXRlLmxhZGRlckNvdW50ICsgMSB9KTtcclxuICAgIH1lbHNlIGlmKCh2YWw9PTk4KSB8fCh2YWw9PSA5NSkgIHx8ICh2YWw9PTQ2KSB8fCAodmFsPT04OSkgfHwgKHZhbD09NjUpIHx8ICh2YWw9PTUzKSB8fCAodmFsPT0zMCkgfHwgKHZhbD09MzIpKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzbmFrZUNvdW50OiB0aGlzLnN0YXRlLnNuYWtlQ291bnQgKyAxIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGhhbmRsZURpY2U6IGZ1bmN0aW9uKGRpY2VOdW1iZXIsIHNpeENvdW50KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RpY2VDb3VudDogdGhpcy5zdGF0ZS5kaWNlQ291bnQgKyAxLCBzaXhDb3VudDogc2l4Q291bnR9KTtcclxuICAgICAgdmFyIHZhbCA9ICB0aGlzLnN0YXRlLnJlZERpY2UgKyBkaWNlTnVtYmVyICsgMTtcclxuICAgICAgdGhpcy5nZXRDb3VudCh2YWwpO1xyXG4gICAgICB2YXIgZmluYWwgPSB0aGlzLnNldERpc3BsYWNlbWVudCh2YWwpO1xyXG4gICAgICBpZihmaW5hbCA8IDEwMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVkRGljZTogZmluYWx9KTtcclxuICAgICAgfWVsc2UgaWYgKCBmaW5hbCA9PT0gMTAwKXtcclxuICAgICAgICBhbGVydChcIkNvbmdyYXRzISEhISBZb3UgUmVhY2hlZCBIb21lXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZERpY2U6IGZpbmFsfSk7XHJcbiAgICAgIH1cclxuICB9LFxyXG5cclxuICBzZXREaXNwbGFjZW1lbnQ6IGZ1bmN0aW9uKGRpc3BsYWNlbWVudCkge1xyXG4gICAgdmFyIGZpbmFsVmFsdWUgPSBkaXNwbGFjZW1lbnQ7XHJcbiAgICBpZihkaXNwbGFjZW1lbnQgPCAxMDApe1xyXG4gICAgICBpZihkaXNwbGFjZW1lbnQgPT0gMyl7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gMjQ7XHJcbiAgICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSAzMykge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDg3O1xyXG4gICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gMzkpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA4MTtcclxuICAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDU4KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gODU7XHJcbiAgICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA3Mykge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDkyO1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA5OCkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDU5O1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA5NSkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDI2O1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA0Nikge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDI3O1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA4OSkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDExO1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA2NSkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDQ7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDUzKSB7XHJcbiAgICAgICAgZmluYWxWYWx1ZSA9IDEyO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDEwMCkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDEwMDtcclxuICAgIH1cclxuICAgIHJldHVybiBmaW5hbFZhbHVlO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIHNjb3JlQ2FyZCA9IHtcclxuICAgICAgcGFkZGluZ1RvcDogMjAsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAyMCxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiAyMFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxHYW1lQm9hcmQgcmVkRGljZT17dGhpcy5zdGF0ZS5yZWREaWNlfS8+XHJcbiAgICAgICAgPFNjb3JlQm9hcmQgY29ubmVjdEJvYXJkPXt0aGlzLmhhbmRsZURpY2V9IGRpY2VOdW1iZXI9e3RoaXMuc3RhdGUuZGljZU51bWJlcn0gaGFuZGxlTWVudT17dGhpcy5wcm9wcy5oYW5kbGVNZW51fS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8dWwgaWQ9XCJkcmFnZ2FibGVQYW5lbExpc3RcIiBjbGFzc05hbWU9XCJjb2wtbWQtMTBcIiBzdHlsZT17c2NvcmVDYXJkfT5cclxuICAgICAgICA8U2NvcmVDYXJkIGhlYWRlclN0eWxlPXt7XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZWRcIn19IGRpY2VDb3VudD17dGhpcy5zdGF0ZS5kaWNlQ291bnR9IHNpeENvdW50PXt0aGlzLnN0YXRlLnNpeENvdW50fSBsYWRkZXJDb3VudD17dGhpcy5zdGF0ZS5sYWRkZXJDb3VudH0gc25ha2VDb3VudD17dGhpcy5zdGF0ZS5zbmFrZUNvdW50fS8+XHJcbiAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2luZ2xlUGxheWVyO1xyXG4iLCJ2YXIgVGlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHJldmVudWVTdHlsZSA9IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbToyMCxcclxuICAgICAgcGFkZGluZ1RvcDoyMCxcclxuICAgICAgZm9udFNpemU6MThcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICB2YXIgc291cmNlU3R5bGUgPSB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206MjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6MjBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHJvd1N0eWxlID0ge1xyXG4gICAgICBib3JkZXJCb3R0b206IFwiM3B4IHNvbGlkIHdoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJvZHlTdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0Y1RjVGNVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoZWFkZXJTdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0YxRjFGMVwiLFxyXG4gICAgICBib3JkZXJCb3R0b206IFwiM3B4IHNvbGlkIHdoaXRlXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0UGFkZGluZ0xlZnQgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOjEwLFxyXG4gICAgICBwYWRkaW5nVG9wOjEwLFxyXG4gICAgICBwYWRkaW5nTGVmdDogMTAsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0UGFkZGluZ1RvcCA9IHtcclxuICAgICAgcGFkZGluZ1RvcDozMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMTEgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6MTAsXHJcbiAgICAgIG1hcmdpblRvcDogLTUsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTEyID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0OjEwLFxyXG4gICAgICBtYXJnaW5Ub3A6IC01LFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgIH07XHJcblxyXG4gICAgaWYodGhpcy5wcm9wcy5wbGF5ZXJOdW1iZXIgPT09IDQgfHwgMyB8fCAyIHx8IDEpe1xyXG4gICAgICB2YXIgaGlnaGxpZ2h0ID0ge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6MTAsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAtNSxcclxuICAgICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHZhciBoaWdobGlnaHQgPSB7XHJcbiAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgIGZvbnRTaXplOiAwLFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZGVEaXYgPSB7XHJcbiAgICAgIHdpZHRoOiAwLFxyXG4gICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgIGZvbnRTaXplOiAwLFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaWdobGlnaHQxID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0Oi01LFxyXG4gICAgICBtYXJnaW5Ub3A6LTMsXHJcbiAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2hsaWdodDIgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6MzksXHJcbiAgICAgIG1hcmdpblRvcDogLTMsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGlnaGxpZ2h0MyA9IHtcclxuICAgICAgbWFyZ2luTGVmdDo2MCxcclxuICAgICAgbWFyZ2luVG9wOiAtMyxcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2hsaWdodDQgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6MTcsXHJcbiAgICAgIG1hcmdpblRvcDogLTMsXHJcbiAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2xpZ2h0QXJyYXkgPSBbIDEsIDIwLCA1MCwgNjBdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMSBjb2wteHMtMSBjb2wtbGctMVwiIHN0eWxlPXtzZXRQYWRkaW5nTGVmdH0+XHJcbiAgICAgICAge3RoaXMucHJvcHMudmFsdWV9XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIDxkaXYgIHN0eWxlPXsgdGhpcy5wcm9wcy5yZWREaWNlID09PSB0aGlzLnByb3BzLnZhbHVlID8gaGlnaGxpZ2h0MSA6IGhpZGVEaXZ9PjwvZGl2PlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUaWxlO1xyXG4iXX0=
