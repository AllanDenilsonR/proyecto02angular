import { Injectable } from '@angular/core';
import { Guardian, IMascota } from '../interface/mascotas.interface';
import { HttpClient } from '@angular/common/http';
import { noop, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MascotasService {


  //private baseUrl='http://localhost:3000';
  private baseUrl:string = environment.baseUrl;
  
  constructor(private http: HttpClient) { 

    console.log('servicio mascota');
 
  }

  /*public mascotas():Observable<any>{//funciona de esta forma
    return this.http.get<any>(this.urlMascota);
  }*/

  get mascotas():Observable<IMascota[]>{
    return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas`);
  }


  public buscarMascotas(termino:String):Observable<IMascota[]>{
    if(termino.length>1){
      return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas/?q=${termino}&_limit=5`);
    }else{
      return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas`);
    }
  }

  //para ver detalle segun id
  public mascotaById(id:string):Observable<IMascota>{  
    return this.http.get<IMascota>(`${this.baseUrl}/mascotas/${id}`);
      
      
  }
  

  //para eliminar
  public eliminarById(idE:string):Observable<IMascota>{
    //return this.http.delete<IMascota>(`${this.baseUrl}/mascotas/eliminar/${idE}`);
    return this.http.delete<IMascota>(`${this.baseUrl}/mascotas/${idE}`);
  }


  //con promesa
  public obtenerById(id:string):any{
  
    return new Promise(resolve=>{
      return this.http.get<IMascota>(`${this.baseUrl}/mascotas/${id}`)
      .subscribe(data=>{
        resolve(data);
      });
    });
    
}

obtenerAll():any{
  return new Promise(resp=>{
    return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas`)
    .subscribe(data=>{
      resp(data);
    });
  });
}





 
 


}
