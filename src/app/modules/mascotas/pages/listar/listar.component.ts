import { Component, OnInit } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  mascotas: IMascota[]=[]; //aaray de mascotas
  parametroBuscar:string='';
  mascotasP: any[]=[]; //ootro array de mascotas
  datosM:string[]=[];
  datos:any[]=["Usuario1",30,true,"{'Salario:200'}"];
  
  idmascota:string='';

  //obj!:IMascota;
  
constructor(private mascotasService:MascotasService  ) { }

  ngOnInit(): void {
    this.mascotasService.mascotas.subscribe((resp)=>{
    this.mascotas=resp;
    });

    this.buscar();

    this.obtenerAll();

    this.mostrar();
  }

  obtenerAll(){
    this.mascotasService.obtenerAll().then(async(resp:IMascota[])=>{
    console.log(resp);
    //repaso insentando datos de mascotas desde el archivo json
    resp.forEach(obj=>{
    this.mascotasP.push(obj);
    this.datosM.push(JSON.stringify(obj));
      });
      let jsonArray=JSON.parse(this.datosM[0]);
      for(const key in jsonArray){
        console.log("llave",key,jsonArray[key]);
      }
      
      const {raza,des, ...datos}=jsonArray; //destructurando el json
      //console.log(des);

      const [obj1, obj2, obj3, ...losOtros]=resp; //destructurando el arreglo

    });
  }


  buscar():void{ //metodo para buscar
    this.parametroBuscar=this.parametroBuscar.toLocaleLowerCase();

    this.mascotasService.buscarMascotas(this.parametroBuscar).subscribe((resp)=>{
      this.mascotas=resp;
      });
  }

  Obtenerid(idMascota: string){//recibe lo que viene del compoenente hijo
    console.log(idMascota);
    this.idmascota=idMascota;
    this.eliminandoconAlert();//para llamar la alerta y eliminar
  }

  eliminar():void{
      this.mascotasService.eliminarById(this.idmascota)
        .subscribe(resp=>this.mascotasService.mascotas
        .subscribe(reponse=>this.mascotas=reponse
          
        ), error => {
          console.log('error al eliminar',error);
      }
        );
        console.log("entro a elimiar");
    }


     /*eliminar(){
      this.mascotasService.eliminarById(this.idmascota)
        .subscribe((resp)=>{
          this.obj=resp;
        }, error => {
          console.log('error al eliminar',error);
      });
     
    }*/

mostrar(){
  //repaso del uso for para recorrer un arreglo
  this.datos.forEach(obj=>{
   console.log("el forEach",obj)
  });
  console.log('*******');
    for (const key in this.datos){
      console.log("llaves",key);
    }

    for(const iterador of this.datos){
      console.log("--",iterador);
    }
}

eliminandoconAlert(): void{
      const alert = Swal.mixin({
        customClass:{
          confirmButton:'btn btn-success',
          cancelButton:'btn btn-danger'
        },
        buttonsStyling:false
      })
      alert.fire({
       title: '¿Esta seguro de eliminar?',
       text:  `¡No podra revertir esto!`,
       icon:'warning',
       showCancelButton:true,
       confirmButtonText:'Si,Eliminar',
       cancelButtonText: 'No, cancelar',
       reverseButtons:true
      }).then((result)=>{
         if(result.isConfirmed){
           alert.fire(
             'Eliminado!',
             'El registro has sido eliminado.',
             'success'
           )
           this.eliminar();
         }else if(
           result.dismiss===Swal.DismissReason.cancel
         ){
           alert.fire(
             'Cancelado',
             'Se detuvo la opcion eliminar',
             'error'
           )
         }
      });
     
}


}
