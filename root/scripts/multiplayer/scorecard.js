var ScoreCard = React.createClass({
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

    var textPos = {
      textAlign:'center',
    };

    return (
      <li className="panel" style={this.props.headerStyle}>
          <div className="panel-heading"></div>
          <div className="panel-body">
          <table className="table table-striped">
            <tbody>
              <tr className="info">
                <td>Number of throws done-­</td>
                <td style={textPos}>{this.props.diceCount}</td>
              </tr>
              <tr className="warning">
                <td>Number of times a ​six was rolled</td>
                <td style={textPos}>{this.props.sixCount}</td>
              </tr>
              <tr className="success">
                <td>Number of ladders climbed</td>
                <td style={textPos}>{this.props.ladderCount}</td>
              </tr>
              <tr className="danger">
                <td>Number of snakes encountered</td>
                <td style={textPos}>{this.props.snakeCount}</td>
              </tr>
            </tbody>
          </table>
          </div>
      </li>
    );
  }
});

module.exports = ScoreCard;
