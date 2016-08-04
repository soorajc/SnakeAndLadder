var Tile = React.createClass({
  render: function() {
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

    var hideDiv = {
      width: 0,
      height: 0,
      fontSize: 0,
    }

    var highlight1 = {
      marginLeft: -5,
      marginTop: -3,
      position: "absolute",
      height: 20,
      width: 20,
      backgroundColor: 'red',
      borderRadius: 10
    }

    var highlight2 = {
      marginLeft: 17,
      marginTop: -3,
      height: 20,
      position:"absolute",
      width: 20,
      backgroundColor: 'green',
      borderRadius: 10
    }

    var highlight3 = {
      marginLeft: 39,
      marginTop: -3,
      height: 20,
      position:"absolute",
      width: 20,
      backgroundColor: 'blue',
      borderRadius: 10
    }

    var highlight4 = {
      marginLeft: 60,
      marginTop: -3,
      position:"absolute",
      height: 20,
      width: 20,
      backgroundColor: 'yellow',
      borderRadius: 10
    }

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


module.exports = Tile;
