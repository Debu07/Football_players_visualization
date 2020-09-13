import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'


class New extends Component {
    submitPlayer(event){
        event.preventDefault();

            let player = {
            name:this.refs.name.value,
            team:this.refs.team.value,
            ballManipulation:this.refs.ballManipulation.value,
            kicking:this.refs.kicking.value,
            passing:this.refs.passing.value,
            tackling:this.refs.tackling.value,
            fieldCoverage:this.refs.fieldCoverage.value,
            blocking:this.refs.blocking.value,
            gameStrategy:this.refs.gameStrategy.value,
            risks:this.refs.risks.value,
            notes:this.refs.notes.value,
            createdAt:new Date(),
            owner: Meteor.userId(),
        };

            Meteor.call('insertPlayer', player, (error) => {
            if(error){
                alert("oops something went wrong: " + error.reason)
            }
            else {
                alert(" player added successfully !");
                this.props.history.push("/")
            }
        })

        
    }
    render() {
        return (
           <div className="row">
               <form onSubmit={this.submitPlayer.bind(this)} className="col s12">
                   <h3> Add a new Player</h3>
                   <div className="row">
                       <div className="input-field col s6">
                           <input placeholder="Name" type="text" ref="name" className="validate"/>
                       </div>
                       <div className="input-field col s6">
                           <input placeholder="Team" type="text" ref="team" className="validate"/>
                       </div>
                   </div>

                   <div className="row">
                       <div className="col s6">
                           <h5>Ball Manipulation</h5>
                           <select ref="ballManipulation" className="browser-default">
                               <option value="0">0</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               </select>                       
                        </div>
                       <div className="col s6">
                           <h5>Kicking</h5>
                           <select ref="kicking" className="browser-default">
                               <option value="0">0</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               </select>                       
                        </div>
                   </div>
                   <div className="row">
                       <div className="col s6">
                           <h5>Passing</h5>
                           <select ref="passing" className="browser-default">
                               <option value="0">0</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               </select>                       
                        </div>
                       <div className="col s6">
                           <h5>Tackling</h5>
                           <select ref="tackling" className="browser-default">
                               <option value="0">0</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               </select>                       
                        </div>
                   </div>
                   <div className="row">
                       <div className="col s6">
                           <h5>Field Coverage</h5>
                           <select ref="fieldCoverage" className="browser-default">
                               <option value="0">0</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               </select>                       
                        </div>
                       <div className="col s6">
                           <h5>Blocking</h5>
                           <select ref="blocking" className="browser-default">
                               <option value="0">0</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               </select>                       
                        </div>
                   </div>
                   <div className="row">
                       <div className="col s6">
                           <h5>Game Strategy</h5>
                           <select ref="gameStrategy" className="browser-default">
                               <option value="0">0</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               </select>                       
                        </div>
                       <div className="col s6">
                           <h5>Risks</h5>
                           <select ref="risks" className="browser-default">
                               <option value="0">0</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               </select>                       
                        </div>
                   </div>


                   <div className="row">
                       <div className="col s6">
                           <textarea placeholder="Notes" ref="notes" className="materialize-textarea"/>
                       </div>
                       <div className="col s6">
                        <button type="submit" className="btn waves-effect waves-light light-blue darken-3" name="action"> Submit Details
                        <i className="material-icons right">send</i></button>
                       </div>
                   </div>


               </form>
           </div>
        )
    }
}

export default withRouter(New)
