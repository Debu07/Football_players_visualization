import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider'
import AppBar from 'material-ui/AppBar';
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import AccountsWrapper from './AccountsWrapper'
//  database
import { Players } from '../api/players'

// ui files
import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';
import Edit from './Edit'


const tempPlayer = {
  name:"Temp Player",
  team:"Temp Team",
  ballManipulation:1,
  kicking:2,
  passing:3,
  tackling:0,
  fieldCoverage:1,
  blocking:2,
  gameStrategy:3,
  risks:0,
  notes:"This Player is Example.",
};



class App extends Component {
  constructor(props){
    super(props);

    this.state={currentPlayer:tempPlayer,
    showEditPlayer:false}
    this.updateCurrentPlayer=this.updateCurrentPlayer.bind(this);
    this.showEditForm=this.showEditForm.bind(this)
    this.showTeamStats=this.showTeamStats.bind(this)
  }

  renderPlayers(){
    return this.props.players.map((player)=>(
      <TeamList key={player._id} player={player} updateCurrentPlayer={this.updateCurrentPlayer}/>
    ));
  }

  updateCurrentPlayer(player){
    this.setState({
      currentPlayer:player,
    })
  }

  showEditForm(){
    this.setState({
      showEditPlayer:true,
    })
  }

  showTeamStats(){
    this.setState({
      showEditPlayer:false,
    })
  }

  showForm(){
    if(this.state.showEditPlayer=== true){
      return (<Edit currentPlayer={this.state.currentPlayer}
        showTeamStats={this.showTeamStats}/>)
    } else {
       return (<TeamStats players={this.props.players}/>)
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}
            style={{ backgroundColor:'#0277BD'}}>
              <AccountsWrapper className="waves-effect waves-light btn"/>
            </AppBar>
            
          <div className="row">
            <div className="col s12 m7" ><Player player={this.state.currentPlayer} showEditForm={this.showEditForm}/></div>
            <div className="col s12 m5" >
              <h2>Team List</h2><Link className="waves-effect waves-light btn light-blue darken-3" to="/new">Add Player</Link>
              <Divider/>
                  <List>{this.renderPlayers()}</List>
              <Divider/>
            </div>
          </div>
          <div className="row">
          <div className="col s12" >
            <br/>
            <Divider/>
            {this.showForm()}
            <Divider/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes={
  players:PropTypes.array.isRequired,
}

export default createContainer(()=>{
  Meteor.subscribe('players');
  const user=Meteor.userId();

  return{
    players: Players.find({owner: user},{sort: { name: 1}}).fetch(),
  };

},App);