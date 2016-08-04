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
    var tap = new Audio("../sound/tap.mp3");
    console.log("This.state.player--", playerNumber);
    tap.play();
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
    var ladder = new Audio("../sound/up.mp3");
    var snake = new Audio("../sound/down.mp3");
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
    var tap = new Audio("../sound/tap.mp3");
    tap.play();
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
    var ladder = new Audio("../sound/up.mp3");
    var snake = new Audio("../sound/down.mp3");
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL21haW4uanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL211bHRpcGxheWVyL2dhbWVib2FyZC5qcyIsIkU6L1NuYWtlIGFuZCBMYWRkZXIvUmVhY3QtRm9yLUJlZ2lubmVycy1TdGFydGVyLUZpbGVzLzAxIC0gSW50cm9kdWN0aW9uIC0gU3RhcnQgSGVyZS9yb290L3NjcmlwdHMvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL211bHRpcGxheWVyL3Njb3JlYm9hcmQuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL211bHRpcGxheWVyL3Njb3JlY2FyZC5qcyIsIkU6L1NuYWtlIGFuZCBMYWRkZXIvUmVhY3QtRm9yLUJlZ2lubmVycy1TdGFydGVyLUZpbGVzLzAxIC0gSW50cm9kdWN0aW9uIC0gU3RhcnQgSGVyZS9yb290L3NjcmlwdHMvbXVsdGlwbGF5ZXIvdGlsZS5qcyIsIkU6L1NuYWtlIGFuZCBMYWRkZXIvUmVhY3QtRm9yLUJlZ2lubmVycy1TdGFydGVyLUZpbGVzLzAxIC0gSW50cm9kdWN0aW9uIC0gU3RhcnQgSGVyZS9yb290L3NjcmlwdHMvc2luZ2xlcGxheWVyL2dhbWVib2FyZC5qcyIsIkU6L1NuYWtlIGFuZCBMYWRkZXIvUmVhY3QtRm9yLUJlZ2lubmVycy1TdGFydGVyLUZpbGVzLzAxIC0gSW50cm9kdWN0aW9uIC0gU3RhcnQgSGVyZS9yb290L3NjcmlwdHMvc2luZ2xlcGxheWVyL3Njb3JlYm9hcmQuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL3NpbmdsZXBsYXllci9zY29yZWNhcmQuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL3NpbmdsZXBsYXllci9zaW5nbGVwbGF5ZXIuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL3NpbmdsZXBsYXllci90aWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUM3RCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUMxRCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztBQUUvQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFFOUIsaUJBQWUsRUFBRSwyQkFBVztBQUMzQixXQUFPLEVBQUMsTUFBTSxFQUFHLE1BQU0sRUFBRSxDQUFDO0dBQzNCOztBQUVELFlBQVUsRUFBRSxvQkFBUyxNQUFNLEVBQUM7QUFDMUIsUUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMs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NUIsa0JBQVUsR0FBRyxFQUFFLENBQUM7QUFDaEIsY0FBTSxDQUFDLElBQUksRUFBRSxDQUFDO09BQ2QsTUFBSyxJQUFHLFlBQVksSUFBSSxFQUFFLEVBQUU7QUFDNUIsa0JBQVUsR0FBRyxFQUFFLENBQUM7QUFDaEIsY0FBTSxDQUFDLElBQUksRUFBRSxDQUFDO09BQ2QsTUFBSyxJQUFHLFlBQVksSUFBSSxFQUFFLEVBQUU7QUFDNUIsa0JBQVUsR0FBRyxFQUFFLENBQUM7QUFDaEIsY0FBTSxDQUFDLElBQUksRUFBRSxDQUFDO09BQ2QsTUFBSyxJQUFHLFlBQVksSUFBSSxFQUFFLEVBQUU7QUFDNUIsa0JBQVUsR0FBRyxFQUFFLENBQUM7QUFDaEIsY0FBTSxDQUFDLElBQUksRUFBRSxDQUFDO09BQ2YsTUFBSyxJQUFHLFlBQVksSUFBSSxFQUFFLEVBQUU7QUFDM0Isa0JBQVUsR0FBRyxFQUFFLENBQUM7QUFDaEIsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO09BQ2QsTUFBSyxJQUFHLFlBQVksSUFBSSxFQUFFLEVBQUU7QUFDM0Isa0JBQVUsR0FBRyxFQUFFLENBQUM7QUFDaEIsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO09BQ2QsTUFBSyxJQUFHLFlBQVksSUFBSSxFQUFFLEVBQUU7QUFDM0Isa0JBQVUsR0FBRyxFQUFFLENBQUM7QUFDaEIsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO09BQ2QsTUFBSyxJQUFHLFlBQVksSUFBSSxFQUFFLEVBQUU7QUFDM0Isa0JBQVUsR0FBRyxFQUFFLENBQUM7QUFDaEIsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO09BQ2QsTUFBSyxJQUFHLFlBQVksSUFBSSxFQUFFLEVBQUU7QUFDM0Isa0JBQVUsR0FBRyxDQUFDLENBQUM7QUFDZixhQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7T0FDZCxNQUFLLElBQUcsWUFBWSxJQUFJLEVBQUUsRUFBRTtBQUMxQixrQkFBVSxHQUFHLEVBQUUsQ0FBQztBQUNoQixhQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7T0FDZDtLQUNGLE1BQU0sSUFBRyxZQUFZLElBQUksR0FBRyxFQUFFO0FBQzVCLGdCQUFVLEdBQUcsR0FBRyxDQUFDO0tBQ25CO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkI7O0FBRUQsUUFBTSxFQUFFLGtCQUFXOztBQUVqQixRQUFJLFNBQVMsR0FBRztBQUNkLGdCQUFVLEVBQUUsRUFBRTtBQUNkLGlCQUFXLEVBQUUsRUFBRTtBQUNmLGtCQUFZLEVBQUUsRUFBRTtLQUNqQixDQUFDOztBQUVGLFdBQ0U7OztNQUNFOzs7UUFDRSxvQkFBQyxTQUFTLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxBQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxBQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxBQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxBQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxBQUFDLEVBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxBQUFDLEdBQUU7UUFDdE4sb0JBQUMsVUFBVSxJQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxBQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxBQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxBQUFDLEdBQUU7T0FDOUc7TUFDTjs7O1FBQ0U7O1lBQUksRUFBRSxFQUFDLG9CQUFvQixFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFFLFNBQVMsQUFBQztVQUNqRTs7OztXQUF3QjtVQUN4QixvQkFBQyxTQUFTLElBQUUsV0FBVyxFQUFFLEVBQUMsaUJBQWlCLEVBQUUsS0FBSyxFQUFDLEFBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEFBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEFBQUMsRUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEFBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEFBQUMsR0FBRTtVQUNoTSxvQkFBQyxTQUFTLElBQUUsV0FBVyxFQUFFLEVBQUMsaUJBQWlCLEVBQUUsT0FBTyxFQUFDLEFBQUMsRUFBQSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEFBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEFBQUMsRUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEFBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEFBQUMsR0FBRTtVQUN6TSxvQkFBQyxTQUFTLElBQUUsV0FBVyxFQUFFLEVBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFDLEFBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEFBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEFBQUMsRUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEFBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEFBQUMsR0FBRTtVQUNyTSxvQkFBQyxTQUFTLElBQUUsV0FBVyxFQUFFLEVBQUMsaUJBQWlCLEVBQUUsUUFBUSxFQUFDLEFBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEFBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEFBQUMsRUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEFBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEFBQUMsR0FBRTtTQUM3TTtPQUNBO0tBQ0YsQ0FDTjtHQUNIO0NBQ0YsQ0FBQyxD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QkFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQTs7QUFFRCxRQUFJLFVBQVUsR0FBRztBQUNmLGdCQUFVLEVBQUMsRUFBRTtBQUNiLGVBQVMsRUFBRSxDQUFDLENBQUM7QUFDYixZQUFNLEVBQUUsRUFBRTtBQUNWLGNBQVEsRUFBQyxVQUFVO0FBQ25CLFdBQUssRUFBRSxFQUFFO0FBQ1QscUJBQWUsRUFBRSxNQUFNO0FBQ3ZCLGtCQUFZLEVBQUUsRUFBRTtLQUNqQixDQUFBOztBQUVELFFBQUksVUFBVSxHQUFHO0FBQ2YsZ0JBQVUsRUFBQyxFQUFFO0FBQ2IsZUFBUyxFQUFFLENBQUMsQ0FBQztBQUNiLGNBQVEsRUFBQyxVQUFVO0FBQ25CLFlBQU0sRUFBRSxFQUFFO0FBQ1YsV0FBSyxFQUFFLEVBQUU7QUFDVCxxQkFBZSxFQUFFLFFBQVE7QUFDekIsa0JBQVksRUFBRSxFQUFFO0tBQ2pCLENBQUE7O0FBRUQsUUFBSSxhQUFhLEdBQUcsQ0FBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNyQyxXQUNFOztRQUFLLFNBQVMsRUFBQyw0QkFBNEIsRUFBQyxLQUFLLEVBQUUsY0FBYyxBQUFDO01BQy9ELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztNQUNuQjs7O1FBQ0UsNkJBQU0sS0FBSyxFQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxPQUFPLEFBQUMsR0FBTztPQUMvRTtLQUNELENBQ047R0FDSDtDQUNGLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxudmFyIFNpbmdsZVBsYXllciA9IHJlcXVpcmUoJy4vc2luZ2xlcGxheWVyL3NpbmdsZXBsYXllci5qcycpO1xyXG52YXIgTXVsdGlQbGF5ZXIgPSByZXF1aXJlKCcuL211bHRpcGxheWVyL211bHRpcGxheWVyLmpzJyk7XHJcbnZhciBzb3VuZCA9IG5ldyBBdWRpbyhcIi4uL3NvdW5kL21hY2hpbmVzLm1wM1wiKTtcclxuXHJcbnZhciBNYWluQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICByZXR1cm4ge29wdGlvbiA6IFwiaG9tZVwiIH07XHJcbiB9LFxyXG5cclxuIGhhbmRsZU1lbnU6IGZ1bmN0aW9uKGNob2ljZSl7XHJcbiAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbjpjaG9pY2V9KTtcclxuIH0sXHJcblxyXG4gY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBzb3VuZC5wbGF5KCk7XHJcbiB9LFxyXG5cclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRpbGVTdHlsZSA9IHtcclxuICAgICAgbWFyZ2luVG9wOjEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNpbmdsZUJ1dHRvbiA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbWFyZ2luTGVmdDotODUwLFxyXG4gICAgICBtYXJnaW5Ub3A6IDUwMCxcclxuICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBtdWx0aXBsZUJ1dHRvbiA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbWFyZ2luTGVmdDotNTUwLFxyXG4gICAgICBtYXJnaW5Ub3A6IDUwMCxcclxuICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZXRJbWFnZSA9IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6NSxcclxuICAgICAgcGFkZGluZ1RvcDoyMCxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiA1LFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAyMCxcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgIHsoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb24gPT0gXCJob21lXCIpIHtcclxuICAgICAgICBzb3VuZC5wbGF5KCk7XHJcbiAgICAgICByZXR1cm4oXHJcbiAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIiBzdHlsZT17c2V0SW1hZ2V9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2JhY2tncm91bmQucG5nXCIgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiLz5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17dGhpcy5oYW5kbGVNZW51LmJpbmQodGhpcyxcInNpbmdsZVwiKX0gc3R5bGU9e3NpbmdsZUJ1dHRvbn0+U2luZ2xlUGxheWVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17dGhpcy5oYW5kbGVNZW51LmJpbmQodGhpcyxcIm11bHRpXCIpfSBzdHlsZT17bXVsdGlwbGVCdXR0b259Pk11bHRpUGxheWVyPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLm9wdGlvbiA9PSBcInNpbmdsZVwiKXtcclxuICAgICAgICBzb3VuZC5wYXVzZSgpO1xyXG4gICAgICAgIHNvdW5kLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxTaW5nbGVQbGF5ZXIgaGFuZGxlTWVudT17dGhpcy5oYW5kbGVNZW51LmJpbmQodGhpcywgXCJob21lXCIpfS8+XHJcbiAgICAgICk7XHJcbiAgICB9ZWxzZSBpZiAodGhpcy5zdGF0ZS5vcHRpb24gPT0gXCJtdWx0aVwiKXtcclxuICAgICAgc291bmQucGF1c2UoKTtcclxuICAgICAgc291bmQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPE11bHRpUGxheWVyIGhhbmRsZU1lbnU9e3RoaXMuaGFuZGxlTWVudS5iaW5kKHRoaXMsIFwiaG9tZVwiKX0vPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgICB9KSgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxNYWluQXBwIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuKTtcclxuIiwidmFyIFRpbGU9cmVxdWlyZSgnLi90aWxlLmpzJyk7XHJcblxyXG52YXIgR2FtZUJvYXJkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgcmVkVGFiID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjREIxNjI3XCIsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxyXG4gICAgICBwYWRkaW5nVG9wOiAyMCxcclxuICAgICAgcGFkZGluZ0xlZnQ6MzgsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBncmV5VGFiID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjFGMUYxXCIsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OjUsXHJcbiAgICAgIHRleHRBbGlnbjpcImxlZnRcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdGV4dENvbG9yID0ge1xyXG4gICAgICBjb2xvcjpcIndoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjI2MCxcclxuICAgICAgdG9wOjE1LFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMjUwLFxyXG4gICAgICB3aWR0aDogNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUyID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjQ2MCxcclxuICAgICAgdG9wOjE2MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlNCA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDoyNjAsXHJcbiAgICAgIHRvcDozNjAsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzMjAsXHJcbiAgICAgIHdpZHRoOiAyMjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU1ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjY3OCxcclxuICAgICAgdG9wOjU1LFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogNjc1LFxyXG4gICAgICB3aWR0aDogMjIwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlNiA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo0NjAsXHJcbiAgICAgIHRvcDoxOTAsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNTAsXHJcbiAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6ODgwLFxyXG4gICAgICB0b3A6ODAsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNjAsXHJcbiAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU2ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjExNSxcclxuICAgICAgdG9wOjgwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMjk1LFxyXG4gICAgICB3aWR0aDogOTAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU3ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjIxNyxcclxuICAgICAgdG9wOjE1LFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogNTk1LFxyXG4gICAgICB3aWR0aDogNDIwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlOCA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo1MjUsXHJcbiAgICAgIHRvcDoyMCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM3MCxcclxuICAgICAgd2lkdGg6IDEyMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTkgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6NjEyLFxyXG4gICAgICB0b3A6MTU1LFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzcwLFxyXG4gICAgICB3aWR0aDogMTQwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMTAgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6Nzk1LFxyXG4gICAgICB0b3A6MTU1LFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzcwLFxyXG4gICAgICB3aWR0aDogMTQwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzY29yZVRleHQgPSB7XHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMTEgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6NzkwLFxyXG4gICAgICB0b3A6MTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzMjAsXHJcbiAgICAgIHdpZHRoOiAyMjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHRpbGVzID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMTA7IGkgPjA7IGktLSkge1xyXG4gICAgICB2YXIgY29sID0gaSoxMDtcclxuICAgICAgaWYoaSUyID09PSAwKXtcclxuICAgICAgICBmb3IodmFyIGo9MDtqPD05O2orKyl7XHJcbiAgICAgICAgICB0aWxlcy5wdXNoKDxUaWxlICB2YWx1ZT17Y29sLWp9IGRpc3BsYWNlbWVudD17dGhpcy5wcm9wcy5kaWNlTnVtYmVyfSAgcmVkRGljZT17dGhpcy5wcm9wcy5yZWREaWNlfSBncmVlbkRpY2U9e3RoaXMucHJvcHMuZ3JlZW5EaWNlfSBibHVlRGljZT17dGhpcy5wcm9wcy5ibHVlRGljZX0geWVsbG93RGljZT17dGhpcy5wcm9wcy55ZWxsb3dEaWNlfSAgcGxheWVyTnVtYmVyPXt0aGlzLnByb3BzLnBsYXllck51bWJlcn0vPik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBmb3IodmFyIGo9OTtqPj0wO2otLSl7XHJcbiAgICAgICAgICB0aWxlcy5wdXNoKDxUaWxlIHZhbHVlPXtjb2wtan0gZGlzcGxhY2VtZW50PXt0aGlzLnByb3BzLmRpY2VOdW1iZXJ9ICByZWREaWNlPXt0aGlzLnByb3BzLnJlZERpY2V9IGdyZWVuRGljZT17dGhpcy5wcm9wcy5ncmVlbkRpY2V9IGJsdWVEaWNlPXt0aGlzLnByb3BzLmJsdWVEaWNlfSB5ZWxsb3dEaWNlPXt0aGlzLnByb3BzLnllbGxvd0RpY2V9ICBwbGF5ZXJOdW1iZXI9e3RoaXMucHJvcHMucGxheWVyTnVtYmVyfS8+KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBjb2wteHMtMTAgY29sLWxnLTEwXCIgc3R5bGU9e3JlZFRhYn0+XHJcbiAgICAgICAgICB7dGlsZXN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlNS5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGUxfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlMTEuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlMn0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTIuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlM30vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTEwLmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTh9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2U0LmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTl9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2U0MC5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGUxMH0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjIucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlNH0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9maXZlLnBuZ1wifSBzdHlsZT17YmFkZ2VTdHlsZTZ9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvbGFkZGVyLTIxLnBuZ1wifSBzdHlsZT17YmFkZ2VTdHlsZTV9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvbGFkZGVyLTIyLnBuZ1wifSBzdHlsZT17YmFkZ2VTdHlsZTd9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvbGFkZGVyLTIyLnBuZ1wifSBzdHlsZT17YmFkZ2VTdHlsZTExfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVCb2FyZDtcclxuIiwidmFyIEdhbWVCb2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkLmpzJyk7XHJcbnZhciBTY29yZUJvYXJkID0gcmVxdWlyZSgnLi9zY29yZWJvYXJkLmpzJyk7XHJcbnZhciBTY29yZUNhcmQgPSByZXF1aXJlKCcuL3Njb3JlY2FyZC5qcycpO1xyXG5cclxuXHJcblxyXG52YXIgTXVsdGlQbGF5ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblxyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgIHJldHVybiB7ZGljZU51bWJlciA6IDEgLCBwbGF5ZXJOdW1iZXI6MCwgcmVkRGljZTogMSwgcmVkU25ha2U6MCwgZ3JlZW5TbmFrZTogMCwgYmx1ZVNuYWtlOiAwLCB5ZWxsb3dTbmFrZTogMCwgIHJlZExhZGRlcjogMCwgZ3JlZW5MYWRkZXI6IDAsIGJsdWVMYWRkZXI6IDAsIHllbGxvd0xhZGRlcjowLCBncmVlbkRpY2U6IDEsIGJsdWVEaWNlOiAxLCB5ZWxsb3dEaWNlOiAxLCBkaWNlQ291bnRSZWQ6IDAsIHNpeENvdW50UmVkOiAwICxkaWNlQ291bnRHcmVlbjogMCwgc2l4Q291bnRHcmVlbjogMCxkaWNlQ291bnRCbHVlOiAwLCBzaXhDb3VudEJsdWU6IDAsIGRpY2VDb3VudFllbGxvdzogMCwgc2l4Q291bnRZZWxsb3c6IDB9O1xyXG4gfSxcclxuXHJcbiAgZ2V0Q291bnQ6IGZ1bmN0aW9uKHZhbCwgcGxheWVyTnVtYmVyKSB7XHJcbiAgICBpZigodmFsID09IDMpIHx8ICh2YWwgPT0gMzMpIHx8ICh2YWwgPT0gIDM5KSB8fCAodmFsID09ICA1OCkgfHwgKHZhbCA9PSAgNzMpIHx8ICh2YWwgPT0gIDI2KSB8fCAodmFsID09ICAyOCkgICl7XHJcbiAgICAgIGlmKHBsYXllck51bWJlcj09PTEpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZExhZGRlcjogdGhpcy5zdGF0ZS5yZWRMYWRkZXIgKyAxIH0pO1xyXG4gICAgICB9ZWxzZSBpZihwbGF5ZXJOdW1iZXIgPT09MiApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2dyZWVuTGFkZGVyOiB0aGlzLnN0YXRlLnJlZExhZGRlciArIDEgfSk7XHJcbiAgICAgIH1lbHNlIGlmKHBsYXllck51bWJlciA9PT0zICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ymx1ZUxhZGRlcjogdGhpcy5zdGF0ZS5yZWRMYWRkZXIgKyAxIH0pO1xyXG4gICAgICB9ZWxzZSBpZihwbGF5ZXJOdW1iZXIgPT09NCApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3llbGxvd0xhZGRlcjogdGhpcy5zdGF0ZS5yZWRMYWRkZXIgKyAxIH0pO1xyXG4gICAgICB9XHJcbiAgICB9ZWxzZSBpZigodmFsPT05OCkgfHwodmFsPT0gOTUpICB8fCAodmFsPT00NikgfHwgKHZhbD09ODkpIHx8ICh2YWw9PTY1KSB8fCAodmFsPT01MykgfHwgKHZhbD09MzApIHx8ICh2YWw9PTMyKSl7XHJcbiAgICAgIGlmKHBsYXllck51bWJlcj09PTEpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZFNuYWtlOiB0aGlzLnN0YXRlLnJlZFNuYWtlICsgMSB9KTtcclxuICAgICAgfWVsc2UgaWYocGxheWVyTnVtYmVyID09PTIgKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtncmVlblNuYWtlOiB0aGlzLnN0YXRlLmdyZWVuU25ha2UgKyAxIH0pO1xyXG4gICAgICB9ZWxzZSBpZihwbGF5ZXJOdW1iZXIgPT09MyApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JsdWVTbmFrZTogdGhpcy5zdGF0ZS5ibHVlU25ha2UgKyAxIH0pO1xyXG4gICAgICB9ZWxzZSBpZihwbGF5ZXJOdW1iZXIgPT09NCApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3llbGxvd1NuYWtlOiB0aGlzLnN0YXRlLnllbGxvd1NuYWtlICsgMSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGhhbmRsZURpY2U6IGZ1bmN0aW9uKGRpY2VOdW1iZXIsIHBsYXllck51bWJlciwgc2l4Q291bnQpIHtcclxuICAgIHZhciB0YXAgPSBuZXcgQXVkaW8oXCIuLi9zb3VuZC90YXAubXAzXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJUaGlzLnN0YXRlLnBsYXllci0tXCIsIHBsYXllck51bWJlcik7XHJcbiAgICB0YXAucGxheSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyTnVtYmVyOiBwbGF5ZXJOdW1iZXIgfSk7XHJcbiAgICBpZihwbGF5ZXJOdW1iZXIgPT09IDEpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtkaWNlQ291bnRSZWQ6IHRoaXMuc3RhdGUuZGljZUNvdW50UmVkICsgMSwgc2l4Q291bnRSZWQ6IHNpeENvdW50fSk7XHJcbiAgICAgIHZhciB2YWwgPSAgdGhpcy5zdGF0ZS5yZWREaWNlICsgZGljZU51bWJlciArIDE7XHJcbiAgICAgIHRoaXMuZ2V0Q291bnQodmFsLHBsYXllck51bWJlcik7XHJcbiAgICAgIHZhciBmaW5hbCA9IHRoaXMuc2V0RGlzcGxhY2VtZW50KHZhbCk7XHJcblxyXG4gICAgICBpZihmaW5hbCA8IDEwMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVkRGljZTogZmluYWx9KTtcclxuICAgICAgfWVsc2UgaWYgKCBmaW5hbCA9PT0gMTAwKXtcclxuICAgICAgICBhbGVydChcIlJlZCBXaW5zXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZERpY2U6IGZpbmFsfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJUZXN0aW5nIGZpbmFsIHZhbHVlXCIsZmluYWwgKTtcclxuICAgIH1lbHNlIGlmKCBwbGF5ZXJOdW1iZXIgPT09IDIpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtkaWNlQ291bnRHcmVlbjogdGhpcy5zdGF0ZS5kaWNlQ291bnRHcmVlbiArIDEsIHNpeENvdW50R3JlZW46IHNpeENvdW50fSk7XHJcbiAgICAgIHZhciB2YWwgPSAgdGhpcy5zdGF0ZS5ncmVlbkRpY2UgKyBkaWNlTnVtYmVyICsgMTtcclxuICAgICAgdGhpcy5nZXRDb3VudCh2YWwscGxheWVyTnVtYmVyKTtcclxuICAgICAgdmFyIGZpbmFsID0gdGhpcy5zZXREaXNwbGFjZW1lbnQodmFsKTtcclxuICAgICAgaWYoZmluYWwgPCAxMDApIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtncmVlbkRpY2U6IGZpbmFsfSk7XHJcbiAgICAgIH1lbHNlIGlmICggZmluYWwgPT09IDEwMCl7XHJcbiAgICAgICAgYWxlcnQoXCJHcmVlbiBXaW5zXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2dyZWVuRGljZTogZmluYWx9KTtcclxuICAgICAgfVxyXG4gICAgfWVsc2UgaWYgKCBwbGF5ZXJOdW1iZXIgPT09IDMpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtkaWNlQ291bnRCbHVlOiB0aGlzLnN0YXRlLmRpY2VDb3VudEJsdWUgKyAxLCBzaXhDb3VudEJsdWU6IHNpeENvdW50fSk7XHJcbiAgICAgIHZhciB2YWwgPSAgdGhpcy5zdGF0ZS5ibHVlRGljZSArIGRpY2VOdW1iZXIgKyAxO1xyXG4gICAgICB0aGlzLmdldENvdW50KHZhbCxwbGF5ZXJOdW1iZXIpO1xyXG4gICAgICB2YXIgZmluYWwgPSB0aGlzLnNldERpc3BsYWNlbWVudCh2YWwpO1xyXG4gICAgICBpZihmaW5hbCA8MTAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2JsdWVEaWNlOiBmaW5hbCB9KTtcclxuICAgICAgfWVsc2UgaWYgKCBmaW5hbCA9PT0gMTAwKXtcclxuICAgICAgICBhbGVydChcIkJsdWUgV2luc1wiKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtibHVlRGljZTogZmluYWwgfSk7XHJcbiAgICAgIH1cclxuICAgIH1lbHNlIGlmICggcGxheWVyTnVtYmVyID09PSA0ICl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RpY2VDb3VudFllbGxvdzogdGhpcy5zdGF0ZS5kaWNlQ291bnRZZWxsb3cgKyAxLCBzaXhDb3VudFllbGxvdzogc2l4Q291bnR9KTtcclxuICAgICAgdmFyIHZhbCA9ICB0aGlzLnN0YXRlLnllbGxvd0RpY2UgKyBkaWNlTnVtYmVyICsgMTtcclxuICAgICAgdGhpcy5nZXRDb3VudCh2YWwscGxheWVyTnVtYmVyKTtcclxuICAgICAgdmFyIGZpbmFsID0gdGhpcy5zZXREaXNwbGFjZW1lbnQodmFsKTtcclxuICAgICAgaWYoZmluYWwgPDEwMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7eWVsbG93RGljZTogZmluYWx9KTtcclxuICAgICAgfWVsc2UgaWYgKCBmaW5hbCA9PT0gMTAwKXtcclxuICAgICAgICBhbGVydChcIlllbGxvdyBXaW5zXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3llbGxvd0RpY2U6IGZpbmFsfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBkaXNwbGFjZW1lbnQgPSB0aGlzLnN0YXRlLmRpY2VOdW1iZXIgKyBkaWNlTnVtYmVyICsxO1xyXG5cclxuICB9LFxyXG5cclxuICBzZXREaXNwbGFjZW1lbnQ6IGZ1bmN0aW9uKGRpc3BsYWNlbWVudCkge1xyXG4gICAgdmFyIGZpbmFsVmFsdWUgPSBkaXNwbGFjZW1lbnQ7XHJcbiAgICB2YXIgbGFkZGVyID0gbmV3IEF1ZGlvKFwiLi4vc291bmQvdXAubXAzXCIpO1xyXG4gICAgdmFyIHNuYWtlID0gbmV3IEF1ZGlvKFwiLi4vc291bmQvZG93bi5tcDNcIik7XHJcbiAgICBpZihkaXNwbGFjZW1lbnQgPCAxMDApe1xyXG4gICAgICBpZihkaXNwbGFjZW1lbnQgPT0gMyl7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gMjQ7XHJcbiAgICAgICBsYWRkZXIucGxheSgpO1xyXG4gICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gMzMpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA4NztcclxuICAgICAgIGxhZGRlci5wbGF5KCk7XHJcbiAgICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSAzOSkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDgxO1xyXG4gICAgICAgbGFkZGVyLnBsYXkoKTtcclxuICAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDU4KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gODU7XHJcbiAgICAgICBsYWRkZXIucGxheSgpO1xyXG4gICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gNzMpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA5MjtcclxuICAgICAgIGxhZGRlci5wbGF5KCk7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDk4KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gNTk7XHJcbiAgICAgICBzbmFrZS5wbGF5KCk7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDk1KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gMjY7XHJcbiAgICAgICBzbmFrZS5wbGF5KCk7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDQ2KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gMjc7XHJcbiAgICAgICBzbmFrZS5wbGF5KCk7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDg5KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gMTE7XHJcbiAgICAgICBzbmFrZS5wbGF5KCk7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDY1KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gNDtcclxuICAgICAgIHNuYWtlLnBsYXkoKTtcclxuICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gNTMpIHtcclxuICAgICAgICBmaW5hbFZhbHVlID0gMTI7XHJcbiAgICAgICAgc25ha2UucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDEwMCkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDEwMDtcclxuICAgIH1cclxuICAgIHJldHVybiBmaW5hbFZhbHVlO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIHNjb3JlQ2FyZCA9IHtcclxuICAgICAgcGFkZGluZ1RvcDogMjAsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAyMCxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiAyMFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8R2FtZUJvYXJkIHJlZERpY2U9e3RoaXMuc3RhdGUucmVkRGljZX0gZ3JlZW5EaWNlPXt0aGlzLnN0YXRlLmdyZWVuRGljZX0gYmx1ZURpY2U9e3RoaXMuc3RhdGUuYmx1ZURpY2V9IHllbGxvd0RpY2U9e3RoaXMuc3RhdGUueWVsbG93RGljZX0gZGljZU51bWJlcj17dGhpcy5zdGF0ZS5kaWNlTnVtYmVyfSBwbGF5ZXJOdW1iZXI9e3RoaXMuc3RhdGUucGxheWVyTnVtYmVyfS8+XHJcbiAgICAgICAgICA8U2NvcmVCb2FyZCBjb25uZWN0Qm9hcmQ9e3RoaXMuaGFuZGxlRGljZX0gZGljZU51bWJlcj17dGhpcy5zdGF0ZS5kaWNlTnVtYmVyfSBoYW5kbGVNZW51PXt0aGlzLnByb3BzLmhhbmRsZU1lbnV9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHVsIGlkPVwiZHJhZ2dhYmxlUGFuZWxMaXN0XCIgY2xhc3NOYW1lPVwiY29sLW1kLTEwXCIgc3R5bGU9e3Njb3JlQ2FyZH0+XHJcbiAgICAgICAgICAgIDxoMj5HYW1lIFN0YXRpc3RpY3M8L2gyPlxyXG4gICAgICAgICAgICA8U2NvcmVDYXJkICBoZWFkZXJTdHlsZT17e1wiYmFja2dyb3VuZENvbG9yXCI6IFwicmVkXCJ9fSBkaWNlQ291bnQ9e3RoaXMuc3RhdGUuZGljZUNvdW50UmVkfSBzaXhDb3VudD17dGhpcy5zdGF0ZS5zaXhDb3VudFJlZH0gbGFkZGVyQ291bnQ9e3RoaXMuc3RhdGUucmVkTGFkZGVyfSBzbmFrZUNvdW50PXt0aGlzLnN0YXRlLnJlZFNuYWtlfS8+XHJcbiAgICAgICAgICAgIDxTY29yZUNhcmQgIGhlYWRlclN0eWxlPXt7XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJncmVlblwifX1kaWNlQ291bnQ9e3RoaXMuc3RhdGUuZGljZUNvdW50R3JlZW59IHNpeENvdW50PXt0aGlzLnN0YXRlLnNpeENvdW50R3JlZW59IGxhZGRlckNvdW50PXt0aGlzLnN0YXRlLmdyZWVuTGFkZGVyfSBzbmFrZUNvdW50PXt0aGlzLnN0YXRlLmdyZWVuU25ha2V9Lz5cclxuICAgICAgICAgICAgPFNjb3JlQ2FyZCAgaGVhZGVyU3R5bGU9e3tcImJhY2tncm91bmRDb2xvclwiOiBcImJsdWVcIn19IGRpY2VDb3VudD17dGhpcy5zdGF0ZS5kaWNlQ291bnRCbHVlfSBzaXhDb3VudD17dGhpcy5zdGF0ZS5zaXhDb3VudEJsdWV9IGxhZGRlckNvdW50PXt0aGlzLnN0YXRlLmJsdWVMYWRkZXJ9IHNuYWtlQ291bnQ9e3RoaXMuc3RhdGUuYmx1ZVNuYWtlfS8+XHJcbiAgICAgICAgICAgIDxTY29yZUNhcmQgIGhlYWRlclN0eWxlPXt7XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJ5ZWxsb3dcIn19IGRpY2VDb3VudD17dGhpcy5zdGF0ZS5kaWNlQ291bnRZZWxsb3d9IHNpeENvdW50PXt0aGlzLnN0YXRlLnNpeENvdW50WWVsbG93fSBsYWRkZXJDb3VudD17dGhpcy5zdGF0ZS55ZWxsb3dMYWRkZXJ9IHNuYWtlQ291bnQ9e3RoaXMuc3RhdGUueWVsbG93U25ha2V9Lz5cclxuICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE11bHRpUGxheWVyO1xyXG4iLCJ2YXIgcmFuZG9tZGljZSA9IDA7XHJcbnZhciBjb3VudCA9IDA7XHJcbnZhciBzaXhDb3VudCA9IDA7XHJcbnZhciBtZXNzYWdlID0gXCJcIjtcclxuXHJcbnZhciBTY29yZUJvYXJkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgIHJldHVybiB7ZGljZSA6IFwiLi4vaW1hZ2VzL3JvdGF0aW5nLmpwZ1wiLCBwbGF5ZXJOdW1iZXI6IDEsICBtZXNzYWdlOicnLCBzaXhlckNvdW50OiAwfTtcclxuIH0sXHJcblxyXG4gaGFuZGxlRGljZTogZnVuY3Rpb24oKSB7XHJcbiAgIHZhciBwbGF5ZXJWYWwgPSAwO1xyXG4gICB2YXIgaW1hZ2VBcnJheSA9IFtcIi4uL2ltYWdlcy8xLmdpZlwiLCBcIi4uL2ltYWdlcy8yLmdpZlwiLCBcIi4uL2ltYWdlcy8zLmdpZlwiLCBcIi4uL2ltYWdlcy80LmdpZlwiLCBcIi4uL2ltYWdlcy81LmdpZlwiLCBcIi4uL2ltYWdlcy82LmdpZlwiXTtcclxuICAgcmFuZG9tZGljZT1NYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqNSk7XHJcbiAgIGlmKHJhbmRvbWRpY2UgPT09IDUpe1xyXG4gICAgIHRoaXMuc2V0U3RhdGUoe3NpeGVyQ291bnQ6IHRoaXMuc3RhdGUuc2l4ZXJDb3VudCArIDF9KTtcclxuICAgfVxyXG4gICBpZih0aGlzLnN0YXRlLnBsYXllck51bWJlcjw0KXtcclxuICAgICBpZihyYW5kb21kaWNlID09PSA1ICYmIGNvdW50IDwyKSB7XHJcbiAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOlwiR290IGEgNiByb2xsIGFnYWluXCJ9KTtcclxuICAgICAgIGNvdW50ID0gY291bnQgKzE7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBjb3VudCB5b3UgYXJlIHNlYXJjaGluZyBpc1wiLCBjb3VudCwgdGhpcy5zdGF0ZS5zaXhlckNvdW50KTtcclxuICAgICAgIHRoaXMuc2V0U3RhdGUoe3BsYXllck51bWJlcjp0aGlzLnN0YXRlLnBsYXllck51bWJlcn0pO1xyXG4gICAgIH1lbHNle1xyXG4gICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7c2l4ZXJDb3VudDowfSk7XHJcbiAgICAgICB0aGlzLnNldFN0YXRlKHtwbGF5ZXJOdW1iZXI6dGhpcy5zdGF0ZS5wbGF5ZXJOdW1iZXIgKyAxLCBtZXNzYWdlOiAnJ30pO1xyXG4gICAgIH1cclxuICAgfVxyXG4gICBpZih0aGlzLnN0YXRlLnBsYXllck51bWJlcj49NCl7XHJcbiAgICAgY291bnQgPSAwO1xyXG4gICAgIHRoaXMuc2V0U3RhdGUoe3BsYXllck51bWJlcjogMSwgbWVzc2FnZTogJyd9KTtcclxuICAgfVxyXG5cclxuICAgdGhpcy5zZXRTdGF0ZSh7ZGljZTppbWFnZUFycmF5W3JhbmRvbWRpY2VdfSk7XHJcbiAgIGNvbnNvbGUubG9nKFwiQmVmb3JlIGNvbm5lY3RCb2FyZFwiLCB0aGlzLnN0YXRlLnBsYXllck51bWJlcik7XHJcbiAgIGlmKHRoaXMuc3RhdGUucGxheWVyTnVtYmVyPT01KXtcclxuICAgICBwbGF5ZXJWYWwgPSAxO1xyXG4gICB9ZWxzZXtcclxuICAgICBwbGF5ZXJWYWwgPSB0aGlzLnN0YXRlLnBsYXllck51bWJlcjtcclxuICAgfVxyXG5cclxuICAgdGhpcy5wcm9wcy5jb25uZWN0Qm9hcmQocmFuZG9tZGljZSwgcGxheWVyVmFsLCB0aGlzLnN0YXRlLnNpeGVyQ291bnQpO1xyXG4gfSxcclxuXHJcbiByZWxvYWRlciA6IGZ1bmN0aW9uKCkge1xyXG4gICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2V0UGFkZGluZ0xlZnQgPSB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OjIwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNldFBhZGRpbmdUb3AgPSB7XHJcbiAgICAgIHBhZGRpbmdUb3A6MzBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0Q2hhcnRXaWR0aCA9IHtcclxuICAgICAgd2lkdGg6IFwiNzUlXCIsXHJcbiAgICAgIGhlaWdodDogXCI3NSVcIlxyXG4gICAgfVxyXG5cclxuICAgIHZhciBtZXNzYWdlU3R5bGUgPSB7XHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgY29sb3I6IFwib3JhbmdlXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGljZUltYWdlID0ge1xyXG4gICAgICBtYXJnaW5Ub3AgOiA1LFxyXG4gICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGljZUJ1dHRvbiA9IHtcclxuICAgICAgbWFyZ2luVG9wIDogNSxcclxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNldENvbG9yID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBjb2wteHMtMiBjb2wtbGctMlwiIHN0eWxlPXtzZXRDb2xvcn0+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT17ZGljZUJ1dHRvbn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17dGhpcy5oYW5kbGVEaWNlfT5UaHJvdyBEaWNlPC9idXR0b24+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5kaWNlTnVtYmVyID09PSAxMDAgPyBcIi4uL2ltYWdlcy9yb3RhdGluZy5qcGdcIiA6IHRoaXMuc3RhdGUuZGljZX0gd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBzdHlsZT17ZGljZUltYWdlfSAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9e2RpY2VCdXR0b259IG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlTWVudX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+R28gVG8gTWVudTwvYnV0dG9uPlxyXG4gICAgICAgICAgPHA+e3RoaXMuc3RhdGUubWVzc2FnZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNjb3JlQm9hcmQ7XHJcbiIsInZhciBTY29yZUNhcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciByZWRUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxyXG4gICAgICBwYWRkaW5nTGVmdDo1MCxcclxuICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBncmV5VGFiID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjFGMUYxXCIsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OjUsXHJcbiAgICAgIHRleHRBbGlnbjpcImxlZnRcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdGV4dFBvcyA9IHtcclxuICAgICAgdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwicGFuZWxcIiBzdHlsZT17dGhpcy5wcm9wcy5oZWFkZXJTdHlsZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+TnVtYmVywqBvZsKgdGhyb3dzwqBkb25lLcKtPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGV4dFBvc30+e3RoaXMucHJvcHMuZGljZUNvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwid2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkPk51bWJlcsKgb2bCoHRpbWVzwqBhwqDigItzaXggd2FzwqByb2xsZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZXh0UG9zfT57dGhpcy5wcm9wcy5zaXhDb3VudH08L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDx0ZD5OdW1iZXLCoG9mwqBsYWRkZXJzwqBjbGltYmVkPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGV4dFBvc30+e3RoaXMucHJvcHMubGFkZGVyQ291bnR9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJkYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZD5OdW1iZXLCoG9mwqBzbmFrZXMgZW5jb3VudGVyZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZXh0UG9zfT57dGhpcy5wcm9wcy5zbmFrZUNvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2NvcmVDYXJkO1xyXG4iLCJ2YXIgVGlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHJldmVudWVTdHlsZSA9IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbToyMCxcclxuICAgICAgcGFkZGluZ1RvcDoyMCxcclxuICAgICAgZm9udFNpemU6MThcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICB2YXIgc291cmNlU3R5bGUgPSB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206MjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6MjBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHJvd1N0eWxlID0ge1xyXG4gICAgICBib3JkZXJCb3R0b206IFwiM3B4IHNvbGlkIHdoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJvZHlTdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0Y1RjVGNVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoZWFkZXJTdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0YxRjFGMVwiLFxyXG4gICAgICBib3JkZXJCb3R0b206IFwiM3B4IHNvbGlkIHdoaXRlXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0UGFkZGluZ0xlZnQgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOjEwLFxyXG4gICAgICBwYWRkaW5nVG9wOjEwLFxyXG4gICAgICBwYWRkaW5nTGVmdDogMTAsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0UGFkZGluZ1RvcCA9IHtcclxuICAgICAgcGFkZGluZ1RvcDozMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMTEgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6MTAsXHJcbiAgICAgIG1hcmdpblRvcDogLTUsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTEyID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0OjEwLFxyXG4gICAgICBtYXJnaW5Ub3A6IC01LFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgIH07XHJcblxyXG4gICAgaWYodGhpcy5wcm9wcy5wbGF5ZXJOdW1iZXIgPT09IDQgfHwgMyB8fCAyIHx8IDEpe1xyXG4gICAgICB2YXIgaGlnaGxpZ2h0ID0ge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6MTAsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAtNSxcclxuICAgICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHZhciBoaWdobGlnaHQgPSB7XHJcbiAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgIGZvbnRTaXplOiAwLFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZGVEaXYgPSB7XHJcbiAgICAgIHdpZHRoOiAwLFxyXG4gICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgIGZvbnRTaXplOiAwLFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaWdobGlnaHQxID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0Oi01LFxyXG4gICAgICBtYXJnaW5Ub3A6LTMsXHJcbiAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2hsaWdodDIgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6MTcsXHJcbiAgICAgIG1hcmdpblRvcDogLTMsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGlnaGxpZ2h0MyA9IHtcclxuICAgICAgbWFyZ2luTGVmdDozOSxcclxuICAgICAgbWFyZ2luVG9wOiAtMyxcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2hsaWdodDQgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6NjAsXHJcbiAgICAgIG1hcmdpblRvcDogLTMsXHJcbiAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2xpZ2h0QXJyYXkgPSBbIDEsIDIwLCA1MCwgNjBdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMSBjb2wteHMtMSBjb2wtbGctMVwiIHN0eWxlPXtzZXRQYWRkaW5nTGVmdH0+XHJcbiAgICAgICAge3RoaXMucHJvcHMudmFsdWV9XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIDxkaXYgIHN0eWxlPXsgdGhpcy5wcm9wcy5yZWREaWNlID09PSB0aGlzLnByb3BzLnZhbHVlID8gaGlnaGxpZ2h0MSA6IGhpZGVEaXZ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgIHN0eWxlPXsgdGhpcy5wcm9wcy5ncmVlbkRpY2UgPT09IHRoaXMucHJvcHMudmFsdWUgPyBoaWdobGlnaHQyIDogaGlkZURpdn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiAgc3R5bGU9eyB0aGlzLnByb3BzLmJsdWVEaWNlID09PSB0aGlzLnByb3BzLnZhbHVlID8gaGlnaGxpZ2h0MyA6IGhpZGVEaXZ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgIHN0eWxlPXsgdGhpcy5wcm9wcy55ZWxsb3dEaWNlID09PSB0aGlzLnByb3BzLnZhbHVlID8gaGlnaGxpZ2h0NCA6IGhpZGVEaXZ9PjwvZGl2PlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGlsZTtcclxuIiwidmFyIFRpbGU9cmVxdWlyZSgnLi90aWxlLmpzJyk7XHJcblxyXG52YXIgR2FtZUJvYXJkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgcmVkVGFiID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjREIxNjI3XCIsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxyXG4gICAgICBwYWRkaW5nVG9wOiAyMCxcclxuICAgICAgcGFkZGluZ0xlZnQ6NTBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGdyZXlUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgcGFkZGluZ0xlZnQ6NSxcclxuICAgICAgdGV4dEFsaWduOlwibGVmdFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0ZXh0Q29sb3IgPSB7XHJcbiAgICAgIGNvbG9yOlwid2hpdGVcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTEgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MjYwLFxyXG4gICAgICB0b3A6MTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAyNTAsXHJcbiAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTIgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6NDYwLFxyXG4gICAgICB0b3A6MTYwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICB3aWR0aDogNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU0ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjI2MCxcclxuICAgICAgdG9wOjM2MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDMyMCxcclxuICAgICAgd2lkdGg6IDIyMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6Njc4LFxyXG4gICAgICB0b3A6NTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiA2NzUsXHJcbiAgICAgIHdpZHRoOiAyMjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU2ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjQ2MCxcclxuICAgICAgdG9wOjE5MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMyA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo4ODAsXHJcbiAgICAgIHRvcDo4MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM2MCxcclxuICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTYgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MTE1LFxyXG4gICAgICB0b3A6ODAsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAyOTUsXHJcbiAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTcgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MjE3LFxyXG4gICAgICB0b3A6MTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiA1OTUsXHJcbiAgICAgIHdpZHRoOiA0MjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU4ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjUyNSxcclxuICAgICAgdG9wOjIwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzcwLFxyXG4gICAgICB3aWR0aDogMTIwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlOSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo2MTIsXHJcbiAgICAgIHRvcDoxNTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNzAsXHJcbiAgICAgIHdpZHRoOiAxNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxMCA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo3OTUsXHJcbiAgICAgIHRvcDoxNTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNzAsXHJcbiAgICAgIHdpZHRoOiAxNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNjb3JlVGV4dCA9IHtcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxMSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo3OTAsXHJcbiAgICAgIHRvcDoxNSxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDMyMCxcclxuICAgICAgd2lkdGg6IDIyMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdGlsZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAxMDsgaSA+MDsgaS0tKSB7XHJcbiAgICAgIHZhciBjb2wgPSBpKjEwO1xyXG4gICAgICBpZihpJTIgPT09IDApe1xyXG4gICAgICAgIGZvcih2YXIgaj0wO2o8PTk7aisrKXtcclxuICAgICAgICAgIHRpbGVzLnB1c2goPFRpbGUgdmFsdWU9e2NvbC1qfSByZWREaWNlPXt0aGlzLnByb3BzLnJlZERpY2V9IC8+KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGZvcih2YXIgaj05O2o+PTA7ai0tKXtcclxuICAgICAgICAgIHRpbGVzLnB1c2goPFRpbGUgdmFsdWU9e2NvbC1qfSByZWREaWNlPXt0aGlzLnByb3BzLnJlZERpY2V9Lz4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC14cy0xMCBjb2wtbGctMTBcIiBzdHlsZT17cmVkVGFifT5cclxuICAgICAgICAgIHt0aWxlc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2U1LmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTF9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2UxMS5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGUyfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlMi5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGUzfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlMTAuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlOH0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTQuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlOX0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTQwLmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTEwfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2xhZGRlci0yMi5wbmdcIn0gc3R5bGU9e2JhZGdlU3R5bGU0fS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2ZpdmUucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlNn0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjEucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlNX0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjIucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlN30vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjIucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlMTF9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZUJvYXJkO1xyXG4iLCJ2YXIgcmFuZG9tZGljZSA9IDA7XHJcbnZhciBjb3VudCA9IDA7XHJcbnZhciBzaXhDb3VudCA9IDA7XHJcbnZhciBtZXNzYWdlID0gXCJcIjtcclxuXHJcbnZhciBTY29yZUJvYXJkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgIHJldHVybiB7ZGljZSA6IFwiLi4vaW1hZ2VzL3JvdGF0aW5nLmpwZ1wiLCBwbGF5ZXJOdW1iZXI6IDEsICBtZXNzYWdlOicnLCBzaXhlckNvdW50OiAwfTtcclxuIH0sXHJcblxyXG4gaGFuZGxlRGljZTogZnVuY3Rpb24oKSB7XHJcbiAgIHZhciBpbWFnZUFycmF5ID0gW1wiLi4vaW1hZ2VzLzEuZ2lmXCIsIFwiLi4vaW1hZ2VzLzIuZ2lmXCIsIFwiLi4vaW1hZ2VzLzMuZ2lmXCIsIFwiLi4vaW1hZ2VzLzQuZ2lmXCIsIFwiLi4vaW1hZ2VzLzUuZ2lmXCIsIFwiLi4vaW1hZ2VzLzYuZ2lmXCJdO1xyXG4gICByYW5kb21kaWNlPU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo1KTtcclxuICAgaWYocmFuZG9tZGljZSA9PT0gNSl7XHJcbiAgICAgIHNpeENvdW50ID0gc2l4Q291bnQrMVxyXG4gICB9XHJcbiAgIHRoaXMuc2V0U3RhdGUoe2RpY2U6aW1hZ2VBcnJheVtyYW5kb21kaWNlXX0pO1xyXG4gICB0aGlzLnByb3BzLmNvbm5lY3RCb2FyZChyYW5kb21kaWNlLCBzaXhDb3VudCk7XHJcbiB9LFxyXG5cclxuIHJlbG9hZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gfSxcclxuXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBzZXRQYWRkaW5nTGVmdCA9IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6MjBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0UGFkZGluZ1RvcCA9IHtcclxuICAgICAgcGFkZGluZ1RvcDozMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZXRDaGFydFdpZHRoID0ge1xyXG4gICAgICB3aWR0aDogXCI3NSVcIixcclxuICAgICAgaGVpZ2h0OiBcIjc1JVwiXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1lc3NhZ2VTdHlsZSA9IHtcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICBjb2xvcjogXCJvcmFuZ2VcIlxyXG4gICAgfVxyXG5cclxuICAgIHZhciBkaWNlSW1hZ2UgPSB7XHJcbiAgICAgIG1hcmdpblRvcCA6IDUsXHJcbiAgICAgIGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIlxyXG4gICAgfVxyXG5cclxuICAgIHZhciBkaWNlQnV0dG9uID0ge1xyXG4gICAgICBtYXJnaW5Ub3AgOiA1LFxyXG4gICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0Q29sb3IgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIGNvbC14cy0yIGNvbC1sZy0yXCIgc3R5bGU9e3NldENvbG9yfT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPXtkaWNlQnV0dG9ufSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZURpY2V9PlRocm93IERpY2U8L2J1dHRvbj5cclxuICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmRpY2VOdW1iZXIgPT09IDEwMCA/IFwiLi4vaW1hZ2VzL3JvdGF0aW5nLmpwZ1wiIDogdGhpcy5zdGF0ZS5kaWNlfSB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHN0eWxlPXtkaWNlSW1hZ2V9IC8+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT17ZGljZUJ1dHRvbn0gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVNZW51fSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5HbyBUbyBNZW51PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNjb3JlQm9hcmQ7XHJcbiIsInZhciBTY29yZUNhcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciByZWRUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxyXG4gICAgICBwYWRkaW5nTGVmdDo1MCxcclxuICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBncmV5VGFiID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjFGMUYxXCIsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OjUsXHJcbiAgICAgIHRleHRBbGlnbjpcImxlZnRcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdGV4dENvbG9yID0ge1xyXG4gICAgICBjb2xvcjpcIndoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGxpIGNsYXNzTmFtZT1cInBhbmVsXCIgc3R5bGU9e3RoaXMucHJvcHMuaGVhZGVyU3R5bGV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkPk51bWJlcsKgb2bCoHRocm93c8KgZG9uZS3CrTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuZGljZUNvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwid2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkPk51bWJlcsKgb2bCoHRpbWVzwqBhwqDigItzaXggd2FzwqByb2xsZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLnNpeENvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkPk51bWJlcsKgb2bCoGxhZGRlcnPCoGNsaW1iZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLmxhZGRlckNvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+TnVtYmVywqBvZsKgc25ha2VzIGVuY291bnRlcmVkPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5zbmFrZUNvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2NvcmVDYXJkO1xyXG4iLCJcclxudmFyIG1lc3NhZ2UxID0gJ1Rlc3RpbmcnO1xyXG52YXIgR2FtZUJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQuanMnKTtcclxudmFyIFNjb3JlQm9hcmQgPSByZXF1aXJlKCcuL3Njb3JlYm9hcmQuanMnKTtcclxudmFyIFNjb3JlQ2FyZCA9IHJlcXVpcmUoJy4vc2NvcmVjYXJkLmpzJyk7XHJcblxyXG5cclxudmFyIFNpbmdsZVBsYXllciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgcmV0dXJuIHtkaWNlTnVtYmVyIDogMSAsIHJlZERpY2U6IDEsIGxhZGRlckNvdW50OiAwLCBzbmFrZUNvdW50OiAwLCBkaWNlQ291bnQ6IDAsIHNpeENvdW50OiAwfTtcclxuIH0sXHJcblxyXG5cclxuXHJcblxyXG4gIGdldENvdW50OiBmdW5jdGlvbih2YWwpIHtcclxuICAgIGlmKCh2YWwgPT0gMykgfHwgKHZhbCA9PSAzMykgfHwgKHZhbCA9PSAgMzkpIHx8ICh2YWwgPT0gIDU4KSB8fCAodmFsID09ICA3MykgfHwgKHZhbCA9PSAgMjYpIHx8ICh2YWwgPT0gIDI4KSAgKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsYWRkZXJDb3VudDogdGhpcy5zdGF0ZS5sYWRkZXJDb3VudCArIDEgfSk7XHJcbiAgICB9ZWxzZSBpZigodmFsPT05OCkgfHwodmFsPT0gOTUpICB8fCAodmFsPT00NikgfHwgKHZhbD09ODkpIHx8ICh2YWw9PTY1KSB8fCAodmFsPT01MykgfHwgKHZhbD09MzApIHx8ICh2YWw9PTMyKSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c25ha2VDb3VudDogdGhpcy5zdGF0ZS5zbmFrZUNvdW50ICsgMSB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBoYW5kbGVEaWNlOiBmdW5jdGlvbihkaWNlTnVtYmVyLCBzaXhDb3VudCkge1xyXG4gICAgdmFyIHRhcCA9IG5ldyBBdWRpbyhcIi4uL3NvdW5kL3RhcC5tcDNcIik7XHJcbiAgICB0YXAucGxheSgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtkaWNlQ291bnQ6IHRoaXMuc3RhdGUuZGljZUNvdW50ICsgMSwgc2l4Q291bnQ6IHNpeENvdW50fSk7XHJcbiAgICAgIHZhciB2YWwgPSAgdGhpcy5zdGF0ZS5yZWREaWNlICsgZGljZU51bWJlciArIDE7XHJcbiAgICAgIHRoaXMuZ2V0Q291bnQodmFsKTtcclxuICAgICAgdmFyIGZpbmFsID0gdGhpcy5zZXREaXNwbGFjZW1lbnQodmFsKTtcclxuICAgICAgaWYoZmluYWwgPCAxMDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZERpY2U6IGZpbmFsfSk7XHJcbiAgICAgIH1lbHNlIGlmICggZmluYWwgPT09IDEwMCl7XHJcbiAgICAgICAgYWxlcnQoXCJDb25ncmF0cyEhISEgWW91IFJlYWNoZWQgSG9tZVwiKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWREaWNlOiBmaW5hbH0pO1xyXG4gICAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2V0RGlzcGxhY2VtZW50OiBmdW5jdGlvbihkaXNwbGFjZW1lbnQpIHtcclxuICAgIHZhciBmaW5hbFZhbHVlID0gZGlzcGxhY2VtZW50O1xyXG4gICAgdmFyIGxhZGRlciA9IG5ldyBBdWRpbyhcIi4uL3NvdW5kL3VwLm1wM1wiKTtcclxuICAgIHZhciBzbmFrZSA9IG5ldyBBdWRpbyhcIi4uL3NvdW5kL2Rvd24ubXAzXCIpO1xyXG4gICAgaWYoZGlzcGxhY2VtZW50IDwgMTAwKXtcclxuICAgICAgaWYoZGlzcGxhY2VtZW50ID09IDMpe1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDI0O1xyXG4gICAgICAgbGFkZGVyLnBsYXkoKTtcclxuICAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDMzKSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gODc7XHJcbiAgICAgICBsYWRkZXIucGxheSgpO1xyXG4gICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gMzkpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA4MTtcclxuICAgICAgIGxhZGRlci5wbGF5KCk7XHJcbiAgICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA1OCkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDg1O1xyXG4gICAgICAgbGFkZGVyLnBsYXkoKTtcclxuICAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDczKSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gOTI7XHJcbiAgICAgICBsYWRkZXIucGxheSgpO1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA5OCkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDU5O1xyXG4gICAgICAgc25ha2UucGxheSgpO1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA5NSkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDI2O1xyXG4gICAgICAgc25ha2UucGxheSgpO1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA0Nikge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDI3O1xyXG4gICAgICAgc25ha2UucGxheSgpO1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA4OSkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDExO1xyXG4gICAgICAgc25ha2UucGxheSgpO1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA2NSkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDQ7XHJcbiAgICAgICBzbmFrZS5wbGF5KCk7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDUzKSB7XHJcbiAgICAgICAgZmluYWxWYWx1ZSA9IDEyO1xyXG4gICAgICAgIHNuYWtlLnBsYXkoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKGRpc3BsYWNlbWVudCA9PSAxMDApIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSAxMDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmluYWxWYWx1ZTtcclxuICB9LFxyXG5cclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciBzY29yZUNhcmQgPSB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxyXG4gICAgICBwYWRkaW5nTGVmdDogMjAsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogMjBcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8R2FtZUJvYXJkIHJlZERpY2U9e3RoaXMuc3RhdGUucmVkRGljZX0vPlxyXG4gICAgICAgIDxTY29yZUJvYXJkIGNvbm5lY3RCb2FyZD17dGhpcy5oYW5kbGVEaWNlfSBkaWNlTnVtYmVyPXt0aGlzLnN0YXRlLmRpY2VOdW1iZXJ9IGhhbmRsZU1lbnU9e3RoaXMucHJvcHMuaGFuZGxlTWVudX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgPHVsIGlkPVwiZHJhZ2dhYmxlUGFuZWxMaXN0XCIgY2xhc3NOYW1lPVwiY29sLW1kLTEwXCIgc3R5bGU9e3Njb3JlQ2FyZH0+XHJcbiAgICAgICAgPFNjb3JlQ2FyZCBoZWFkZXJTdHlsZT17e1wiYmFja2dyb3VuZENvbG9yXCI6IFwicmVkXCJ9fSBkaWNlQ291bnQ9e3RoaXMuc3RhdGUuZGljZUNvdW50fSBzaXhDb3VudD17dGhpcy5zdGF0ZS5zaXhDb3VudH0gbGFkZGVyQ291bnQ9e3RoaXMuc3RhdGUubGFkZGVyQ291bnR9IHNuYWtlQ291bnQ9e3RoaXMuc3RhdGUuc25ha2VDb3VudH0vPlxyXG4gICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNpbmdsZVBsYXllcjtcclxuIiwidmFyIFRpbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciByZXZlbnVlU3R5bGUgPSB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206MjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6MjAsXHJcbiAgICAgIGZvbnRTaXplOjE4XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgdmFyIHNvdXJjZVN0eWxlID0ge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOjIwLFxyXG4gICAgICBwYWRkaW5nVG9wOjIwXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciByb3dTdHlsZSA9IHtcclxuICAgICAgYm9yZGVyQm90dG9tOiBcIjNweCBzb2xpZCB3aGl0ZVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBib2R5U3R5bGUgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGNUY1RjVcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaGVhZGVyU3R5bGUgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgYm9yZGVyQm90dG9tOiBcIjNweCBzb2xpZCB3aGl0ZVwiXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNldFBhZGRpbmdMZWZ0ID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjFGMUYxXCIsXHJcbiAgICAgIGNvbG9yOidibGFjaycsXHJcbiAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgcGFkZGluZ0JvdHRvbToxMCxcclxuICAgICAgcGFkZGluZ1RvcDoxMCxcclxuICAgICAgcGFkZGluZ0xlZnQ6IDEwLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNldFBhZGRpbmdUb3AgPSB7XHJcbiAgICAgIHBhZGRpbmdUb3A6MzBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTExID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0OjEwLFxyXG4gICAgICBtYXJnaW5Ub3A6IC01LFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxMiA9IHtcclxuICAgICAgbWFyZ2luTGVmdDoxMCxcclxuICAgICAgbWFyZ2luVG9wOiAtNSxcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHRoaXMucHJvcHMucGxheWVyTnVtYmVyID09PSA0IHx8IDMgfHwgMiB8fCAxKXtcclxuICAgICAgdmFyIGhpZ2hsaWdodCA9IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OjEwLFxyXG4gICAgICAgIG1hcmdpblRvcDogLTUsXHJcbiAgICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgICB3aWR0aDogMjAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB2YXIgaGlnaGxpZ2h0ID0ge1xyXG4gICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICBmb250U2l6ZTogMCxcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaWRlRGl2ID0ge1xyXG4gICAgICB3aWR0aDogMCxcclxuICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICBmb250U2l6ZTogMCxcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGlnaGxpZ2h0MSA9IHtcclxuICAgICAgbWFyZ2luTGVmdDotNSxcclxuICAgICAgbWFyZ2luVG9wOi0zLFxyXG4gICAgICBwb3NpdGlvbjpcImFic29sdXRlXCIsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaWdobGlnaHQyID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0OjM5LFxyXG4gICAgICBtYXJnaW5Ub3A6IC0zLFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICBwb3NpdGlvbjpcImFic29sdXRlXCIsXHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2hsaWdodDMgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6NjAsXHJcbiAgICAgIG1hcmdpblRvcDogLTMsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaWdobGlnaHQ0ID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0OjE3LFxyXG4gICAgICBtYXJnaW5Ub3A6IC0zLFxyXG4gICAgICBwb3NpdGlvbjpcImFic29sdXRlXCIsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaWdsaWdodEFycmF5ID0gWyAxLCAyMCwgNTAsIDYwXTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEgY29sLXhzLTEgY29sLWxnLTFcIiBzdHlsZT17c2V0UGFkZGluZ0xlZnR9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnZhbHVlfVxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICA8ZGl2ICBzdHlsZT17IHRoaXMucHJvcHMucmVkRGljZSA9PT0gdGhpcy5wcm9wcy52YWx1ZSA/IGhpZ2hsaWdodDEgOiBoaWRlRGl2fT48L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGlsZTtcclxuIl19
