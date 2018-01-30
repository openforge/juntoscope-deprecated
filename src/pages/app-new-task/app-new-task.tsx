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

  @State() taskList = [];

  handleSubmit(e) {
    e.preventDefault()
  }

  handleChange(event) {
    this.value = event.value
    this.taskList = this.value.split('\n');
    connection.emit('tasks', this.taskList)
  }

  render() {
    const projectName = this.match.params.name

    return (
      <div>
        <header-component projectName={projectName}></header-component>

        <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          <b>Create Tasks. A new line creates a new task.</b>
          <br />
          <textarea value={this.value} onChange={(event) => this.handleChange(event.target)} />
          <br />
        </label>
        <footer-component name="Submit" />
        {this.taskList.map((task) => {
          return (
            <p> { task } </p>
          )
        })}
      </form>

        <stencil-route-link url={`/app-scope-task/${projectName}/${this.taskList}`}>
          <footer-component name="NEXT"></footer-component>
        </stencil-route-link>
      </div>
    );
  }
}
