import { Component, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome
{
  @State() name: string;

  handleChange(event) {
    this.name = event.target.value
  }

  render() {
    return (
      <div>
        <h1>JuntoScope</h1>
        <form>
          <label>Enter Project Name</label>
          <br/>
          <input type="text" placeholder="Project Name" value={this.name} onInput={() => this.handleChange(event)}/>
        </form>

        <stencil-route-link url={`/app-project/${this.name}`}>
          <footer-component name="NEXT"></footer-component>
        </stencil-route-link>
      </div>
    );
  }
}
