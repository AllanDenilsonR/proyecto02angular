import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { API_PEST } from 'src/app/constants/routes/routes';
import { IMascota } from '../interface/mascotas.interface';
import { MascotasService } from '../services/mascotas.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})
export class MascotaComponent implements OnInit {

  mascota!:IMascota; 

  constructor(
    private activateRoute:ActivatedRoute, // para obtener el parametro que viene por la ruta
    private mascotaService:MascotasService,//inyectandp servicio
    private route:Router //navegar a una ruta indicada
  ) { }

  

  ngOnInit(): void {
      //como devuelve un observable 
      //witchMap , operado de transformacion
      this.obtenerId();
     
      
      this.getMascota();

      this.getMascotaPromesaById();
  }


  obtenerId(){
    this.activateRoute.params
      .pipe(switchMap(({ id })=> this.mascotaService.mascotaById(id)))
      .subscribe((resp:IMascota)=>{
        this.mascota=resp;
      });
  }

  regresar(){
    //para ir ala ruta indicada
    this.route.navigate([API_PEST+'/listar']);
  }


  getMascota():void{//obtine los datos de la mascota por id
    const id= this.activateRoute.snapshot.paramMap.get('id');
    this.mascotaService.mascotaById(id || '').subscribe(resp=>console.log(resp))
  }


  getMascotaPromesaById():void{//obtine los datos de la mascota por id promesa
    const id= this.activateRoute.snapshot.paramMap.get('id');
    this.mascotaService.obtenerById(id || '').then(async(mascota:IMascota)=>{
    console.log("El response de la promesa",mascota);
    });
  }
  
   
    /*eliminar(){
      this.activateRoute.params
        .pipe(switchMap(({ id })=> this.mascotaService.eliminarById(id)))
        .subscribe((resp:IMascota)=>{
          this.mascota=resp;
          //this.route.navigate(['/mascotas/listar/']);
          this.regresar();
        }, error => {
          console.log('error al eliminar',error);
      });
    }*/
  

}
