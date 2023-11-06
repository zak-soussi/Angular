import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  colors = [
    'blue',
    "lightblue",
    'coral',
    'pink',
    'green’',
    'lightyellow',
    'lightgreen',
    'gold',
    'gray',
    'lightgray',
    'purple'
]
  @HostBinding('style.color') color = 'red';
  @HostBinding('style.borderColor') bcolor = 'yellow'
  constructor() { }
  @HostListener('keypress') change(){
      this.color = this.colors[Math.floor((this.colors.length-1)* Math.random())]
      this.bcolor = this.colors[Math.floor((this.colors.length-1)* Math.random())]
  }
}
