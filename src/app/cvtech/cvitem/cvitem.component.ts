import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../../Model/Person";

@Component({
  selector: 'app-cvitem',
  templateUrl: './cvitem.component.html',
  styleUrls: ['./cvitem.component.css']
})
export class CvitemComponent {
  @Input()
  personne : Person = new Person();
  @Output()
  sendedperson = new EventEmitter();


  sendperson(){
    this.sendedperson.emit(this.personne);
  }
}
