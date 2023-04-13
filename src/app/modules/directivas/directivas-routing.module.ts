import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { ErrorComponent } from 'src/app/error/pagina404/error/error.component';
import { NgBinDingComponent } from './pages/ng-bin-ding/ng-bin-ding.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';
import { NgNgClassComponent } from './pages/ng-ng-class/ng-ng-class.component';
import { NgNgStyleComponent } from './pages/ng-ng-style/ng-ng-style.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';


const routes: Routes = [
  {path:'',component:HomeComponent,title:'Home'},
  {path:'ngIf', component:NgIFComponent,title:'ngIf'}, //para la ruta ngIf
  {path:'ngFor',component:NgForComponent,title:'ngFor'},
  {path:'ngSwitch',component:NgSwitchComponent,title:'ngSwitch'},
  {path:'ngBinDing',component:NgBinDingComponent,title:'ngBinDing'},
  {path:'ngStyle',component:NgNgStyleComponent,title:'ngStyle'},
  {path:'ngClass',component:NgNgClassComponent,title:'ngClass'},
  {path:'ngModel',component:NgModelComponent,title:'ngModel'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivasRoutingModule { }
