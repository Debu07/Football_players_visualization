import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar'
import {ListItem} from 'material-ui/List'
import { red500 } from 'material-ui/styles/colors'
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever'

export default class TeamList extends Component {
  updateCurrentPlayer(player){
    this.props.updateCurrentPlayer(player);
  }

  deletePlayer(playerId){

    Meteor.call('deletePlayer', playerId, (error) => {
      if(error){
          alert("oops something went wrong: " + error.reason)
      }
      else {
          alert("player deleted!!")
      }
  });

  }
  render() {
    return (
      <ListItem primaryText={this.props.player.name}
      leftAvatar={<Avatar src="profile.png"/>}
      rightIcon={<ActionDeleteForever hoverColor={red500} 
                  onClick={this.deletePlayer.bind(this,this.props.player._id)}/>}
      onClick={this.updateCurrentPlayer.bind(this,this.props.player)}
      />
    )
  }
}
