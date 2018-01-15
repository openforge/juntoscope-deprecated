import { Component, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'votes-counted-component',
  styleUrl: 'votes-counted-component.scss'
})

export class VotesCountedComponent {

  @Prop() value: any;

  @Prop() description: string;

  @Prop() isCustom: boolean = false;

  @State() customVoteValue: any;

  @Event() onCustomVote: EventEmitter;

  handleChange(event) {
    this.customVoteValue = event.target.value
    console.log(this.customVoteValue)
    this.onCustomVote.emit(this.customVoteValue);
  }

  render(){
    if (this.isCustom) {
      return (
        <form>
         <input type="number" placeholder="--" value={this.customVoteValue} class="box" onInput={() => this.handleChange(event)} />
         <label>{this.description}</label>
        </form>
      )
    }
    else {
      return (
        <div class="box">
          <p>{this.value}</p>
          <p>{this.description}</p>
        </div>
      )
    }
  }
}
