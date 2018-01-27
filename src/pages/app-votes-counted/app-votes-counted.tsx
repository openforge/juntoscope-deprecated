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
    const task = this.match.params.value

    return (
      <div>
        <header-component projectName={projectName}></header-component>
        <form>
          <label><b>Scope Task:</b></label>
          <p>{ task }</p>
        </form>

        <p><b>Results:</b></p>

         <votes-counted-component value="7.25" description="Average"></votes-counted-component>
         <votes-counted-component value="8.75" description="Max"></votes-counted-component>

         <votes-counted-component value="--" isCustom={true}></votes-counted-component>
         <votes-counted-component value="7" description=""></votes-counted-component>
         <votes-counted-component value="7" description=""></votes-counted-component>
         <votes-counted-component value="8.75" description=""></votes-counted-component>
      </div>
    );
  }
}
