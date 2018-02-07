import { Component, Prop, State } from '@stencil/core';
import { connection } from './../../connection'

@Component({
  tag: 'vote-counter-component',
  styleUrl: 'vote-counter-component.scss'
})

export class VoteCounterComponent {

  @Prop() votes: any;
  @State() totalUsersInRoom: any;

  componentDidLoad() {
    connection.on('projectData', data => {
      this.totalUsersInRoom = data.users
    });
  }

  render(){
    return (
      <div>
        { this.votes } / {this.totalUsersInRoom}
        <div>votes counted</div>
      </div>
    )
  }
}
