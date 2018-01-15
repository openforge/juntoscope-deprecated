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
          <label>Scope Task</label>
          <br/>
          <input type="text" placeholder="scope task" value={this.hours} onInput={() => this.handleChange(event)}/>
          <button>hours</button>
        </form>

        <footer-component name="SUBMIT"></footer-component>
      </div>
    );
  }
}
