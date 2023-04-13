import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-bin-ding',
  templateUrl: './ng-bin-ding.component.html',
  styleUrls: ['./ng-bin-ding.component.scss']
})
export class NgBinDingComponent {

  //cambiamos la propiedad disabled del input y del button

  habilitar: boolean=false;

  //cambiamos la propiedad a class al button
  clase:string='btn btn-danger';

  txtPlaceHolder: string='Su nombre';


  //para cambiar la propiedad del tipo input
  txtType: string='radio';

  //cambiar la propiedad checked
  isChecked:boolean=true;

  cambiarPropiedad(){
    this.habilitar=!this.habilitar;
    this.txtPlaceHolder='Deshabilitado';
    this.txtType='checkbox';
    this.isChecked=!this.isChecked;
    this.clase='btn btn-primary';
  }

}
