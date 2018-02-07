import { Component, State, Prop } from '@stencil/core';
import { connection } from './../../connection'

@Component({
  tag: 'app-scope-task',
  styleUrl: 'app-scope-task.scss'
})
export class ScopeTask
{
  @Prop() match: any;
  @State() numUsersInRoom: any;
  projectName: string;
  value: any;

  componentDidLoad() {
    this.projectName = this.match.params.value

    connection.emit("joinRoom", this.projectName);
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    connection.emit("votes", this.value)
  }

  render() {
    const taskList = this.match.params.value

    return (
      <div>
        <header-component projectName={this.projectName}></header-component>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label><b>Scope Task:</b></label>
          <p>{ taskList }</p>
          <br/>

          <input placeholder="scope task" onChange={event => this.handleChange(event)}/>
          <footer-component name="Submit" />
        </form>

        <vote-counter-component votes={this.numUsersInRoom}></vote-counter-component>

        <stencil-route-link url={`/app-votes-counted/${this.projectName}/${taskList}`}>
         {/* <footer-component name="SUBMIT" onClick={() => this.persistVote()}></footer-component> */}
        </stencil-route-link>
      </div>
    );
  }
}
