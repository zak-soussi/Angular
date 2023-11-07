import { Component } from '@angular/core';
import {Router} from "@angular/router";

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
  constructor(private router : Router) {
  }

  gotocvTech(){
    this.router.navigate(['cv']);
  }
  processdata(msg: any) {
    alert(msg)
  }


}
