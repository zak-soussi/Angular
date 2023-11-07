import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
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
import { EmbaucheComponent } from './cvtech/embauche/embauche.component';
import {ROUTING} from "./app.routing";
import { NavbarComponent } from './navbar/navbar.component';
import { DetailComponent } from './cvtech/detail/detail.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FilsComponent,
    CvComponent,
    CvdetailComponent,
    CvlistComponent,
    CvitemComponent,
    MystyleComponent,
    RainbowDirective,
    DefaultthumbnailPipe,
    EmbaucheComponent,
    NavbarComponent,
    DetailComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
