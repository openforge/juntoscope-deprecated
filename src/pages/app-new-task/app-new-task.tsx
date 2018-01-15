import { Component, State, Prop } from '@stencil/core';

@Component({
  tag: 'app-new-task',
  styleUrl: 'app-new-task.scss'
})
export class AppNewTask {

  @Prop() match: any;

  @Prop() projectLink: string = 'http://www.google.com/';

  @State() tasks: any;

  handleChange(event) {
    this.tasks = event.target.value
  }

  render() {
    const projectName = this.match.params.name

    return (
      <div>
        <header-component projectName={projectName}></header-component>
        <form>
          <label>
            <b>Create Tasks. A new line creates a new task</b>
          </label>
          <br/>
            <textarea placeholder="Enter tasks/user stories" value={this.tasks} onInput={() => this.handleChange(event)}/>
            <br/>
          <input type="submit" value="Submit" />
        </form>
        <stencil-route-link url={`/app-scope-task/${projectName}`}>
          <footer-component name="NEXT"></footer-component>
        </stencil-route-link>
      </div>
    );
  }
}
