import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import {blue200,lightBlue800,lightBlue50} from 'material-ui/styles/colors'

const styles={
  chip:{
    margin:4,
  },
  wrapper:{
    display:'flex',
    flexWrap: 'wrap'
  },
  button:{
    margin:12,
  }
}

export default class Player extends Component {

  showEditForm(){
    this.props.showEditForm();
  }

  render() {
    const player=this.props.player
    const defence= player.tackling+player.fieldCoverage+player.blocking+player.gameStrategy+
                      player.risks;
                      
    const offense = player.kicking+player.gameStrategy+player.ballManipulation+player.passing+
                  player.fieldCoverage+player.risks;

    const total=player.kicking+player.gameStrategy+player.ballManipulation+player.passing+
                player.fieldCoverage+player.risks+player.tackling+player.blocking;
    
    return (
      <Card>
        <CardMedia
        overlay={<CardTitle title={player.name} subtitle={`Offense: ${offense} - Defence: ${defence} - Total: ${total}`} />}>
          <img src="football.jpg"/>
        </CardMedia>
          <CardText>
        <div style={styles.wrapper}>
          <Chip backgroundColor={blue200} style={styles.chip}>
            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
              {player.ballManipulation}
            </Avatar>
            Ball Manipulation
          </Chip>
          <Chip backgroundColor={blue200} style={styles.chip}>
            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
              {player.kicking}
            </Avatar>
            Kicking
          </Chip>
          <Chip backgroundColor={blue200} style={styles.chip}>
            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
              {player.passing}
            </Avatar>
            Passing
          </Chip>
          <Chip backgroundColor={blue200} style={styles.chip}>
            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
              {player.tackling}
            </Avatar>
            Tackling
          </Chip>
          <Chip backgroundColor={blue200} style={styles.chip}>
            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
              {player.fieldCoverage}
            </Avatar>
            Field Coverage
          </Chip>
          <Chip backgroundColor={blue200} style={styles.chip}>
            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
              {player.blocking}
            </Avatar>
            Blocking
          </Chip>
          <Chip backgroundColor={blue200} style={styles.chip}>
            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
              {player.gameStrategy}
            </Avatar>
            Game strategy
          </Chip>
          <Chip backgroundColor={blue200} style={styles.chip}>
            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
              {player.risks}
            </Avatar>
            Playmaking Risk
          </Chip>
          </div>
          </CardText>
          <CardActions>
            <RaisedButton 
            label="Edit Player/Stats"
            labelPosition="before"
            style={styles.button}
            onClick={this.showEditForm.bind(this)}/>
          </CardActions>
      </Card>
    )
  }
}

