import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.scss'
})


export class FooterComponent {

  @Prop() name: string;

  render(){
    return (
      <button> {this.name} </button>
    )
  }
}
