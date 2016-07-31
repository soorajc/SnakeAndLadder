(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var MainApp = React.createClass({
  displayName: "MainApp",

  getInitialState: function getInitialState() {
    return { diceNumber: 1, playerNumber: 0 };
  },

  componentDidMount: function componentDidMount() {
    var snd = new Audio("../images/machines.mp3");
    snd.loop = true;
    //snd.play();
  },

  handleDice: function handleDice(diceNumber, playerNumber) {
    console.log("This.state.player--", playerNumber);
    this.setState({ playerNumber: playerNumber });
    var displacement = this.state.diceNumber + diceNumber + 1;
    var finalValue = displacement;
    var ladder = new Audio("../images/up.mp3");
    var snake = new Audio("../images/down.mp3");
    var tap = new Audio("../images/tap.mp3");
    tap.play();
    console.log("displacement", displacement);
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
      this.setState({ diceNumber: finalValue });
    } else if (displacement == 100) {
      this.setState({ diceNumber: displacement });
    }
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      this.state.diceNumber === 100 ? React.createElement(Congrats, null) : React.createElement(GameBoard, { diceNumber: this.state.diceNumber, playerNumber: this.state.playerNumber }),
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
          tiles.push(React.createElement(Tile, { value: col - j, displacement: this.props.diceNumber, playerNumber: this.props.playerNumber }));
        }
      } else {
        for (var j = 9; j >= 0; j--) {
          tiles.push(React.createElement(Tile, { value: col - j, displacement: this.props.diceNumber, playerNumber: this.props.playerNumber }));
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

var Tile = React.createClass({
  displayName: "Tile",

  render: function render() {
    var _this = this;

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
      border: "2px solid black",
      paddingBottom: 5,
      paddingTop: 10,
      paddingLeft: 10,
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

    if (this.props.playerNumber === 1) {
      var highlight = {
        marginLeft: 10,
        marginTop: -5,
        height: 20,
        width: 20,
        backgroundColor: 'red',
        borderRadius: 10
      };
    } else if (this.props.playerNumber === 2) {
      var highlight = {
        marginLeft: 10,
        marginTop: -5,
        height: 20,
        width: 20,
        backgroundColor: 'green',
        borderRadius: 10
      };
    } else if (this.props.playerNumber === 3) {
      var highlight = {
        marginLeft: 10,
        marginTop: -5,
        height: 20,
        width: 20,
        backgroundColor: 'blue',
        borderRadius: 10
      };
    } else if (this.props.playerNumber === 4) {
      var highlight = {
        marginLeft: 10,
        marginTop: -5,
        height: 20,
        width: 20,
        backgroundColor: 'yellow',
        borderRadius: 10
      };
    } else {}

    var hideDiv = {
      width: 0,
      height: 0
    };

    return React.createElement(
      "div",
      { className: "col-md-1 col-xs-1 col-lg-1", style: setPaddingLeft },
      this.props.value,
      (function () {
        if (_this.props.playerNumber === 1) {
          return React.createElement("div", { style: _this.props.value === _this.props.displacement ? highlight : hideDiv });
        } else if (_this.props.playerNumber === 2) {
          return React.createElement("div", { style: _this.props.value === _this.props.displacement ? highlight : hideDiv });
        } else if (_this.props.playerNumber === 3) {
          return React.createElement("div", { style: _this.props.value === _this.props.displacement ? highlight : hideDiv });
        } else if (_this.props.playerNumber === 4) {
          return React.createElement("div", { style: _this.props.value === _this.props.displacement ? highlight : hideDiv });
        } else {
          return React.createElement("div", { style: badgeStyle11 });
        }
      })()
    );
  }
});

var randomdice = 0;

var ScoreBoard = React.createClass({
  displayName: "ScoreBoard",

  getInitialState: function getInitialState() {
    return { dice: "../images/rotating.jpg", playerNumber: 1 };
  },

  handleDice: function handleDice() {
    var imageArray = ["../images/1.gif", "../images/2.gif", "../images/3.gif", "../images/4.gif", "../images/5.gif", "../images/6.gif"];
    randomdice = Math.round(Math.random() * 5);
    if (this.state.playerNumber < 4) {
      this.setState({ playerNumber: this.state.playerNumber + 1 });
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9TbmFrZSBhbmQgTGFkZGVyL1JlYWN0LUZvci1CZWdpbm5lcnMtU3RhcnRlci1GaWxlcy8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUU5QixpQkFBZSxFQUFFLDJCQUFXO0FBQzNCLFdBQU8sRUFBQyxVQUFVLEVBQUcsQ0FBQyxFQUFHLFlBQVksRUFBQyxDQUFDLEVBQUMsQ0FBQztHQUMxQzs7QUFFQSxtQkFBaUIsRUFBQSw2QkFBRztBQUNsQixRQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQzlDLE9BQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztHQUVqQjs7QUFFRCxZQUFVLEVBQUUsb0JBQVMsVUFBVSxFQUFFLFlBQVksRUFBRTtBQUM3QyxXQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2pELFFBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUM3QyxRQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUUsQ0FBQyxDQUFDO0FBQ3pELFFBQUksVUFBVSxHQUFHLFlBQVksQ0FBQztBQUM5QixRQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLFFBQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDNUMsUUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUN6QyxPQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDWCxXQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUMxQyxRQUFHLFlBQVksR0FBRyxHQUFHLEVBQUM7QUFDcEIsVUFBRyxZQUFZLElBQUksQ0FBQyxFQUFDO0FBQ3BCLGtCQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztPQUNkLE1BQUssSUFBRyxZQUFZLElBQUksRUFBRSxFQUFFO0FBQzVCLGtCQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztPQUNkLE1BQUssSUFBRyxZQUFZLElBQUksRUFBRSxFQUFFO0FBQzVCLGtCQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztPQUNkLE1BQUssSUFBRyxZQUFZLElBQUksRUFBRSxFQUFFO0FBQzVCLGtCQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztPQUNkLE1BQUssSUFBRyxZQUFZLElBQUksRUFBRSxFQUFFO0FBQzVCLGtCQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztPQUNmLE1BQUssSUFBRyxZQUFZLElBQUksRUFBRSxFQUFFO0FBQzNCLGtCQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztPQUNkLE1BQUssSUFBRyxZQUFZLElBQUksRUFBRSxFQUFFO0FBQzNCLGtCQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztPQUNkLE1BQUssSUFBRyxZQUFZLElBQUksRUFBRSxFQUFFO0FBQzNCLGtCQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztPQUNkLE1BQUssSUFBRyxZQUFZLElBQUksRUFBRSxFQUFFO0FBQzNCLGtCQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGFBQUssQ0FB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O0FBSUgsUUFBUSxDQUFDLE1BQU0sQ0FDYixvQkFBQyxPQUFPLE9BQUcsRUFDWCxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNuQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG5cclxuXHJcbnZhciBNYWluQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICByZXR1cm4ge2RpY2VOdW1iZXIgOiAxICwgcGxheWVyTnVtYmVyOjB9O1xyXG4gfSxcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB2YXIgc25kID0gbmV3IEF1ZGlvKFwiLi4vaW1hZ2VzL21hY2hpbmVzLm1wM1wiKTtcclxuICAgIHNuZC5sb29wID0gdHJ1ZTtcclxuICAgIC8vc25kLnBsYXkoKTtcclxuICB9LFxyXG5cclxuICBoYW5kbGVEaWNlOiBmdW5jdGlvbihkaWNlTnVtYmVyLCBwbGF5ZXJOdW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiVGhpcy5zdGF0ZS5wbGF5ZXItLVwiLCBwbGF5ZXJOdW1iZXIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyTnVtYmVyOiBwbGF5ZXJOdW1iZXIgfSk7XHJcbiAgICB2YXIgZGlzcGxhY2VtZW50ID0gdGhpcy5zdGF0ZS5kaWNlTnVtYmVyICsgZGljZU51bWJlciArMTtcclxuICAgIHZhciBmaW5hbFZhbHVlID0gZGlzcGxhY2VtZW50O1xyXG4gICAgdmFyIGxhZGRlciA9IG5ldyBBdWRpbyhcIi4uL2ltYWdlcy91cC5tcDNcIik7XHJcbiAgICB2YXIgc25ha2UgPSBuZXcgQXVkaW8oXCIuLi9pbWFnZXMvZG93bi5tcDNcIik7XHJcbiAgICB2YXIgdGFwID0gbmV3IEF1ZGlvKFwiLi4vaW1hZ2VzL3RhcC5tcDNcIik7XHJcbiAgICB0YXAucGxheSgpO1xyXG4gICAgY29uc29sZS5sb2coXCJkaXNwbGFjZW1lbnRcIiwgZGlzcGxhY2VtZW50KTtcclxuICAgIGlmKGRpc3BsYWNlbWVudCA8IDEwMCl7XHJcbiAgICAgIGlmKGRpc3BsYWNlbWVudCA9PSAzKXtcclxuICAgICAgIGZpbmFsVmFsdWUgPSAyNDtcclxuICAgICAgIGxhZGRlci5wbGF5KCk7XHJcbiAgICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSAzMykge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDg3O1xyXG4gICAgICAgbGFkZGVyLnBsYXkoKTtcclxuICAgICAgfWVsc2UgaWYoZGlzcGxhY2VtZW50ID09IDM5KSB7XHJcbiAgICAgICBmaW5hbFZhbHVlID0gODE7XHJcbiAgICAgICBsYWRkZXIucGxheSgpO1xyXG4gICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gNTgpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA4NTtcclxuICAgICAgIGxhZGRlci5wbGF5KCk7XHJcbiAgICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA3Mykge1xyXG4gICAgICAgZmluYWxWYWx1ZSA9IDkyO1xyXG4gICAgICAgbGFkZGVyLnBsYXkoKTtcclxuICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gOTgpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA1OTtcclxuICAgICAgIHNuYWtlLnBsYXkoKTtcclxuICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gOTUpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSAyNjtcclxuICAgICAgIHNuYWtlLnBsYXkoKTtcclxuICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gNDYpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSAyNztcclxuICAgICAgIHNuYWtlLnBsYXkoKTtcclxuICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gODkpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSAxMTtcclxuICAgICAgIHNuYWtlLnBsYXkoKTtcclxuICAgICB9ZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gNjUpIHtcclxuICAgICAgIGZpbmFsVmFsdWUgPSA0O1xyXG4gICAgICAgc25ha2UucGxheSgpO1xyXG4gICAgIH1lbHNlIGlmKGRpc3BsYWNlbWVudCA9PSA1Mykge1xyXG4gICAgICAgIGZpbmFsVmFsdWUgPSAxMjtcclxuICAgICAgICBzbmFrZS5wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGljZU51bWJlcjogZmluYWxWYWx1ZSB9KTtcclxuICAgIH0gZWxzZSBpZihkaXNwbGFjZW1lbnQgPT0gMTAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RpY2VOdW1iZXI6IGRpc3BsYWNlbWVudCB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5kaWNlTnVtYmVyID09PSAxMDAgPyA8Q29uZ3JhdHMgLz4gOiA8R2FtZUJvYXJkICBkaWNlTnVtYmVyPXt0aGlzLnN0YXRlLmRpY2VOdW1iZXJ9IHBsYXllck51bWJlcj17dGhpcy5zdGF0ZS5wbGF5ZXJOdW1iZXJ9Lz59XHJcbiAgICAgICAgPFNjb3JlQm9hcmQgY29ubmVjdEJvYXJkPXt0aGlzLmhhbmRsZURpY2V9IGRpY2VOdW1iZXI9e3RoaXMuc3RhdGUuZGljZU51bWJlcn0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG52YXIgQ29uZ3JhdHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciByZWRUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxyXG4gICAgICBwYWRkaW5nTGVmdDo1MCxcclxuICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBncmV5VGFiID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjFGMUYxXCIsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OjUsXHJcbiAgICAgIHRleHRBbGlnbjpcImxlZnRcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdGV4dENvbG9yID0ge1xyXG4gICAgICBjb2xvcjpcIndoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBjb2wteHMtMTAgY29sLWxnLTEwXCIgc3R5bGU9e3JlZFRhYn0+XHJcbiAgICAgICAgICBDb25ncmF0cyEhISEhISEhISEhISEhISEhWW91IFJlYWNoZWQgSG9tZSBTYWZlbHkuLi4uLi5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgR2FtZUJvYXJkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgcmVkVGFiID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjREIxNjI3XCIsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxyXG4gICAgICBwYWRkaW5nVG9wOiAyMCxcclxuICAgICAgcGFkZGluZ0xlZnQ6NTBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGdyZXlUYWIgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgcGFkZGluZ0xlZnQ6NSxcclxuICAgICAgdGV4dEFsaWduOlwibGVmdFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0ZXh0Q29sb3IgPSB7XHJcbiAgICAgIGNvbG9yOlwid2hpdGVcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTEgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MjYwLFxyXG4gICAgICB0b3A6MTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAyNTAsXHJcbiAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTIgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6NDYwLFxyXG4gICAgICB0b3A6MTYwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzUwLFxyXG4gICAgICB3aWR0aDogNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU0ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjI2MCxcclxuICAgICAgdG9wOjM2MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDMyMCxcclxuICAgICAgd2lkdGg6IDIyMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6Njc4LFxyXG4gICAgICB0b3A6NTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiA2NzUsXHJcbiAgICAgIHdpZHRoOiAyMjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU2ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjQ2MCxcclxuICAgICAgdG9wOjE5MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMyA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo4ODAsXHJcbiAgICAgIHRvcDo4MCxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDM2MCxcclxuICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTYgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MTE1LFxyXG4gICAgICB0b3A6ODAsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAyOTUsXHJcbiAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZTcgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6MjE3LFxyXG4gICAgICB0b3A6MTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiA1OTUsXHJcbiAgICAgIHdpZHRoOiA0MjAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGU4ID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OjUyNSxcclxuICAgICAgdG9wOjIwLFxyXG4gICAgICBib3R0b206IDEwLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogMzcwLFxyXG4gICAgICB3aWR0aDogMTIwLFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlOSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo2MTIsXHJcbiAgICAgIHRvcDoxNTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNzAsXHJcbiAgICAgIHdpZHRoOiAxNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxMCA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo3OTUsXHJcbiAgICAgIHRvcDoxNTUsXHJcbiAgICAgIGJvdHRvbTogMTAsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgaGVpZ2h0OiAzNzAsXHJcbiAgICAgIHdpZHRoOiAxNDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxMSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDo3OTAsXHJcbiAgICAgIHRvcDoxNSxcclxuICAgICAgYm90dG9tOiAxMCxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBoZWlnaHQ6IDMyMCxcclxuICAgICAgd2lkdGg6IDIyMCxcclxuICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdGlsZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAxMDsgaSA+MDsgaS0tKSB7XHJcbiAgICAgIHZhciBjb2wgPSBpKjEwO1xyXG4gICAgICBpZihpJTIgPT09IDApe1xyXG4gICAgICAgIGZvcih2YXIgaj0wO2o8PTk7aisrKXtcclxuICAgICAgICAgIHRpbGVzLnB1c2goPFRpbGUgdmFsdWU9e2NvbC1qfSBkaXNwbGFjZW1lbnQ9e3RoaXMucHJvcHMuZGljZU51bWJlcn0gcGxheWVyTnVtYmVyPXt0aGlzLnByb3BzLnBsYXllck51bWJlcn0vPik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBmb3IodmFyIGo9OTtqPj0wO2otLSl7XHJcbiAgICAgICAgICB0aWxlcy5wdXNoKDxUaWxlIHZhbHVlPXtjb2wtan0gZGlzcGxhY2VtZW50PXt0aGlzLnByb3BzLmRpY2VOdW1iZXJ9IHBsYXllck51bWJlcj17dGhpcy5wcm9wcy5wbGF5ZXJOdW1iZXJ9Lz4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC14cy0xMCBjb2wtbGctMTBcIiBzdHlsZT17cmVkVGFifT5cclxuICAgICAgICAgIHt0aWxlc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2U1LmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTF9Lz5cclxuICAgICAgICA8aW1nICBzcmM9e1wiLi9pbWFnZXMvdGVzdGRvc2UxMS5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGUyfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlMi5naWZcIn0gc3R5bGU9e2JhZGdlU3R5bGUzfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL3Rlc3Rkb3NlMTAuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlOH0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTQuZ2lmXCJ9IHN0eWxlPXtiYWRnZVN0eWxlOX0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy90ZXN0ZG9zZTQwLmdpZlwifSBzdHlsZT17YmFkZ2VTdHlsZTEwfS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2xhZGRlci0yMi5wbmdcIn0gc3R5bGU9e2JhZGdlU3R5bGU0fS8+XHJcbiAgICAgICAgPGltZyAgc3JjPXtcIi4vaW1hZ2VzL2ZpdmUucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlNn0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjEucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlNX0vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjIucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlN30vPlxyXG4gICAgICAgIDxpbWcgIHNyYz17XCIuL2ltYWdlcy9sYWRkZXItMjIucG5nXCJ9IHN0eWxlPXtiYWRnZVN0eWxlMTF9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG52YXIgVGlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHJldmVudWVTdHlsZSA9IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbToyMCxcclxuICAgICAgcGFkZGluZ1RvcDoyMCxcclxuICAgICAgZm9udFNpemU6MThcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICB2YXIgc291cmNlU3R5bGUgPSB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206MjAsXHJcbiAgICAgIHBhZGRpbmdUb3A6MjBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHJvd1N0eWxlID0ge1xyXG4gICAgICBib3JkZXJCb3R0b206IFwiM3B4IHNvbGlkIHdoaXRlXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJvZHlTdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0Y1RjVGNVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoZWFkZXJTdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0YxRjFGMVwiLFxyXG4gICAgICBib3JkZXJCb3R0b206IFwiM3B4IHNvbGlkIHdoaXRlXCJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0UGFkZGluZ0xlZnQgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGMUYxRjFcIixcclxuICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOjUsXHJcbiAgICAgIHBhZGRpbmdUb3A6MTAsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAxMCxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZXRQYWRkaW5nVG9wID0ge1xyXG4gICAgICBwYWRkaW5nVG9wOjMwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJhZGdlU3R5bGUxMSA9IHtcclxuICAgICAgbWFyZ2luTGVmdDoxMCxcclxuICAgICAgbWFyZ2luVG9wOiAtNSxcclxuICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYWRnZVN0eWxlMTIgPSB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6MTAsXHJcbiAgICAgIG1hcmdpblRvcDogLTUsXHJcbiAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgfTtcclxuXHJcbiAgICBpZih0aGlzLnByb3BzLnBsYXllck51bWJlciA9PT0gMSl7XHJcbiAgICAgIHZhciBoaWdobGlnaHQgPSB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDoxMCxcclxuICAgICAgICBtYXJnaW5Ub3A6IC01LFxyXG4gICAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgICB9XHJcbiAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBsYXllck51bWJlciA9PT0gMil7XHJcbiAgICAgIHZhciBoaWdobGlnaHQgPSB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDoxMCxcclxuICAgICAgICBtYXJnaW5Ub3A6IC01LFxyXG4gICAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwXHJcbiAgICAgIH1cclxuICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucGxheWVyTnVtYmVyID09PSAzKXtcclxuICAgICAgdmFyIGhpZ2hsaWdodCA9IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OjEwLFxyXG4gICAgICAgIG1hcmdpblRvcDogLTUsXHJcbiAgICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgICB3aWR0aDogMjAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgICB9XHJcbiAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBsYXllck51bWJlciA9PT0gNCl7XHJcbiAgICAgIHZhciBoaWdobGlnaHQgPSB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDoxMCxcclxuICAgICAgICBtYXJnaW5Ub3A6IC01LFxyXG4gICAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMFxyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpZGVEaXYgPSB7XHJcbiAgICAgIHdpZHRoOiAwLFxyXG4gICAgICBoZWlnaHQ6IDBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xIGNvbC14cy0xIGNvbC1sZy0xXCIgc3R5bGU9e3NldFBhZGRpbmdMZWZ0fT5cclxuICAgICAgICB7dGhpcy5wcm9wcy52YWx1ZX1cclxuICAgICAgIHsoKCkgPT4ge1xyXG4gICAgICAgaWYgKHRoaXMucHJvcHMucGxheWVyTnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgPGRpdiAgc3R5bGU9e3RoaXMucHJvcHMudmFsdWUgPT09IHRoaXMucHJvcHMuZGlzcGxhY2VtZW50ID8gaGlnaGxpZ2h0IDogaGlkZURpdn0+PC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgIH1cclxuICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMucGxheWVyTnVtYmVyID09PSAyKXtcclxuICAgICAgIHJldHVybihcclxuICAgICAgICAgPGRpdiAgc3R5bGU9e3RoaXMucHJvcHMudmFsdWUgPT09IHRoaXMucHJvcHMuZGlzcGxhY2VtZW50ID8gaGlnaGxpZ2h0IDogaGlkZURpdn0+PC9kaXY+XHJcbiAgICAgICApO1xyXG4gICAgIH1lbHNlIGlmICh0aGlzLnByb3BzLnBsYXllck51bWJlciA9PT0gMyl7XHJcbiAgICAgICByZXR1cm4oXHJcbiAgICAgICAgIDxkaXYgIHN0eWxlPXt0aGlzLnByb3BzLnZhbHVlID09PSB0aGlzLnByb3BzLmRpc3BsYWNlbWVudCA/IGhpZ2hsaWdodCA6IGhpZGVEaXZ9PjwvZGl2PlxyXG4gICAgICAgKTtcclxuICAgICB9ZWxzZSBpZiAodGhpcy5wcm9wcy5wbGF5ZXJOdW1iZXIgPT09IDQpe1xyXG4gICAgICAgcmV0dXJuKFxyXG4gICAgICAgICA8ZGl2ICBzdHlsZT17dGhpcy5wcm9wcy52YWx1ZSA9PT0gdGhpcy5wcm9wcy5kaXNwbGFjZW1lbnQgPyBoaWdobGlnaHQgOiBoaWRlRGl2fT48L2Rpdj5cclxuICAgICAgICk7XHJcbiAgICAgICB9XHJcbiAgICAgICBlbHNle1xyXG4gICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgIHN0eWxlPXtiYWRnZVN0eWxlMTF9PjwvZGl2PlxyXG4gICAgICAgKTtcclxuICAgICAgIH1cclxuICAgICAgIH0pKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIHJhbmRvbWRpY2UgPSAwO1xyXG5cclxudmFyIFNjb3JlQm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgcmV0dXJuIHtkaWNlIDogXCIuLi9pbWFnZXMvcm90YXRpbmcuanBnXCIsIHBsYXllck51bWJlcjogMX07XHJcbiB9LFxyXG5cclxuIGhhbmRsZURpY2U6IGZ1bmN0aW9uKCkge1xyXG4gICB2YXIgaW1hZ2VBcnJheSA9IFtcIi4uL2ltYWdlcy8xLmdpZlwiLCBcIi4uL2ltYWdlcy8yLmdpZlwiLCBcIi4uL2ltYWdlcy8zLmdpZlwiLCBcIi4uL2ltYWdlcy80LmdpZlwiLCBcIi4uL2ltYWdlcy81LmdpZlwiLCBcIi4uL2ltYWdlcy82LmdpZlwiXTtcclxuICAgcmFuZG9tZGljZT1NYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqNSk7XHJcbiAgIGlmKHRoaXMuc3RhdGUucGxheWVyTnVtYmVyPDQpe1xyXG4gICAgIHRoaXMuc2V0U3RhdGUoe3BsYXllck51bWJlcjp0aGlzLnN0YXRlLnBsYXllck51bWJlciArIDF9KTtcclxuICAgfWVsc2Uge1xyXG4gICAgIHRoaXMuc2V0U3RhdGUoe3BsYXllck51bWJlcjogMX0pO1xyXG4gICB9XHJcblxyXG4gICB0aGlzLnNldFN0YXRlKHtkaWNlOmltYWdlQXJyYXlbcmFuZG9tZGljZV19KTtcclxuICAgdGhpcy5wcm9wcy5jb25uZWN0Qm9hcmQocmFuZG9tZGljZSwgdGhpcy5zdGF0ZS5wbGF5ZXJOdW1iZXIpO1xyXG4gfSxcclxuXHJcbiByZWxvYWRlciA6IGZ1bmN0aW9uKCkge1xyXG4gICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2V0UGFkZGluZ0xlZnQgPSB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OjIwXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNldFBhZGRpbmdUb3AgPSB7XHJcbiAgICAgIHBhZGRpbmdUb3A6MzBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0Q2hhcnRXaWR0aCA9IHtcclxuICAgICAgd2lkdGg6IFwiNzUlXCIsXHJcbiAgICAgIGhlaWdodDogXCI3NSVcIlxyXG4gICAgfVxyXG5cclxuICAgIHZhciBjYW52YXNXaWR0aCA9IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiYXV0b1wiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBzZXRDb2xvciA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0Y1RjVGNVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLXhzLTIgY29sLWxnLTJcIiBzdHlsZT17c2V0Q29sb3J9PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuZGljZU51bWJlciA9PT0gMTAwID8gdGhpcy5yZWxvYWRlciA6IHRoaXMuaGFuZGxlRGljZX0+e3RoaXMucHJvcHMuZGljZU51bWJlciA9PT0gMTAwID8gXCJQbGF5IEFnYWluXCI6XCJUaHJvdyBEaWNlXCJ9PC9idXR0b24+XHJcbiAgICAgICAgIFRoZSBkaWNlIHZhbHVlIGlzIHtyYW5kb21kaWNlKzF9XHJcbiAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuZGljZU51bWJlciA9PT0gMTAwID8gXCIuLi9pbWFnZXMvcm90YXRpbmcuanBnXCIgOiB0aGlzLnN0YXRlLmRpY2V9IHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxudmFyIFByb2R1Y3RHcmlkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2V0UGFkZGluZ0xlZnQgPSB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OjIwXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBnaXZlbkRhdGEgPSB7XHJcbiAgICAgIFwicHJvZHVjdERhdGFcIiA6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInZpZXdcIjogXCIxMDk4OVwiLFxyXG4gICAgICAgICAgXCJwdXJjaGFzZVwiOlwiODkwOFwiLFxyXG4gICAgICAgICAgXCJjb252ZXJzaW9uXCI6IFwiMy41JVwiLFxyXG4gICAgICAgICAgXCJyZXZlbnVlXCI6XCIkNTQyNzRcIixcclxuICAgICAgICAgIFwicmFua1wiOlwiMVwiLFxyXG4gICAgICAgICAgXCJwcm9kdWN0TmFtZVwiOiBcIlRXSVNURUQgQk9PVFNcIixcclxuICAgICAgICAgIFwic3RhdHVzXCI6IFwiMTU0IFZpZXdzIDIgRGF5cyBBZ29cIixcclxuICAgICAgICAgIFwicHJvZHVjdEltYWdlVXJsXCIgOiBcIi4vaW1hZ2VzL2Jvb3QuanBnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwidmlld1wiOiBcIjEwOTg5XCIsXHJcbiAgICAgICAgICBcInB1cmNoYXNlXCI6XCI4OTA4XCIsXHJcbiAgICAgICAgICBcImNvbnZlcnNpb25cIjogXCIzLjUlXCIsXHJcbiAgICAgICAgICBcInJldmVudWVcIjpcIiQ1NDI3NFwiLFxyXG4gICAgICAgICAgXCJyYW5rXCI6XCIyXCIsXHJcbiAgICAgICAgICBcInByb2R1Y3ROYW1lXCI6IFwiVFdJU1RFRCBCT09UU1wiLFxyXG4gICAgICAgICAgXCJzdGF0dXNcIjogXCIxNTQgVmlld3MgMiBEYXlzIEFnb1wiLFxyXG4gICAgICAgICAgXCJwcm9kdWN0SW1hZ2VVcmxcIiA6IFwiLi9pbWFnZXMvYm9vdC5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJ2aWV3XCI6IFwiMTA5ODlcIixcclxuICAgICAgICAgIFwicHVyY2hhc2VcIjpcIjg5MDhcIixcclxuICAgICAgICAgIFwiY29udmVyc2lvblwiOiBcIjMuNSVcIixcclxuICAgICAgICAgIFwicmV2ZW51ZVwiOlwiJDU0Mjc0XCIsXHJcbiAgICAgICAgICBcInJhbmtcIjpcIjNcIixcclxuICAgICAgICAgIFwicHJvZHVjdE5hbWVcIjogXCJUV0lTVEVEIEJPT1RTXCIsXHJcbiAgICAgICAgICBcInN0YXR1c1wiOiBcIjE1NCBWaWV3cyAyIERheXMgQWdvXCIsXHJcbiAgICAgICAgICBcInByb2R1Y3RJbWFnZVVybFwiIDogXCIuL2ltYWdlcy9ib290LmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInZpZXdcIjogXCIxMDk4OVwiLFxyXG4gICAgICAgICAgXCJwdXJjaGFzZVwiOlwiODkwOFwiLFxyXG4gICAgICAgICAgXCJjb252ZXJzaW9uXCI6IFwiMy41JVwiLFxyXG4gICAgICAgICAgXCJyZXZlbnVlXCI6XCIkNTQyNzRcIixcclxuICAgICAgICAgIFwicmFua1wiOlwiNFwiLFxyXG4gICAgICAgICAgXCJwcm9kdWN0TmFtZVwiOiBcIlRXSVNURUQgQk9PVFNcIixcclxuICAgICAgICAgIFwic3RhdHVzXCI6IFwiMTU0IFZpZXdzIDIgRGF5cyBBZ29cIixcclxuICAgICAgICAgIFwicHJvZHVjdEltYWdlVXJsXCIgOiBcIi4vaW1hZ2VzL2Jvb3QuanBnXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3NldFBhZGRpbmdMZWZ0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIiA+XHJcbiAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ncmlkVGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdpdmVuRGF0YS5wcm9kdWN0RGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPFByb2R1Y3RUaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZT17aXRlbS5wcm9kdWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz17aXRlbS5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SW1hZ2VVcmw9e2l0ZW0ucHJvZHVjdEltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmFuaz17aXRlbS5yYW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlldz17aXRlbS52aWV3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2U9e2l0ZW0ucHVyY2hhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXZlbnVlPXtpdGVtLnJldmVudWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uPXtpdGVtLmNvbnZlcnNpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz4pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbnZhciBQcm9kdWN0VGlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHNldEJvcmRlciA9IHtcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiA1LFxyXG4gICAgICBtYXJnaW5SaWdodDozMCxcclxuICAgICAgbWFyZ2luTGVmdDoyMFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdGV4dENvbG9yID0ge1xyXG4gICAgICBjb2xvcjpcIiNEQkRCREJcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFkZ2VTdHlsZSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDoxNSxcclxuICAgICAgdG9wOjE1LFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IDgsXHJcbiAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgYmFja2dyb3VuZDogXCIjRjFGMUYxXCIsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGxhYmVsU3R5bGUgPSB7XHJcbiAgICAgIGNvbG9yOlwiI0RCREJEQlwiLFxyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzZXRQYWRkaW5nTGVmdCA9IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6MjBcclxuICAgIH07XHJcblxyXG5cclxuICAgIHZhciBjb3VudFN0eWxlID0ge1xyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFycm93U3R5bGUgPSB7XHJcbiAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGZvbnRTaXplOiAyMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZXRQb3NpdGlvbiA9IHtcclxuICAgICAgcG9zaXRpb246XCJyZWxhdGl2ZVwiXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNldFRpbGVCYWNrZ3JvdW5kID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXFwnLi9pbWFnZXMvdGlsZS1iZy5wbmdcXCcpJyxcclxuICAgICAgYm9yZGVyVG9wOlwiMXB4IHNvbGlkICNEQkRCREJcIixcclxuICAgICAgaGVpZ2h0OiAxODBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yXCIgc3R5bGU9e3NldEJvcmRlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2JhZGdlU3R5bGV9Pnt0aGlzLnByb3BzLnJhbmt9PC9kaXY+XHJcbiAgICAgICAgICAgIDxpbWcgIHNyYz17dGhpcy5wcm9wcy5wcm9kdWN0SW1hZ2VVcmx9IHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMzAwXCIgLz5cclxuICAgICAgICAgICAgPGg2IHN0eWxlPXt0ZXh0Q29sb3J9Pnt0aGlzLnByb3BzLnByb2R1Y3ROYW1lfTwvaDY+XHJcbiAgICAgICAgICAgIDxoNiBzdHlsZT17dGV4dENvbG9yfT57dGhpcy5wcm9wcy5zdGF0dXN9PC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiIHN0eWxlPXtzZXRUaWxlQmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtsYWJlbFN0eWxlfT5WaWV3PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtjb3VudFN0eWxlfT57dGhpcy5wcm9wcy52aWV3fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2xhYmVsU3R5bGV9PlB1cmNoYXNlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtjb3VudFN0eWxlfT57dGhpcy5wcm9wcy5wdXJjaGFzZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtsYWJlbFN0eWxlfT5Db252ZXJzaW9uczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17Y291bnRTdHlsZX0+e3RoaXMucHJvcHMuY29udmVyc2lvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtsYWJlbFN0eWxlfT5SZXZlbnVlczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17Y291bnRTdHlsZX0+e3RoaXMucHJvcHMucmV2ZW51ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXthcnJvd1N0eWxlfT5ePC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8TWFpbkFwcCAvPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbik7XHJcbiJdfQ==
