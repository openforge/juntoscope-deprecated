import { Component, State, Prop } from '@stencil/core';


@Component({
  tag: 'app-scope-task',
  styleUrl: 'app-scope-task.scss'
})
export class ScopeTask
{
  @State() hours: string;
  @Prop() match: any;

  handleChange(event) {
    this.hours = event.target.value
  }

  render() {
    const projectName = this.match.params.name

    return (
      <div>
        <header-component projectName={projectName}></header-component>
        <form>
          <label><b>Scope Task:</b></label>
          <p>A user can add other users to the project</p>
          <br/>
          <input type="number" placeholder="scope task" value={this.hours} onInput={() => this.handleChange(event)}/>
          <button>hours</button>
        </form>
        <vote-counter-component votes="5"></vote-counter-component>

        <stencil-route-link url={`/app-votes-counted/${projectName}`}>
         <footer-component name="SUBMIT"></footer-component>
        </stencil-route-link>
      </div>
    );
  }
}
