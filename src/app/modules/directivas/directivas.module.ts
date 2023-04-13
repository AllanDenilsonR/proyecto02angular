import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { NgBinDingComponent } from './pages/ng-bin-ding/ng-bin-ding.component';
import { NgNgStyleComponent } from './pages/ng-ng-style/ng-ng-style.component';
import { NgNgClassComponent } from './pages/ng-ng-class/ng-ng-class.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgIFComponent,
    NgForComponent,
    NgSwitchComponent,
    NgBinDingComponent,
    NgNgStyleComponent,
    NgNgClassComponent,
    NgModelComponent
  ],
  imports: [
    CommonModule,
    DirectivasRoutingModule,
    FormsModule //permite usar gnModel
  ]
})
export class DirectivasModule { }
