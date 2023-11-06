import {Component, Input} from '@angular/core';
import {Person} from "../../Model/Person";

@Component({
  selector: 'app-cvdetail',
  templateUrl: './cvdetail.component.html',
  styleUrls: ['./cvdetail.component.css']
})
export class CvdetailComponent {
  @Input()
  personne : Person = new Person();
}
