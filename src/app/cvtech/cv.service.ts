import {Injectable} from '@angular/core';
import {Person} from "../Model/Person";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Person [] = [
    new Person(1,"soussi","zakaria",22,"me.jpg","studying software engineering","Student"),
    new Person(2,"ben Salha","mahdi",15,"mahdi.jpg","money collector","money collecting is my hobby"),
    new Person(3,"yahyaoui","louay",34,"louay.jpg","player at rafa nadal academy","Tennis player"),
    new Person(4,"zoghlami","med ali",3,"zoghlami.jpg","freelancer","searching for opportunities"),
    new Person(5,"sehli","hachem",54,"sehli.jpg","Casino addict","Gambler"),
    new Person(6,"bouchnak","med amine",-100,"boch.jpg","Actively searching for problems","Problem Maker"),
    new Person(7,"saidane","med mongi",30,"","Getting your personal infos is my pass time","Hacker"),
  ]
  constructor() { }

  getPersonnes() : Person[] {
    return this.personnes;
  }

  getPersonneById(id : number):any {
    const personne = this.personnes.find((person) => {
      return person.id == id
    });
    if(personne)
      return personne;
  }
  addPersonne(personne : Person){
    personne.id = this.personnes.length + 1;
    this.personnes.push(personne);
  }

  deletePersonne(item : Person){
    let index = this.personnes.indexOf(item);
    this.personnes.splice(index,1);
  }
}
