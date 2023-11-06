import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  color = "red";
  changecolor(textdata: HTMLInputElement) {
    this.color = textdata.value
    textdata.value = ''
  }

  processdata(msg: any) {
    alert(msg)
  }
}
