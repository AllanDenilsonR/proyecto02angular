import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { CardComponent } from './components/card/card.component';
import { ListarComponent } from './pages/listar/listar.component';
import { FormsModule } from '@angular/forms';
import { MascotasService } from './services/mascotas.service';
import { HttpClientModule } from '@angular/common/http';
import { MascotaComponent } from './mascota/mascota.component';
import { EliminadoComponent } from './eliminado/eliminado.component';


@NgModule({
  declarations: [
    CardComponent,
    ListarComponent,
    MascotaComponent,
    EliminadoComponent
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[MascotasService] //llamando el servicio
  
})
export class MascotasModule { }
