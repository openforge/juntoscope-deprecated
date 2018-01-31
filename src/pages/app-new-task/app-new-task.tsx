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

  componentDidLoad() {
    const showTasks = document.getElementById('task-list');
    connection.on('tasks', function(task){
      showTasks.innerHTML += task + '<br />'
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    connection.emit('tasks', this.taskList);
  }

  handleChange(event) {
    this.value = event.value.split('\n');
    this.taskList = [...this.value];
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

        <div id="task-list"></div>
      </form>

        <stencil-route-link url={`/app-scope-task/${projectName}/${this.taskList}`}>
          <footer-component name="NEXT"></footer-component>
        </stencil-route-link>
      </div>
    );
  }
}
