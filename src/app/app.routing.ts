import {RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./cvtech/cv/cv.component";
import {MystyleComponent} from "./directive/mystyle/mystyle.component";
import {DetailComponent} from "./cvtech/detail/detail.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {AddComponent} from "./cvtech/add/add.component";
import {LoginComponent} from "./login/login.component";


const APP_ROUTING: Routes = [
  {path: '', component: CvComponent},
  {path: 'style', component: MystyleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cv', children : [
      {path : '' , component: CvComponent},
      {path : 'add' , component: AddComponent},
      {path : 'detail/:id' , component: DetailComponent}
    ]},
  {path: '**', component: NotfoundComponent}
]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)
