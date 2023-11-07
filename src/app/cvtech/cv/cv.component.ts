import { Component } from '@angular/core';
import {Person} from "../../Model/Person";
import {CvService} from "../cv.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  constructor(private cvserivce : CvService) {
  }
    personnes : Person [] = this.cvserivce.getPersonnes();

    personne : any = false;

    sendperson(item : Person){
      this.personne = item;
    }
}
