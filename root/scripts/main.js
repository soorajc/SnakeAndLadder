
var SinglePlayer = require('./singleplayer/singleplayer.js');
var MultiPlayer = require('./multiplayer/multiplayer.js');


var MainApp = React.createClass({

 getInitialState: function() {
   return {option : "home" };
 },

 handleMenu: function(choice){
   this.setState({option:choice});
 },

 componentDidMount() {
   var snd = new Audio("../sound/machines.mp3");
   snd.play();
 },

 render: function() {
   var tileStyle = {
     marginTop: 10
   }

   var singleButton = {
     position: "absolute",
     marginLeft: -850,
     marginTop: 500,
     marginBottom: 10,
     fontSize: 20,
   }

   var multipleButton = {
     position: "absolute",
     marginLeft: -550,
     marginTop: 500,
     marginBottom: 10,
     fontSize: 20,
   }

   var setImage = {
     paddingLeft: 5,
     paddingTop: 20,
     paddingRight: 5,
     paddingBottom: 20,
   }
    return (
      <div className="col-md-12">
        {(() => {
        if (this.state.option == "home") {
         return(
           <div>
             <div className="col-md-12" style={setImage}>
                <img src="./images/background.png" height="100%" width="100%"/>
             </div>
              <button type="button" className="btn btn-success" onClick={this.handleMenu.bind(this,"single")} style={singleButton}>SinglePlayer</button>
              <button type="button" className="btn btn-danger" onClick={this.handleMenu.bind(this,"multi")} style={multipleButton}>MultiPlayer</button>
           </div>
         );
        }else if (this.state.option == "single"){
        return(
          <SinglePlayer handleMenu={this.handleMenu.bind(this, "home")}/>
        );
        }else if (this.state.option == "multi"){
        return(
          <MultiPlayer handleMenu={this.handleMenu.bind(this, "home")}/>
        );
        }
        })()}
     </div>
    );
  }
});



ReactDOM.render(
  <MainApp />,
  document.getElementById('content')
);
