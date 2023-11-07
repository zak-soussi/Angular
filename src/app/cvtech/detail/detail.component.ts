import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Person} from "../../Model/Person";
import {CvService} from "../cv.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  personne : Person = new Person() ;
  constructor(private activerouter : ActivatedRoute , private cvservice : CvService) {
    this.activerouter.params.subscribe(
      (params) => {
        this.personne = this.cvservice.getPersonneById(params['id']);
      }
    );
  }


}
