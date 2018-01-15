import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}>
            </stencil-route>

            <stencil-route url='/app-project/:name' component='app-project'>
            </stencil-route>

            <stencil-route url='/app-new-task/:name' component='app-new-task'>
            </stencil-route>

            <stencil-route url='/app-scope-task/:name' component='app-scope-task'>
            </stencil-route>

          </stencil-router>
        </main>
      </div>
    );
  }
}
