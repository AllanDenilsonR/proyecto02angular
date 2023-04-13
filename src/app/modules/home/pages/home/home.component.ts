import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '@modules/home/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  year= new Date();

   //devuelve cualquier tipo pero que sea un array
   data:any[]=[];

 constructor(private apiService:ApiService){}
 
  
  ngOnInit(): void {
      this.obtenerData();
  }


  
  
  obtenerData(){
  this.apiService.getData().subscribe(data =>{
    this.data =data;

    console.log(this.data);
  })
  }

}
