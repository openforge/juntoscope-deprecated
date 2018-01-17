import { Component, State, Prop } from '@stencil/core';


@Component({
  tag: 'app-results',
  styleUrl: 'app-results.scss'
})
export class AppResults
{
  @Prop() match: any;

  render() {
    const projectName = this.match.params.name
    const result = this.match.params.result

    return (
      <div>
        <header-component projectName={projectName}></header-component>

          <h1>{result} hours</h1>
          <p>A user can add other users to the project</p>

        <stencil-route-link url={`/app-scope-task/${projectName}`}>
         <footer-component name="NEXT TASK"></footer-component>
        </stencil-route-link>
      </div>
    );
  }
}
