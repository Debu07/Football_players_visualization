
import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2'
import Divider from 'material-ui/Divider'



export default class TeamStats extends Component {
  render() {
    const players=this.props.players;
    const numPlayers=players.length;

    // get a total number for ballmanipulation for team
    // maximum possible for a team 0-3 here
    //team / possible

    const ballManipulation = Math.round((players.reduce((ballManipulation,player)=>{
      return ballManipulation + player.ballManipulation;
    },0)/(3* numPlayers)) * 100);

    const kicking = Math.round((players.reduce((kicking,player)=>{
      return kicking + player.kicking;
    },0)/(3* numPlayers)) * 100);

    const passing = Math.round((players.reduce((passing,player)=>{
      return passing + player.passing;
    },0)/(3* numPlayers)) * 100);

    const tackling = Math.round((players.reduce((tackling,player)=>{
      return tackling + player.tackling;
    },0)/(3* numPlayers)) * 100);

    const fieldCoverage = Math.round((players.reduce((fieldCoverage,player)=>{
      return fieldCoverage + player.fieldCoverage;
    },0)/(3* numPlayers)) * 100);

    const blocking = Math.round((players.reduce((blocking,player)=>{
      return blocking + player.blocking;
    },0)/(3* numPlayers)) * 100);

    const gameStrategy = Math.round((players.reduce((gameStrategy,player)=>{
      return gameStrategy + player.gameStrategy;
    },0)/(3* numPlayers)) * 100);

    const risks = Math.round((players.reduce((risks,player)=>{
      return risks + player.risks;
    },0)/(3* numPlayers)) * 100);

    const defence= Math.round((tackling+fieldCoverage+blocking+gameStrategy+risks)/5);
    const offense=Math.round((kicking+ballManipulation+passing
                                      +fieldCoverage+gameStrategy+risks)/6);
    const total=Math.round((kicking+ballManipulation+passing+tackling+blocking
      +fieldCoverage+gameStrategy+risks)/8);
    

    const data = {
      labels: ['Ball Manipulation','Kicking','Passing','Tackling','Field Coverage',
                  'Blocking','Game strategy','Playmaking Risk'],
      datasets: [
        {
          label: 'In % of max possible ',
          backgroundColor: 'rgba(143,202,249,0.2)',
          borderColor: 'rgba(12,71,161,1)',
          pointBackgroundColor: 'rgba(12,71,161,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(12,71,161,1)',
          data: [ballManipulation,kicking, passing, tackling, 
            fieldCoverage, blocking, gameStrategy, risks]
        }
      ]
    };
    return (
      <div> 
      <h3 style={{ textAlign:"center"}}>Team Stats</h3>
      <Divider/>
        <div className="row">
          <div className="col s12 m7">
          <Radar data={data}
          width={500} 
          height={500}
          option={{
            maintainAspectRatio:false
          }}/>
          </div>
        <div className="col s12 m5">
          <h4> Scores in % of max possible</h4>
          <Divider/>
          <h5> Team's Offense : {offense} </h5>
          <h5> Team's Defence : {defence} </h5>
          <h5> Team's Total : {total} </h5>
          <Divider/>
        <h5> Number of players : {numPlayers}</h5>
        </div>
      </div>
      </div>
    )
  }
}
