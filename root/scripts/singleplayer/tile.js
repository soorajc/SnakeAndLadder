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
      </span>
      </div>
    );
  }
});

module.exports = Tile;
