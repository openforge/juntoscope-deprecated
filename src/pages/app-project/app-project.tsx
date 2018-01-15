import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-project',
  styleUrl: 'app-project.scss'
})
export class AppProject {

  @Prop() match: any;
  @Prop() projectLink: string = 'http://www.google.com/';

  render() {
      const projectName = this.match.params.name

      return (
        <div>
          <header-component projectName={projectName}></header-component>

          <p>We've made you a project link for {projectName} . Share this link with your team:</p>

          <input type="text" placeholder={this.projectLink} />

          <stencil-route-link url={`app-new-task/${projectName}`}>
            <br />
            <footer-component name="NEXT"></footer-component>
          </stencil-route-link>
        </div>
      );
    }
}
