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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL21haW4uanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL211bHRpcGxheWVyL2dhbWVib2FyZC5qcyIsIkU6L1NuYWtlIGFuZCBMYWRkZXIvUmVhY3QtRm9yLUJlZ2lubmVycy1TdGFydGVyLUZpbGVzLzAxIC0gSW50cm9kdWN0aW9uIC0gU3RhcnQgSGVyZS9yb290L3NjcmlwdHMvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL211bHRpcGxheWVyL3Njb3JlYm9hcmQuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL211bHRpcGxheWVyL3Njb3JlY2FyZC5qcyIsIkU6L1NuYWtlIGFuZCBMYWRkZXIvUmVhY3QtRm9yLUJlZ2lubmVycy1TdGFydGVyLUZpbGVzLzAxIC0gSW50cm9kdWN0aW9uIC0gU3RhcnQgSGVyZS9yb290L3NjcmlwdHMvbXVsdGlwbGF5ZXIvdGlsZS5qcyIsIkU6L1NuYWtlIGFuZCBMYWRkZXIvUmVhY3QtRm9yLUJlZ2lubmVycy1TdGFydGVyLUZpbGVzLzAxIC0gSW50cm9kdWN0aW9uIC0gU3RhcnQgSGVyZS9yb290L3NjcmlwdHMvc2luZ2xlcGxheWVyL2dhbWVib2FyZC5qcyIsIkU6L1NuYWtlIGFuZCBMYWRkZXIvUmVhY3QtRm9yLUJlZ2lubmVycy1TdGFydGVyLUZpbGVzLzAxIC0gSW50cm9kdWN0aW9uIC0gU3RhcnQgSGVyZS9yb290L3NjcmlwdHMvc2luZ2xlcGxheWVyL3Njb3JlYm9hcmQuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL3NpbmdsZXBsYXllci9zY29yZWNhcmQuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL3NpbmdsZXBsYXllci9zaW5nbGVwbGF5ZXIuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL3NpbmdsZXBsYXllci90aWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUM3RCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUMxRCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztBQUUvQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFFOUIsaUJBQWUsRUFBRSwyQkFBVztBQUMzQixXQUFPLEVBQUMsTUFBTSxFQUFHLE1BQU0sRUFBRSxDQUFDO0dBQzNCOztBQUVELFlBQVUsRUFBRSxvQkFBUyxNQUFNLEVBQUM7QUFDMUIsUUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMs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RSxFQUFFO0FBQ1YsY0FBUSxFQUFDLFVBQVU7QUFDbkIsV0FBSyxFQUFFLEVBQUU7QUFDVCxxQkFBZSxFQUFFLE1BQU07QUFDdkIsa0JBQVksRUFBRSxFQUFFO0tBQ2pCLENBQUE7O0FBRUQsUUFBSSxVQUFVLEdBQUc7QUFDZixnQkFBVSxFQUFDLEVBQUU7QUFDYixlQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ2IsY0FBUSxFQUFDLFVBQVU7QUFDbkIsWUFBTSxFQUFFLEVBQUU7QUFDVixXQUFLLEVBQUUsRUFBRTtBQUNULHFCQUFlLEVBQUUsUUFBUTtBQUN6QixrQkFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQTs7QUFFRCxRQUFJLGFBQWEsR0FBRyxDQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDLFdBQ0U7O1FBQUssU0FBUyxFQUFDLDRCQUE0QixFQUFDLEtBQUssRUFBRSxjQUFjLEFBQUM7TUFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO01BQ25COzs7UUFDRSw2QkFBTSxLQUFLLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLE9BQU8sQUFBQyxHQUFPO09BQy9FO0tBQ0QsQ0FDTjtHQUNIO0NBQ0YsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG52YXIgU2luZ2xlUGxheWVyID0gcmVxdWlyZSgnLi9zaW5nbGVwbGF5ZXIvc2luZ2xlcGxheWVyLmpzJyk7XHJcbnZhciBNdWx0aVBsYXllciA9IHJlcXVpcmUoJy4vbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuanMnKTtcclxudmFyIHNvdW5kID0gbmV3IEF1ZGlvKFwiLi4vc291bmQvbWFjaGluZXMubXAzXCIpO1xyXG5cclxudmFyIE1haW5BcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblxyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgIHJldHVybiB7b3B0aW9uIDogXCJob21lXCIgfTtcclxuIH0sXHJcblxyXG4gaGFuZGxlTWVudTogZnVuY3Rpb24oY2hvaWNlKXtcclxuICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uOmNob2ljZX0pO1xyXG4gfSxcclxuXHJcbiBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHNvdW5kLnBsYXkoKTtcclxuIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGlsZVN0eWxlID0ge1xyXG4gICAgICBtYXJnaW5Ub3A6MTBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2luZ2xlQnV0dG9uID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBtYXJnaW5MZWZ0Oi04NTAsXHJcbiAgICAgIG1hcmdpblRvcDogNTAwLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG11bHRpcGxlQnV0dG9uID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBtYXJnaW5MZWZ0Oi01NTAsXHJcbiAgICAgIG1hcmdpblRvcDogNTAwLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNldEltYWdlID0ge1xyXG4gICAgICBwYWRkaW5nTGVmdDo1LFxyXG4gICAgICBwYWRkaW5nVG9wOjIwLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDUsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgeygoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wdGlvbiA9PSBcImhvbWVcIikge1xyXG4gICAgICAgIHNvdW5kLnBsYXkoKTtcclxuICAgICAgIHJldHVybihcclxuICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiIHN0eWxlPXtzZXRJbWFnZX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIiBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIvPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU1lbnUuYmluZCh0aGlzLFwic2luZ2xlXCIpfSBzdHlsZT17c2luZ2xlQnV0dG9ufT5TaW5nbGVQbGF5ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU1lbnUuYmluZCh0aGlzLFwibXVsdGlcIil9IHN0eWxlPXttdWx0aXBsZUJ1dHRvbn0+TXVsdGlQbGF5ZXI8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUub3B0aW9uID09IFwic2luZ2xlXCIpe1xyXG4gICAgICAgIHNvdW5kLnBhdXNlKCk7XHJcbiAgICAgICAgc291bmQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPFNpbmdsZVBsYXllciBoYW5kbGVNZW51PXt0aGlzLmhhbmRsZU1lbnUuYmluZCh0aGlzLCBcImhvbWVcIil9Lz5cclxuICAgICAgKTtcclxuICAgIH1lbHNlIGlmICh0aGlzLnN0YXRlLm9wdGlvbiA9PSBcIm11bHRpXCIpe1xyXG4gICAgICBzb3VuZC5wYXVzZSgpO1xyXG4gICAgICBzb3VuZC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8TXVsdGlQbGF5ZXIgaGFuZGxlTWVudT17dGhpcy5oYW5kbGVNZW51LmJpbmQodGhpcywgXCJob21lXCIpfS8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAgIH0pKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPE1haW5BcHAgLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4pO1xyXG4iLCJ2YXIgVGlsZT1yZXF1aXJlKCcuL3RpbGUuanMnKTtcclxuXHJcbnZhciBHYW1lQm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciByZWRUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNEQjE2MjdcIixcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxyXG4gICAgICBwYWRkaW5nTGVmdDozOCxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGdyZXlUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgcGFkZGluZ0xlZnQ6NSxcclxuICAgICAgdGV4dEFsaWduOlwibGVmdFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0ZXh0Q29sb3IgPSB7XHJcbiAgICAgIGNvbG9yOlwid2hpdGVcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTEgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MjYwLFxyXG4gICAgICB0b3A6MTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAyNTAsXHJcbiAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTIgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6NDYwLFxyXG4gICAgICB0b3A6MTYwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICB3aWR0aDogNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU0ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjI2MCxcclxuICAgICAgdG9wOjM2MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDMyMCxcclxuICAgICAgd2lkdGg6IDIyMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6Njc4LFxyXG4gICAgICB0b3A6NTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiA2NzUsXHJcbiAgICAgIHdpZHRoOiAyMjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU2ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjQ2MCxcclxuICAgICAgdG9wOjE5MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMyA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo4ODAsXHJcbiAgICAgIHRvcDo4MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM2MCxcclxuICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTYgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MTE1LFxyXG4gICAgICB0b3A6ODAsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAyOTUsXHJcbiAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTcgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MjE3LFxyXG4gICAgICB0b3A6MTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiA1OTUsXHJcbiAgICAgIHdpZHRoOiA0MjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU4ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjUyNSxcclxuICAgICAgdG9wOjIwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzcwLFxyXG4gICAgICB3aWR0aDogMTIwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlOSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo2MTIsXHJcbiAgICAgIHRvcDoxNTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNzAsXHJcbiAgICAgIHdpZHRoOiAxNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxMCA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo3OTUsXHJcbiAgICAgIHRvcDoxNTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNzAsXHJcbiAgICAgIHdpZHRoOiAxNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNjb3JlVGV4dCA9IHtcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxMSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo3OTAsXHJcbiAgICAgIHRvcDoxNSxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDMyMCxcclxuICAgICAgd2lkdGg6IDIyMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdGlsZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAxMDsgaSA+MDsgaS0tKSB7XHJcbiAgICAgIHZhciBjb2wgPSBpKjEwO1xyXG4gICAgICBpZihpJTIgPT09IDApe1xyXG4gICAgICAgIGZvcih2YXIgaj0wO2o8PTk7aisrKXtcclxuICAgICAgICAgIHRpbGVzLnB1c2goPFRpbGUgIHZhbHVlPXtjb2wtan0gZGlzcGxhY2VtZW50PXt0aGlzLnByb3BzLmRpY2VOdW1iZXJ9ICByZWREaWNlPXt0aGlzLnByb3BzLnJlZERpY2V9IGdyZWVuRGljZT17dGhpcy5wcm9wcy5ncmVlbkRpY2V9IGJsdWVEaWNlPXt0aGlzLnByb3BzLmJsdWVEaWNlfSB5ZWxsb3dEaWNlPXt0aGlzLnByb3BzLnllbGxvd0RpY2V9ICBwbGF5ZXJOdW1iZXI9e3RoaXMucHJvcHMucGxheWVyTnVtYmVyfS8+KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGZvcih2YXIgaj05O2o+PTA7ai0tKXtcclxuICAgICAgICAgIHRpbGVzLnB1c2goPFRpbGUgdmFsdWU9e2NvbC1qfSBkaXNwbGFjZW1lbnQ9e3RoaXMucHJvcHMuZGljZU51bWJlcn0gIHJlZERpY2U9e3RoaXMucHJvcHMucmVkRGljZX0gZ3JlZW5EaWNlPXt0aGlzLnByb3BzLmdyZWVuRGljZX0gYmx1ZURpY2U9e3RoaXMucHJvcHMuYmx1ZURpY2V9IHllbGxvd0RpY2U9e3RoaXMucHJvcHMueWVsbG93RGljZX0gIHBsYXllck51bWJlcj17dGhpcy5wcm9wcy5wbGF5ZXJOdW1iZXJ9Lz4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC14cy0xMCBjb2wtbGctMTBcIiBzdHlsZT17cmVkVGFifT5cclxuICAgICAgICAgIHt0aWxlc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2U1LmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTF9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2UxMS5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGUyfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlMi5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGUzfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlMTAuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlOH0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTQuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlOX0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTQwLmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTEwfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2xhZGRlci0yMi5wbmdcIn0gc3R5bGU9e2JhZGdlU3R5bGU0fS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2ZpdmUucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlNn0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjEucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlNX0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjIucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlN30vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjIucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlMTF9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZUJvYXJkO1xyXG4iLCJ2YXIgR2FtZUJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQuanMnKTtcclxudmFyIFNjb3JlQm9hcmQgPSByZXF1aXJlKCcuL3Njb3JlYm9hcmQuanMnKTtcclxudmFyIFNjb3JlQ2FyZCA9IHJlcXVpcmUoJy4vc2NvcmVjYXJkLmpzJyk7XHJcblxyXG5cclxuXHJcbnZhciBNdWx0aVBsYXllciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgcmV0dXJuIHtkaWNlTnVtYmVyIDogMSAsIHBsYXllck51bWJlcjowLCByZWREaWNlOiAxLCByZWRTbmFrZTowLCBncmVlblNuYWtlOiAwLCBibHVlU25ha2U6IDAsIHllbGxvd1NuYWtlOiAwLCAgcmVkTGFkZGVyOiAwLCBncmVlbkxhZGRlcjogMCwgYmx1ZUxhZGRlcjogMCwgeWVsbG93TGFkZGVyOjAsIGdyZWVuRGljZTogMSwgYmx1ZURpY2U6IDEsIHllbGxvd0RpY2U6IDEsIGRpY2VDb3VudFJlZDogMCwgc2l4Q291bnRSZWQ6IDAgLGRpY2VDb3VudEdyZWVuOiAwLCBzaXhDb3VudEdyZWVuOiAwLGRpY2VDb3VudEJsdWU6IDAsIHNpeENvdW50Qmx1ZTogMCwgZGljZUNvdW50WWVsbG93OiAwLCBzaXhDb3VudFllbGxvdzogMH07XHJcbiB9LFxyXG5cclxuICBnZXRDb3VudDogZnVuY3Rpb24odmFsLCBwbGF5ZXJOdW1iZXIpIHtcclxuICAgIGlmKCh2YWwgPT0gMykgfHwgKHZhbCA9PSAzMykgfHwgKHZhbCA9PSAgMzkpIHx8ICh2YWwgPT0gIDU4KSB8fCAodmFsID09ICA3MykgfHwgKHZhbCA9PSAgMjYpIHx8ICh2YWwgPT0gIDI4KSAgKXtcclxuICAgICAgaWYocGxheWVyTnVtYmVyPT09MSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVkTGFkZGVyOiB0aGlzLnN0YXRlLnJlZExhZGRlciArIDEgfSk7XHJcbiAgICAgIH1lbHNlIGlmKHBsYXllck51bWJlciA9PT0yICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Z3JlZW5MYWRkZXI6IHRoaXMuc3RhdGUucmVkTGFkZGVyICsgMSB9KTtcclxuICAgICAgfWVsc2UgaWYocGxheWVyTnVtYmVyID09PTMgKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtibHVlTGFkZGVyOiB0aGlzLnN0YXRlLnJlZExhZGRlciArIDEgfSk7XHJcbiAgICAgIH1lbHNlIGlmKHBsYXllck51bWJlciA9PT00ICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7eWVsbG93TGFkZGVyOiB0aGlzLnN0YXRlLnJlZExhZGRlciArIDEgfSk7XHJcbiAgICAgIH1cclxuICAgIH1lbHNlIGlmKCh2YWw9PTk4KSB8fCh2YWw9PSA5NSkgIHx8ICh2YWw9PTQ2KSB8fCAodmFsPT04OSkgfHwgKHZhbD09NjUpIHx8ICh2YWw9PTUzKSB8fCAodmFsPT0zMCkgfHwgKHZhbD09MzIpKXtcclxuICAgICAgaWYocGxheWVyTnVtYmVyPT09MSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVkU25ha2U6IHRoaXMuc3RhdGUucmVkU25ha2UgKyAxIH0pO1xyXG4gICAgICB9ZWxzZSBpZihwbGF5ZXJOdW1iZXIgPT09MiApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2dyZWVuU25ha2U6IHRoaXMuc3RhdGUuZ3JlZW5TbmFrZSArIDEgfSk7XHJcbiAgICAgIH1lbHNlIGlmKHBsYXllck51bWJlciA9PT0zICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ymx1ZVNuYWtlOiB0aGlzLnN0YXRlLmJsdWVTbmFrZSArIDEgfSk7XHJcbiAgICAgIH1lbHNlIGlmKHBsYXllck51bWJlciA9PT00ICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7eWVsbG93U25ha2U6IHRoaXMuc3RhdGUueWVsbG93U25ha2UgKyAxIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgaGFuZGxlRGljZTogZnVuY3Rpb24oZGljZU51bWJlciwgcGxheWVyTnVtYmVyLCBzaXhDb3VudCkge1xyXG4gICAgY29uc29sZS5sb2coXCJUaGlzLnN0YXRlLnBsYXllci0tXCIsIHBsYXllck51bWJlcik7XHJcbiAgICB0YXAucGxheSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyTnVtYmVyOiBwbGF5ZXJOdW1iZXIgfSk7XHJcbiAgICBpZihwbGF5ZXJOdW1iZXIgPT09IDEpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtkaWNlQ291bnRSZWQ6IHRoaXMuc3RhdGUuZGljZUNvdW50UmVkICsgMSwgc2l4Q291bnRSZWQ6IHNpeENvdW50fSk7XHJcbiAgICAgIHZhciB2YWwgPSAgdGhpcy5zdGF0ZS5yZWREaWNlICsgZGljZU51bWJlciArIDE7XHJcbiAgICAgIHRoaXMuZ2V0Q291bnQodmFsLHBsYXllck51bWJlcik7XHJcbiAgICAgIHZhciBmaW5hbCA9IHRoaXMuc2V0RGlzcGxhY2VtZW50KHZhbCk7XHJcblxyXG4gICAgICBpZihmaW5hbCA8IDEwMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVkRGljZTogZmluYWx9KTtcclxuICAgICAgfWVsc2UgaWYgKCBmaW5hbCA9PT0gMTAwKXtcclxuICAgICAgICBhbGVydChcIlJlZCBXaW5zXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZERpY2U6IGZpbmFsfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJUZXN0aW5nIGZpbmFsIHZhbHVlXCIsZmluYWwgKTtcclxuICAgIH1lbHNlIGlmKCBwbGF5ZXJOdW1iZXIgPT09IDIpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtkaWNlQ291bnRHcmVlbjogdGhpcy5zdGF0ZS5kaWNlQ291bnRHcmVlbiArIDEsIHNpeENvdW50R3JlZW46IHNpeENvdW50fSk7XHJcbiAgICAgIHZhciB2YWwgPSAgdGhpcy5zdGF0ZS5ncmVlbkRpY2UgKyBkaWNlTnVtYmVyICsgMTtcclxuICAgICAgdGhpcy5nZXRDb3VudCh2YWwscGxheWVyTnVtYmVyKTtcclxuICAgICAgdmFyIGZpbmFsID0gdGhpcy5zZXREaXNwbGFjZW1lbnQodmFsKTtcclxuICAgICAgaWYoZmluYWwgPCAxMDApIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtncmVlbkRpY2U6IGZpbmFsfSk7XHJcbiAgICAgIH1lbHNlIGlmICggZmluYWwgPT09IDEwMCl7XHJcbiAgICAgICAgYWxlcnQoXCJHcmVlbiBXaW5zXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2dyZWVuRGljZTogZmluYWx9KTtcclxuICAgICAgfVxyXG4gICAgfWVsc2UgaWYgKCBwbGF5ZXJOdW1iZXIgPT09IDMpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtkaWNlQ291bnRCbHVlOiB0aGlzLnN0YXRlLmRpY2VDb3VudEJsdWUgKyAxLCBzaXhDb3VudEJsdWU6IHNpeENvdW50fSk7XHJcbiAgICAgIHZhciB2YWwgPSAgdGhpcy5zdGF0ZS5ibHVlRGljZSArIGRpY2VOdW1iZXIgKyAxO1xyXG4gICAgICB0aGlzLmdldENvdW50KHZhbCxwbGF5ZXJOdW1iZXIpO1xyXG4gICAgICB2YXIgZmluYWwgPSB0aGlzLnNldERpc3BsYWNlbWVudCh2YWwpO1xyXG4gICAgICBpZihmaW5hbCA8MTAwKXtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2JsdWVEaWNlOiBmaW5hbCB9KTtcclxuICAgICAgfWVsc2UgaWYgKCBmaW5hbCA9PT0gMTAwKXtcclxuICAgICAgICBhbGVydChcIkJsdWUgV2luc1wiKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtibHVlRGljZTogZmluYWwgfSk7XHJcbiAgICAgIH1cclxuICAgIH1lbHNlIGlmICggcGxheWVyTnVtYmVyID09PSA0ICl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RpY2VDb3VudFllbGxvdzogdGhpcy5zdGF0ZS5kaWNlQ291bnRZZWxsb3cgKyAxLCBzaXhDb3VudFllbGxvdzogc2l4Q291bnR9KTtcclxuICAgICAgdmFyIHZhbCA9ICB0aGlzLnN0YXRlLnllbGxvd0RpY2UgKyBkaWNlTnVtYmVyICsgMTtcclxuICAgICAgdGhpcy5nZXRDb3VudCh2YWwscGxheWVyTnVtYmVyKTtcclxuICAgICAgdmFyIGZpbmFsID0gdGhpcy5zZXREaXNwbGFjZW1lbnQodmFsKTtcclxuICAgICAgaWYoZmluYWwgPDEwMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7eWVsbG93RGljZTogZmluYWx9KTtcclxuICAgICAgfWVsc2UgaWYgKCBmaW5hbCA9PT0gMTAwKXtcclxuICAgICAgICBhbGVydChcIlllbGxvdyBXaW5zXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3llbGxvd0RpY2U6IGZpbmFsfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBkaXNwbGFjZW1lbnQgPSB0aGlzLnN0YXRlLmRpY2VOdW1iZXIgKyBkaWNlTnVtYmVyICsxO1xyXG5cclxuICB9LFxyXG5cclxuICBzZXREaXNwbGFjZW1lbnQ6IGZ1bmN0aW9uKGRpc3BsYWNlbWVudCkge1xyXG4gICAgdmFyIGZpbmFsVmFsdWUgPSBkaXNwbGFjZW1lbnQ7XHJcbiAgICBpZihkaXNwbGFjZW1lbnQgPCAxMDApe1xyXG4gICAgICBpZihkaXNwbGFjZW1lbnQgPT0gMyl7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gMjQ7XHJcbiAgICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSAzMykge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDg3O1xyXG4gICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gMzkpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA4MTtcclxuICAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDU4KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gODU7XHJcbiAgICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA3Mykge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDkyO1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA5OCkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDU5O1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA5NSkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDI2O1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA0Nikge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDI3O1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA4OSkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDExO1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA2NSkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDQ7XHJcbiAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDUzKSB7XHJcbiAgICAgICAgZmluYWxWYWx1ZSA9IDEyO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDEwMCkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDEwMDtcclxuICAgIH1cclxuICAgIHJldHVybiBmaW5hbFZhbHVlO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIHNjb3JlQ2FyZCA9IHtcclxuICAgICAgcGFkZGluZ1RvcDogMjAsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAyMCxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiAyMFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8R2FtZUJvYXJkIHJlZERpY2U9e3RoaXMuc3RhdGUucmVkRGljZX0gZ3JlZW5EaWNlPXt0aGlzLnN0YXRlLmdyZWVuRGljZX0gYmx1ZURpY2U9e3RoaXMuc3RhdGUuYmx1ZURpY2V9IHllbGxvd0RpY2U9e3RoaXMuc3RhdGUueWVsbG93RGljZX0gZGljZU51bWJlcj17dGhpcy5zdGF0ZS5kaWNlTnVtYmVyfSBwbGF5ZXJOdW1iZXI9e3RoaXMuc3RhdGUucGxheWVyTnVtYmVyfS8+XHJcbiAgICAgICAgICA8U2NvcmVCb2FyZCBjb25uZWN0Qm9hcmQ9e3RoaXMuaGFuZGxlRGljZX0gZGljZU51bWJlcj17dGhpcy5zdGF0ZS5kaWNlTnVtYmVyfSBoYW5kbGVNZW51PXt0aGlzLnByb3BzLmhhbmRsZU1lbnV9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHVsIGlkPVwiZHJhZ2dhYmxlUGFuZWxMaXN0XCIgY2xhc3NOYW1lPVwiY29sLW1kLTEwXCIgc3R5bGU9e3Njb3JlQ2FyZH0+XHJcbiAgICAgICAgICAgIDxoMj5HYW1lIFN0YXRpc3RpY3M8L2gyPlxyXG4gICAgICAgICAgICA8U2NvcmVDYXJkICBoZWFkZXJTdHlsZT17e1wiYmFja2dyb3VuZENvbG9yXCI6IFwicmVkXCJ9fSBkaWNlQ291bnQ9e3RoaXMuc3RhdGUuZGljZUNvdW50UmVkfSBzaXhDb3VudD17dGhpcy5zdGF0ZS5zaXhDb3VudFJlZH0gbGFkZGVyQ291bnQ9e3RoaXMuc3RhdGUucmVkTGFkZGVyfSBzbmFrZUNvdW50PXt0aGlzLnN0YXRlLnJlZFNuYWtlfS8+XHJcbiAgICAgICAgICAgIDxTY29yZUNhcmQgIGhlYWRlclN0eWxlPXt7XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJncmVlblwifX1kaWNlQ291bnQ9e3RoaXMuc3RhdGUuZGljZUNvdW50R3JlZW59IHNpeENvdW50PXt0aGlzLnN0YXRlLnNpeENvdW50R3JlZW59IGxhZGRlckNvdW50PXt0aGlzLnN0YXRlLmdyZWVuTGFkZGVyfSBzbmFrZUNvdW50PXt0aGlzLnN0YXRlLmdyZWVuU25ha2V9Lz5cclxuICAgICAgICAgICAgPFNjb3JlQ2FyZCAgaGVhZGVyU3R5bGU9e3tcImJhY2tncm91bmRDb2xvclwiOiBcImJsdWVcIn19IGRpY2VDb3VudD17dGhpcy5zdGF0ZS5kaWNlQ291bnRCbHVlfSBzaXhDb3VudD17dGhpcy5zdGF0ZS5zaXhDb3VudEJsdWV9IGxhZGRlckNvdW50PXt0aGlzLnN0YXRlLmJsdWVMYWRkZXJ9IHNuYWtlQ291bnQ9e3RoaXMuc3RhdGUuYmx1ZVNuYWtlfS8+XHJcbiAgICAgICAgICAgIDxTY29yZUNhcmQgIGhlYWRlclN0eWxlPXt7XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJ5ZWxsb3dcIn19IGRpY2VDb3VudD17dGhpcy5zdGF0ZS5kaWNlQ291bnRZZWxsb3d9IHNpeENvdW50PXt0aGlzLnN0YXRlLnNpeENvdW50WWVsbG93fSBsYWRkZXJDb3VudD17dGhpcy5zdGF0ZS55ZWxsb3dMYWRkZXJ9IHNuYWtlQ291bnQ9e3RoaXMuc3RhdGUueWVsbG93U25ha2V9Lz5cclxuICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE11bHRpUGxheWVyO1xyXG4iLCJ2YXIgcmFuZG9tZGljZSA9IDA7XHJcbnZhciBjb3VudCA9IDA7XHJcbnZhciBzaXhDb3VudCA9IDA7XHJcbnZhciBtZXNzYWdlID0gXCJcIjtcclxuXHJcbnZhciBTY29yZUJvYXJkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgIHJldHVybiB7ZGljZSA6IFwiLi4vaW1hZ2VzL3JvdGF0aW5nLmpwZ1wiLCBwbGF5ZXJOdW1iZXI6IDEsICBtZXNzYWdlOicnLCBzaXhlckNvdW50OiAwfTtcclxuIH0sXHJcblxyXG4gaGFuZGxlRGljZTogZnVuY3Rpb24oKSB7XHJcbiAgIHZhciBwbGF5ZXJWYWwgPSAwO1xyXG4gICB2YXIgaW1hZ2VBcnJheSA9IFtcIi4uL2ltYWdlcy8xLmdpZlwiLCBcIi4uL2ltYWdlcy8yLmdpZlwiLCBcIi4uL2ltYWdlcy8zLmdpZlwiLCBcIi4uL2ltYWdlcy80LmdpZlwiLCBcIi4uL2ltYWdlcy81LmdpZlwiLCBcIi4uL2ltYWdlcy82LmdpZlwiXTtcclxuICAgcmFuZG9tZGljZT1NYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqNSk7XHJcbiAgIGlmKHJhbmRvbWRpY2UgPT09IDUpe1xyXG4gICAgIHRoaXMuc2V0U3RhdGUoe3NpeGVyQ291bnQ6IHRoaXMuc3RhdGUuc2l4ZXJDb3VudCArIDF9KTtcclxuICAgfVxyXG4gICBpZih0aGlzLnN0YXRlLnBsYXllck51bWJlcjw0KXtcclxuICAgICBpZihyYW5kb21kaWNlID09PSA1ICYmIGNvdW50IDwyKSB7XHJcbiAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOlwiR290IGEgNiByb2xsIGFnYWluXCJ9KTtcclxuICAgICAgIGNvdW50ID0gY291bnQgKzE7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBjb3VudCB5b3UgYXJlIHNlYXJjaGluZyBpc1wiLCBjb3VudCwgdGhpcy5zdGF0ZS5zaXhlckNvdW50KTtcclxuICAgICAgIHRoaXMuc2V0U3RhdGUoe3BsYXllck51bWJlcjp0aGlzLnN0YXRlLnBsYXllck51bWJlcn0pO1xyXG4gICAgIH1lbHNle1xyXG4gICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7c2l4ZXJDb3VudDowfSk7XHJcbiAgICAgICB0aGlzLnNldFN0YXRlKHtwbGF5ZXJOdW1iZXI6dGhpcy5zdGF0ZS5wbGF5ZXJOdW1iZXIgKyAxLCBtZXNzYWdlOiAnJ30pO1xyXG4gICAgIH1cclxuICAgfVxyXG4gICBpZih0aGlzLnN0YXRlLnBsYXllck51bWJlcj49NCl7XHJcbiAgICAgY291bnQgPSAwO1xyXG4gICAgIHRoaXMuc2V0U3RhdGUoe3BsYXllck51bWJlcjogMSwgbWVzc2FnZTogJyd9KTtcclxuICAgfVxyXG5cclxuICAgdGhpcy5zZXRTdGF0ZSh7ZGljZTppbWFnZUFycmF5W3JhbmRvbWRpY2VdfSk7XHJcbiAgIGNvbnNvbGUubG9nKFwiQmVmb3JlIGNvbm5lY3RCb2FyZFwiLCB0aGlzLnN0YXRlLnBsYXllck51bWJlcik7XHJcbiAgIGlmKHRoaXMuc3RhdGUucGxheWVyTnVtYmVyPT01KXtcclxuICAgICBwbGF5ZXJWYWwgPSAxO1xyXG4gICB9ZWxzZXtcclxuICAgICBwbGF5ZXJWYWwgPSB0aGlzLnN0YXRlLnBsYXllck51bWJlcjtcclxuICAgfVxyXG5cclxuICAgdGhpcy5wcm9wcy5jb25uZWN0Qm9hcmQocmFuZG9tZGljZSwgcGxheWVyVmFsLCB0aGlzLnN0YXRlLnNpeGVyQ291bnQpO1xyXG4gfSxcclxuXHJcbiByZWxvYWRlciA6IGZ1bmN0aW9uKCkge1xyXG4gICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2V0UGFkZGluZ0xlZnQgPSB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OjIwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNldFBhZGRpbmdUb3AgPSB7XHJcbiAgICAgIHBhZGRpbmdUb3A6MzBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0Q2hhcnRXaWR0aCA9IHtcclxuICAgICAgd2lkdGg6IFwiNzUlXCIsXHJcbiAgICAgIGhlaWdodDogXCI3NSVcIlxyXG4gICAgfVxyXG5cclxuICAgIHZhciBtZXNzYWdlU3R5bGUgPSB7XHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgY29sb3I6IFwib3JhbmdlXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGljZUltYWdlID0ge1xyXG4gICAgICBtYXJnaW5Ub3AgOiA1LFxyXG4gICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGljZUJ1dHRvbiA9IHtcclxuICAgICAgbWFyZ2luVG9wIDogNSxcclxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNldENvbG9yID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBjb2wteHMtMiBjb2wtbGctMlwiIHN0eWxlPXtzZXRDb2xvcn0+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT17ZGljZUJ1dHRvbn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17dGhpcy5oYW5kbGVEaWNlfT5UaHJvdyBEaWNlPC9idXR0b24+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5kaWNlTnVtYmVyID09PSAxMDAgPyBcIi4uL2ltYWdlcy9yb3RhdGluZy5qcGdcIiA6IHRoaXMuc3RhdGUuZGljZX0gd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBzdHlsZT17ZGljZUltYWdlfSAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9e2RpY2VCdXR0b259IG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlTWVudX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+R28gVG8gTWVudTwvYnV0dG9uPlxyXG4gICAgICAgICAgPHA+e3RoaXMuc3RhdGUubWVzc2FnZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNjb3JlQm9hcmQ7XHJcbiIsInZhciBTY29yZUNhcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciByZWRUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxyXG4gICAgICBwYWRkaW5nTGVmdDo1MCxcclxuICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBncmV5VGFiID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjFGMUYxXCIsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OjUsXHJcbiAgICAgIHRleHRBbGlnbjpcImxlZnRcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdGV4dFBvcyA9IHtcclxuICAgICAgdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwicGFuZWxcIiBzdHlsZT17dGhpcy5wcm9wcy5oZWFkZXJTdHlsZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+TnVtYmVywqBvZsKgdGhyb3dzwqBkb25lLcKtPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGV4dFBvc30+e3RoaXMucHJvcHMuZGljZUNvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwid2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkPk51bWJlcsKgb2bCoHRpbWVzwqBhwqDigItzaXggd2FzwqByb2xsZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZXh0UG9zfT57dGhpcy5wcm9wcy5zaXhDb3VudH08L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDx0ZD5OdW1iZXLCoG9mwqBsYWRkZXJzwqBjbGltYmVkPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGV4dFBvc30+e3RoaXMucHJvcHMubGFkZGVyQ291bnR9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJkYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZD5OdW1iZXLCoG9mwqBzbmFrZXMgZW5jb3VudGVyZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0ZXh0UG9zfT57dGhpcy5wcm9wcy5zbmFrZUNvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2NvcmVDYXJkO1xyXG4iLCJ2YXIgVGlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHJldmVudWVTdHlsZSA9IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbToyMCxcclxuICAgICAgcGFkZGluZ1RvcDoyMCxcclxuICAgICAgZm9udFNpemU6MThcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICB2YXIgc291cmNlU3R5bGUgPSB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206MjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6MjBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHJvd1N0eWxlID0ge1xyXG4gICAgICBib3JkZXJCb3R0b206IFwiM3B4IHNvbGlkIHdoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJvZHlTdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0Y1RjVGNVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoZWFkZXJTdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0YxRjFGMVwiLFxyXG4gICAgICBib3JkZXJCb3R0b206IFwiM3B4IHNvbGlkIHdoaXRlXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0UGFkZGluZ0xlZnQgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOjEwLFxyXG4gICAgICBwYWRkaW5nVG9wOjEwLFxyXG4gICAgICBwYWRkaW5nTGVmdDogMTAsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0UGFkZGluZ1RvcCA9IHtcclxuICAgICAgcGFkZGluZ1RvcDozMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMTEgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6MTAsXHJcbiAgICAgIG1hcmdpblRvcDogLTUsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTEyID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0OjEwLFxyXG4gICAgICBtYXJnaW5Ub3A6IC01LFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgIH07XHJcblxyXG4gICAgaWYodGhpcy5wcm9wcy5wbGF5ZXJOdW1iZXIgPT09IDQgfHwgMyB8fCAyIHx8IDEpe1xyXG4gICAgICB2YXIgaGlnaGxpZ2h0ID0ge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6MTAsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAtNSxcclxuICAgICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHZhciBoaWdobGlnaHQgPSB7XHJcbiAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgIGZvbnRTaXplOiAwLFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZGVEaXYgPSB7XHJcbiAgICAgIHdpZHRoOiAwLFxyXG4gICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgIGZvbnRTaXplOiAwLFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaWdobGlnaHQxID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0Oi01LFxyXG4gICAgICBtYXJnaW5Ub3A6LTMsXHJcbiAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2hsaWdodDIgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6MTcsXHJcbiAgICAgIG1hcmdpblRvcDogLTMsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGlnaGxpZ2h0MyA9IHtcclxuICAgICAgbWFyZ2luTGVmdDozOSxcclxuICAgICAgbWFyZ2luVG9wOiAtMyxcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2hsaWdodDQgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6NjAsXHJcbiAgICAgIG1hcmdpblRvcDogLTMsXHJcbiAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2xpZ2h0QXJyYXkgPSBbIDEsIDIwLCA1MCwgNjBdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMSBjb2wteHMtMSBjb2wtbGctMVwiIHN0eWxlPXtzZXRQYWRkaW5nTGVmdH0+XHJcbiAgICAgICAge3RoaXMucHJvcHMudmFsdWV9XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIDxkaXYgIHN0eWxlPXsgdGhpcy5wcm9wcy5yZWREaWNlID09PSB0aGlzLnByb3BzLnZhbHVlID8gaGlnaGxpZ2h0MSA6IGhpZGVEaXZ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgIHN0eWxlPXsgdGhpcy5wcm9wcy5ncmVlbkRpY2UgPT09IHRoaXMucHJvcHMudmFsdWUgPyBoaWdobGlnaHQyIDogaGlkZURpdn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiAgc3R5bGU9eyB0aGlzLnByb3BzLmJsdWVEaWNlID09PSB0aGlzLnByb3BzLnZhbHVlID8gaGlnaGxpZ2h0MyA6IGhpZGVEaXZ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgIHN0eWxlPXsgdGhpcy5wcm9wcy55ZWxsb3dEaWNlID09PSB0aGlzLnByb3BzLnZhbHVlID8gaGlnaGxpZ2h0NCA6IGhpZGVEaXZ9PjwvZGl2PlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGlsZTtcclxuIiwidmFyIFRpbGU9cmVxdWlyZSgnLi90aWxlLmpzJyk7XHJcblxyXG52YXIgR2FtZUJvYXJkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgcmVkVGFiID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjREIxNjI3XCIsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxyXG4gICAgICBwYWRkaW5nVG9wOiAyMCxcclxuICAgICAgcGFkZGluZ0xlZnQ6NTBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGdyZXlUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgcGFkZGluZ0xlZnQ6NSxcclxuICAgICAgdGV4dEFsaWduOlwibGVmdFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0ZXh0Q29sb3IgPSB7XHJcbiAgICAgIGNvbG9yOlwid2hpdGVcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTEgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MjYwLFxyXG4gICAgICB0b3A6MTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAyNTAsXHJcbiAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTIgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6NDYwLFxyXG4gICAgICB0b3A6MTYwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICB3aWR0aDogNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU0ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjI2MCxcclxuICAgICAgdG9wOjM2MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDMyMCxcclxuICAgICAgd2lkdGg6IDIyMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6Njc4LFxyXG4gICAgICB0b3A6NTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiA2NzUsXHJcbiAgICAgIHdpZHRoOiAyMjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU2ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjQ2MCxcclxuICAgICAgdG9wOjE5MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMyA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo4ODAsXHJcbiAgICAgIHRvcDo4MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM2MCxcclxuICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTYgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MTE1LFxyXG4gICAgICB0b3A6ODAsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAyOTUsXHJcbiAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTcgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MjE3LFxyXG4gICAgICB0b3A6MTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiA1OTUsXHJcbiAgICAgIHdpZHRoOiA0MjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU4ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjUyNSxcclxuICAgICAgdG9wOjIwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzcwLFxyXG4gICAgICB3aWR0aDogMTIwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlOSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo2MTIsXHJcbiAgICAgIHRvcDoxNTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNzAsXHJcbiAgICAgIHdpZHRoOiAxNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxMCA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo3OTUsXHJcbiAgICAgIHRvcDoxNTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNzAsXHJcbiAgICAgIHdpZHRoOiAxNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNjb3JlVGV4dCA9IHtcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxMSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo3OTAsXHJcbiAgICAgIHRvcDoxNSxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDMyMCxcclxuICAgICAgd2lkdGg6IDIyMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdGlsZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAxMDsgaSA+MDsgaS0tKSB7XHJcbiAgICAgIHZhciBjb2wgPSBpKjEwO1xyXG4gICAgICBpZihpJTIgPT09IDApe1xyXG4gICAgICAgIGZvcih2YXIgaj0wO2o8PTk7aisrKXtcclxuICAgICAgICAgIHRpbGVzLnB1c2goPFRpbGUgdmFsdWU9e2NvbC1qfSByZWREaWNlPXt0aGlzLnByb3BzLnJlZERpY2V9IC8+KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGZvcih2YXIgaj05O2o+PTA7ai0tKXtcclxuICAgICAgICAgIHRpbGVzLnB1c2goPFRpbGUgdmFsdWU9e2NvbC1qfSByZWREaWNlPXt0aGlzLnByb3BzLnJlZERpY2V9Lz4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC14cy0xMCBjb2wtbGctMTBcIiBzdHlsZT17cmVkVGFifT5cclxuICAgICAgICAgIHt0aWxlc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2U1LmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTF9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2UxMS5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGUyfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlMi5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGUzfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlMTAuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlOH0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTQuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlOX0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTQwLmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTEwfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2xhZGRlci0yMi5wbmdcIn0gc3R5bGU9e2JhZGdlU3R5bGU0fS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2ZpdmUucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlNn0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjEucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlNX0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjIucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlN30vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjIucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlMTF9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZUJvYXJkO1xyXG4iLCJ2YXIgcmFuZG9tZGljZSA9IDA7XHJcbnZhciBjb3VudCA9IDA7XHJcbnZhciBzaXhDb3VudCA9IDA7XHJcbnZhciBtZXNzYWdlID0gXCJcIjtcclxuXHJcbnZhciBTY29yZUJvYXJkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgIHJldHVybiB7ZGljZSA6IFwiLi4vaW1hZ2VzL3JvdGF0aW5nLmpwZ1wiLCBwbGF5ZXJOdW1iZXI6IDEsICBtZXNzYWdlOicnLCBzaXhlckNvdW50OiAwfTtcclxuIH0sXHJcblxyXG4gaGFuZGxlRGljZTogZnVuY3Rpb24oKSB7XHJcbiAgIHZhciBpbWFnZUFycmF5ID0gW1wiLi4vaW1hZ2VzLzEuZ2lmXCIsIFwiLi4vaW1hZ2VzLzIuZ2lmXCIsIFwiLi4vaW1hZ2VzLzMuZ2lmXCIsIFwiLi4vaW1hZ2VzLzQuZ2lmXCIsIFwiLi4vaW1hZ2VzLzUuZ2lmXCIsIFwiLi4vaW1hZ2VzLzYuZ2lmXCJdO1xyXG4gICByYW5kb21kaWNlPU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo1KTtcclxuICAgaWYocmFuZG9tZGljZSA9PT0gNSl7XHJcbiAgICAgIHNpeENvdW50ID0gc2l4Q291bnQrMVxyXG4gICB9XHJcbiAgIHRoaXMuc2V0U3RhdGUoe2RpY2U6aW1hZ2VBcnJheVtyYW5kb21kaWNlXX0pO1xyXG4gICB0aGlzLnByb3BzLmNvbm5lY3RCb2FyZChyYW5kb21kaWNlLCBzaXhDb3VudCk7XHJcbiB9LFxyXG5cclxuIHJlbG9hZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gfSxcclxuXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBzZXRQYWRkaW5nTGVmdCA9IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6MjBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0UGFkZGluZ1RvcCA9IHtcclxuICAgICAgcGFkZGluZ1RvcDozMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZXRDaGFydFdpZHRoID0ge1xyXG4gICAgICB3aWR0aDogXCI3NSVcIixcclxuICAgICAgaGVpZ2h0OiBcIjc1JVwiXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1lc3NhZ2VTdHlsZSA9IHtcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICBjb2xvcjogXCJvcmFuZ2VcIlxyXG4gICAgfVxyXG5cclxuICAgIHZhciBkaWNlSW1hZ2UgPSB7XHJcbiAgICAgIG1hcmdpblRvcCA6IDUsXHJcbiAgICAgIGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIlxyXG4gICAgfVxyXG5cclxuICAgIHZhciBkaWNlQnV0dG9uID0ge1xyXG4gICAgICBtYXJnaW5Ub3AgOiA1LFxyXG4gICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0Q29sb3IgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIGNvbC14cy0yIGNvbC1sZy0yXCIgc3R5bGU9e3NldENvbG9yfT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPXtkaWNlQnV0dG9ufSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZURpY2V9PlRocm93IERpY2U8L2J1dHRvbj5cclxuICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmRpY2VOdW1iZXIgPT09IDEwMCA/IFwiLi4vaW1hZ2VzL3JvdGF0aW5nLmpwZ1wiIDogdGhpcy5zdGF0ZS5kaWNlfSB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHN0eWxlPXtkaWNlSW1hZ2V9IC8+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT17ZGljZUJ1dHRvbn0gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVNZW51fSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5HbyBUbyBNZW51PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNjb3JlQm9hcmQ7XHJcbiIsInZhciBTY29yZUNhcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciByZWRUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxyXG4gICAgICBwYWRkaW5nTGVmdDo1MCxcclxuICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBncmV5VGFiID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjFGMUYxXCIsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OjUsXHJcbiAgICAgIHRleHRBbGlnbjpcImxlZnRcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdGV4dENvbG9yID0ge1xyXG4gICAgICBjb2xvcjpcIndoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGxpIGNsYXNzTmFtZT1cInBhbmVsXCIgc3R5bGU9e3RoaXMucHJvcHMuaGVhZGVyU3R5bGV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkPk51bWJlcsKgb2bCoHRocm93c8KgZG9uZS3CrTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuZGljZUNvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwid2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkPk51bWJlcsKgb2bCoHRpbWVzwqBhwqDigItzaXggd2FzwqByb2xsZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLnNpeENvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkPk51bWJlcsKgb2bCoGxhZGRlcnPCoGNsaW1iZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLmxhZGRlckNvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+TnVtYmVywqBvZsKgc25ha2VzIGVuY291bnRlcmVkPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5zbmFrZUNvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2NvcmVDYXJkO1xyXG4iLCJcclxudmFyIG1lc3NhZ2UxID0gJ1Rlc3RpbmcnO1xyXG52YXIgR2FtZUJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQuanMnKTtcclxudmFyIFNjb3JlQm9hcmQgPSByZXF1aXJlKCcuL3Njb3JlYm9hcmQuanMnKTtcclxudmFyIFNjb3JlQ2FyZCA9IHJlcXVpcmUoJy4vc2NvcmVjYXJkLmpzJyk7XHJcblxyXG5cclxudmFyIFNpbmdsZVBsYXllciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgcmV0dXJuIHtkaWNlTnVtYmVyIDogMSAsIHJlZERpY2U6IDEsIGxhZGRlckNvdW50OiAwLCBzbmFrZUNvdW50OiAwLCBkaWNlQ291bnQ6IDAsIHNpeENvdW50OiAwfTtcclxuIH0sXHJcblxyXG5cclxuXHJcblxyXG4gIGdldENvdW50OiBmdW5jdGlvbih2YWwpIHtcclxuICAgIGlmKCh2YWwgPT0gMykgfHwgKHZhbCA9PSAzMykgfHwgKHZhbCA9PSAgMzkpIHx8ICh2YWwgPT0gIDU4KSB8fCAodmFsID09ICA3MykgfHwgKHZhbCA9PSAgMjYpIHx8ICh2YWwgPT0gIDI4KSAgKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsYWRkZXJDb3VudDogdGhpcy5zdGF0ZS5sYWRkZXJDb3VudCArIDEgfSk7XHJcbiAgICB9ZWxzZSBpZigodmFsPT05OCkgfHwodmFsPT0gOTUpICB8fCAodmFsPT00NikgfHwgKHZhbD09ODkpIHx8ICh2YWw9PTY1KSB8fCAodmFsPT01MykgfHwgKHZhbD09MzApIHx8ICh2YWw9PTMyKSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c25ha2VDb3VudDogdGhpcy5zdGF0ZS5zbmFrZUNvdW50ICsgMSB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBoYW5kbGVEaWNlOiBmdW5jdGlvbihkaWNlTnVtYmVyLCBzaXhDb3VudCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtkaWNlQ291bnQ6IHRoaXMuc3RhdGUuZGljZUNvdW50ICsgMSwgc2l4Q291bnQ6IHNpeENvdW50fSk7XHJcbiAgICAgIHZhciB2YWwgPSAgdGhpcy5zdGF0ZS5yZWREaWNlICsgZGljZU51bWJlciArIDE7XHJcbiAgICAgIHRoaXMuZ2V0Q291bnQodmFsKTtcclxuICAgICAgdmFyIGZpbmFsID0gdGhpcy5zZXREaXNwbGFjZW1lbnQodmFsKTtcclxuICAgICAgaWYoZmluYWwgPCAxMDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZERpY2U6IGZpbmFsfSk7XHJcbiAgICAgIH1lbHNlIGlmICggZmluYWwgPT09IDEwMCl7XHJcbiAgICAgICAgYWxlcnQoXCJDb25ncmF0cyEhISEgWW91IFJlYWNoZWQgSG9tZVwiKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWREaWNlOiBmaW5hbH0pO1xyXG4gICAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2V0RGlzcGxhY2VtZW50OiBmdW5jdGlvbihkaXNwbGFjZW1lbnQpIHtcclxuICAgIHZhciBmaW5hbFZhbHVlID0gZGlzcGxhY2VtZW50O1xyXG4gICAgaWYoZGlzcGxhY2VtZW50IDwgMTAwKXtcclxuICAgICAgaWYoZGlzcGxhY2VtZW50ID09IDMpe1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDI0O1xyXG4gICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gMzMpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA4NztcclxuICAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDM5KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gODE7XHJcbiAgICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA1OCkge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDg1O1xyXG4gICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gNzMpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA5MjtcclxuICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gOTgpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA1OTtcclxuICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gOTUpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSAyNjtcclxuICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gNDYpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSAyNztcclxuICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gODkpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSAxMTtcclxuICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gNjUpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA0O1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA1Mykge1xyXG4gICAgICAgIGZpbmFsVmFsdWUgPSAxMjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKGRpc3BsYWNlbWVudCA9PSAxMDApIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSAxMDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmluYWxWYWx1ZTtcclxuICB9LFxyXG5cclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciBzY29yZUNhcmQgPSB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxyXG4gICAgICBwYWRkaW5nTGVmdDogMjAsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogMjBcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8R2FtZUJvYXJkIHJlZERpY2U9e3RoaXMuc3RhdGUucmVkRGljZX0vPlxyXG4gICAgICAgIDxTY29yZUJvYXJkIGNvbm5lY3RCb2FyZD17dGhpcy5oYW5kbGVEaWNlfSBkaWNlTnVtYmVyPXt0aGlzLnN0YXRlLmRpY2VOdW1iZXJ9IGhhbmRsZU1lbnU9e3RoaXMucHJvcHMuaGFuZGxlTWVudX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgPHVsIGlkPVwiZHJhZ2dhYmxlUGFuZWxMaXN0XCIgY2xhc3NOYW1lPVwiY29sLW1kLTEwXCIgc3R5bGU9e3Njb3JlQ2FyZH0+XHJcbiAgICAgICAgPFNjb3JlQ2FyZCBoZWFkZXJTdHlsZT17e1wiYmFja2dyb3VuZENvbG9yXCI6IFwicmVkXCJ9fSBkaWNlQ291bnQ9e3RoaXMuc3RhdGUuZGljZUNvdW50fSBzaXhDb3VudD17dGhpcy5zdGF0ZS5zaXhDb3VudH0gbGFkZGVyQ291bnQ9e3RoaXMuc3RhdGUubGFkZGVyQ291bnR9IHNuYWtlQ291bnQ9e3RoaXMuc3RhdGUuc25ha2VDb3VudH0vPlxyXG4gICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNpbmdsZVBsYXllcjtcclxuIiwidmFyIFRpbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciByZXZlbnVlU3R5bGUgPSB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206MjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6MjAsXHJcbiAgICAgIGZvbnRTaXplOjE4XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgdmFyIHNvdXJjZVN0eWxlID0ge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOjIwLFxyXG4gICAgICBwYWRkaW5nVG9wOjIwXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciByb3dTdHlsZSA9IHtcclxuICAgICAgYm9yZGVyQm90dG9tOiBcIjNweCBzb2xpZCB3aGl0ZVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBib2R5U3R5bGUgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGNUY1RjVcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaGVhZGVyU3R5bGUgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgYm9yZGVyQm90dG9tOiBcIjNweCBzb2xpZCB3aGl0ZVwiXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNldFBhZGRpbmdMZWZ0ID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjFGMUYxXCIsXHJcbiAgICAgIGNvbG9yOidibGFjaycsXHJcbiAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgcGFkZGluZ0JvdHRvbToxMCxcclxuICAgICAgcGFkZGluZ1RvcDoxMCxcclxuICAgICAgcGFkZGluZ0xlZnQ6IDEwLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNldFBhZGRpbmdUb3AgPSB7XHJcbiAgICAgIHBhZGRpbmdUb3A6MzBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTExID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0OjEwLFxyXG4gICAgICBtYXJnaW5Ub3A6IC01LFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICB3aWR0aDogMjAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMTBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxMiA9IHtcclxuICAgICAgbWFyZ2luTGVmdDoxMCxcclxuICAgICAgbWFyZ2luVG9wOiAtNSxcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHRoaXMucHJvcHMucGxheWVyTnVtYmVyID09PSA0IHx8IDMgfHwgMiB8fCAxKXtcclxuICAgICAgdmFyIGhpZ2hsaWdodCA9IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OjEwLFxyXG4gICAgICAgIG1hcmdpblRvcDogLTUsXHJcbiAgICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgICB3aWR0aDogMjAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB2YXIgaGlnaGxpZ2h0ID0ge1xyXG4gICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICBmb250U2l6ZTogMCxcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaWRlRGl2ID0ge1xyXG4gICAgICB3aWR0aDogMCxcclxuICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICBmb250U2l6ZTogMCxcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGlnaGxpZ2h0MSA9IHtcclxuICAgICAgbWFyZ2luTGVmdDotNSxcclxuICAgICAgbWFyZ2luVG9wOi0zLFxyXG4gICAgICBwb3NpdGlvbjpcImFic29sdXRlXCIsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaWdobGlnaHQyID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0OjM5LFxyXG4gICAgICBtYXJnaW5Ub3A6IC0zLFxyXG4gICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICBwb3NpdGlvbjpcImFic29sdXRlXCIsXHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZ2hsaWdodDMgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6NjAsXHJcbiAgICAgIG1hcmdpblRvcDogLTMsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaWdobGlnaHQ0ID0ge1xyXG4gICAgICBtYXJnaW5MZWZ0OjE3LFxyXG4gICAgICBtYXJnaW5Ub3A6IC0zLFxyXG4gICAgICBwb3NpdGlvbjpcImFic29sdXRlXCIsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaWdsaWdodEFycmF5ID0gWyAxLCAyMCwgNTAsIDYwXTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEgY29sLXhzLTEgY29sLWxnLTFcIiBzdHlsZT17c2V0UGFkZGluZ0xlZnR9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnZhbHVlfVxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICA8ZGl2ICBzdHlsZT17IHRoaXMucHJvcHMucmVkRGljZSA9PT0gdGhpcy5wcm9wcy52YWx1ZSA/IGhpZ2hsaWdodDEgOiBoaWRlRGl2fT48L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGlsZTtcclxuIl19
