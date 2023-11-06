import { Component } from '@angular/core';
import {Person} from "../../Model/Person";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
    personnes : Person [] = [
      new Person(1,"soussi","zakaria",22,"me.jpg","studying software engineering","Student"),
      new Person(2,"ben Salha","mahdi",15,"mahdi.jpg","money collector","money collection is my hobby"),
      new Person(3,"yahyaoui","louay",34,"louay.jpg","player at rafa nadal academy","Tennis player"),
      new Person(4,"zoghlami","med ali",3,"zoghlami.jpg","freelancer","searching for opportunities"),
      new Person(5,"sehli","hachem",54,"sehli.jpg","Casino addict","Gambler"),
      new Person(6,"bouchnak","med amine",-100,"boch.jpg","Actively searching for problems","Problem Maker"),
      new Person(7,"saidane","med mongi",30,"","Getting your personal infos is my pass time","Hacker"),

    ];

    personne : any = false;

    sendperson(item : Person){
      this.personne = item;
    }
}
