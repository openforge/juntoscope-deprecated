import { Component, State, Prop } from '@stencil/core';
import { connection } from './../../connection';

@Component({
  tag: 'app-new-task',
  styleUrl: 'app-new-task.scss'
})
export class AppNewTask {

  @Prop() match: any;

  @Prop() projectLink: string = 'http://www.google.com/';

  @State() value: any;

  handleSubmit(e) {
    e.preventDefault()
    connection.emit('tasks', this.value)
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    const projectName = this.match.params.name

    return (
      <div>
        <header-component projectName={projectName}></header-component>

        <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Enter a task:
          <textarea value={this.value} onInput={(event) => this.handleChange(event)} />
        </label>
        <input type="submit" value="Submit" />

        <br />
        { this.value }
      </form>

        <stencil-route-link url={`/app-scope-task/${projectName}/${this.value}`}>
          <footer-component name="NEXT"></footer-component>
        </stencil-route-link>
      </div>
    );
  }
}
