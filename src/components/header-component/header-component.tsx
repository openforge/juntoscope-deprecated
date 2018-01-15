import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.scss'
})


export class HeaderComponent {

  @Prop() logo: string = 'JuntoScope';
  @Prop() projectName : any;

  render(){
    return (
      <header>
        <h1>{this.logo}</h1>
        <h4>{this.projectName}</h4>
      </header>
    )
  }
}
