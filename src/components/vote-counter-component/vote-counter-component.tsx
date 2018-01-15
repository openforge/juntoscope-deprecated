import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vote-counter-component',
  styleUrl: 'vote-counter-component.scss'
})

export class VoteCounterComponent {

  @Prop() votes: string;

  render(){
    return (
      <div>
        { this.votes } / 7
        <div>votes counted</div>
      </div>
    )
  }
}
