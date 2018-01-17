import { Component, Prop, Listen, Event, State } from '@stencil/core';


@Component({
  tag: 'app-votes-counted',
  styleUrl: 'app-votes-counted.scss'
})
export class AppVotesCounted
{
  @Prop() match: any;
  @State() result: Event;

  @Listen('onCustomVote')
  log(event){
    this.result = event.detail
  }

  render() {
    const projectName = this.match.params.name

    return (
      <div>
        <header-component projectName={projectName}></header-component>
        <form>
          <label><b>Scope Task:</b></label>
          <p>A user can add other users to the project</p>
        </form>

        <p><b>Results:</b></p>

         <votes-counted-component value="7.25" description="Average"></votes-counted-component>
         <votes-counted-component value="8.75" description="Max"></votes-counted-component>

         <votes-counted-component value="--" isCustom={true}></votes-counted-component>
         <votes-counted-component value="7" description=""></votes-counted-component>
         <votes-counted-component value="7" description=""></votes-counted-component>
         <votes-counted-component value="8.75" description=""></votes-counted-component>

          <stencil-route-link url={`/app-results/${projectName}/${this.result}`}>
            <footer-component name="SUBMIT"></footer-component>
          </stencil-route-link>
      </div>
    );
  }
}
