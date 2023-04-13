import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-ng-class',
  templateUrl: './ng-ng-class.component.html',
  styleUrls: ['./ng-ng-class.component.scss']
})
export class NgNgClassComponent  {

  tema:string = 'Uso de ngClass';

  alerta:string='alert-danger';

  propiedad={
    danger:false,
  };

  message:number=5;
}
