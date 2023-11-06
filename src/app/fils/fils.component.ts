import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
 @Input() mycolor = "";
 @Output() sendingtodad = new EventEmitter

  senddad() {
    this.sendingtodad.emit('Here I come')
  }
}
