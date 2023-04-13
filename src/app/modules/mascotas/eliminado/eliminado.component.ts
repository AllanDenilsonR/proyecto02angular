import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { IMascota } from '../interface/mascotas.interface';
import { MascotasService } from '../services/mascotas.service';

@Component({
  selector: 'app-eliminado',
  templateUrl: './eliminado.component.html',
  styleUrls: ['./eliminado.component.scss']
})
export class EliminadoComponent implements OnInit {

  

  ngOnInit(): void {
  }

 /* eliminar(){
      this.activateRoute.params
        .pipe(switchMap(({ idE })=> this.mascotaService.eliminarById(idE)))
        .subscribe((resp:IMascota)=>{
          this.mascota=resp;
          this.route.navigate(['/mascotas/listar/']);
          //this.regresar();
        }, error => {
          console.log('error al eliminar',error);
      });
    }*/
}
