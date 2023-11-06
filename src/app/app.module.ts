import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from "@angular/forms";
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cvtech/cv/cv.component';
import { CvdetailComponent } from './cvtech/cvdetail/cvdetail.component';
import { CvlistComponent } from './cvtech/cvlist/cvlist.component';
import { CvitemComponent } from './cvtech/cvitem/cvitem.component';
import { MystyleComponent } from './directive/mystyle/mystyle.component';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultthumbnailPipe } from './cvtech/defaultthumbnail.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstchildComponent,
    SecondchildComponent,
    ColorComponent,
    FilsComponent,
    CvComponent,
    CvdetailComponent,
    CvlistComponent,
    CvitemComponent,
    MystyleComponent,
    RainbowDirective,
    DefaultthumbnailPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
