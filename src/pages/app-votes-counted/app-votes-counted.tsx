import { Component, Prop, Listen } from '@stencil/core';


@Component({
  tag: 'app-votes-counted',
  styleUrl: 'app-votes-counted.scss'
})
export class AppVotesCounted
{
  @Prop() match: any;

  @Listen('onCustomVote')
  log(event){
    console.log('listening to onCustomVote')
    console.log(event)
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

         {/* pass isCustom="true" into this component -- sometimes it works, sometimes it won't build */}
         <votes-counted-component value="--" description="Custom"></votes-counted-component>

         <votes-counted-component value="7" description=""></votes-counted-component>
         <votes-counted-component value="7" description=""></votes-counted-component>
         <votes-counted-component value="8.75" description=""></votes-counted-component>
      </div>
    );
  }
}
