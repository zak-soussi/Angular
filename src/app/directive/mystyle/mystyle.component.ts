import { Component } from '@angular/core';

@Component({
  selector: 'app-mystyle',
  templateUrl: './mystyle.component.html',
  styleUrls: ['./mystyle.component.css']
})
export class MystyleComponent {
 color  = "red";
 bgcolor = 'yellow';
 size = '15px';

 sizechanged(val : string){
    this.size = val + 'px';
 }
}
