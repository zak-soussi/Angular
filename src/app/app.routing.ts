import {RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./cvtech/cv/cv.component";
import {MystyleComponent} from "./directive/mystyle/mystyle.component";
import {ColorComponent} from "./color/color.component";
import {DetailComponent} from "./cvtech/detail/detail.component";
import {NotfoundComponent} from "./notfound/notfound.component";


const APP_ROUTING: Routes = [
  {path: '', component: CvComponent},
  {path: 'style', component: MystyleComponent},
  {path: 'color', component: ColorComponent},
  {path: 'cv', children : [
      {path : '' , component: CvComponent},
      {path : 'detail/:id' , component: DetailComponent}
    ]},
  {path: '**', component: NotfoundComponent}
]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)
