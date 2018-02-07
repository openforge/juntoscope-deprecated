import { Component, State, Prop } from "@stencil/core";
import { connection } from "./../../connection";

@Component({
  tag: "app-new-task",
  styleUrl: "app-new-task.scss"
})
export class AppNewTask {
  @Prop() match: any;
  @Prop() projectLink: string = "http://www.google.com/";
  @State() taskList = [];
  projectName: string;
  value: any;

  componentDidLoad() {
    this.projectName = this.match.params.name;

    connection.emit("joinRoom", this.projectName);

    connection.on("tasks", tasks => {
     this.taskList = tasks.map((task) => task.name);
    });

    connection.on("projectData", data => {
      this.taskList = data.tasks.map((task) => task.name);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.taskList = [...this.taskList, ...this.value.split("\n")];
    console.log(this.taskList);
    connection.emit("tasks", this.taskList);
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <div>
        <header-component projectName={this.projectName} />

        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            <b>Create Tasks. A new line creates a new task.</b>
            <br />
            <textarea onChange={event => this.handleChange(event)} />
            <br />
          </label>
          <footer-component name="Submit" />
        </form>

        <ul>{this.taskList.map(task => <li>{task}</li>)}</ul>

        <stencil-route-link
          url={`/app-scope-task/${this.projectName}/${this.taskList[0]}`}
        >
          <footer-component name="NEXT" />
        </stencil-route-link>
      </div>
    );
  }
}
