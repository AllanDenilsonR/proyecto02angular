import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-ng-style',
  templateUrl: './ng-ng-style.component.html',
  styleUrls: ['./ng-ng-style.component.scss']
})
export class NgNgStyleComponent {

  size:number=14; 
  bandera:boolean=true;

  colorEstado:string='#f00';

  message=1;

  get color(){
    return '#00f';
  }

}
