import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { API_PEST } from 'src/app/constants/routes/routes';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input() obj!:IMascota; //recibir objetos de tipo mascotas

  @Output()  mascotas = new EventEmitter();//recibiendo el objeto masco que es string
 
  pets=API_PEST;
  enviarid(mascota:string){//metodo que recive el id y envia al componente padre
    this.mascotas.emit(mascota);
  }
  


}
