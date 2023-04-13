import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { API_PEST } from 'src/app/constants/routes/routes';
import { CardComponent } from './components/card/card.component';
import { MascotaComponent } from './mascota/mascota.component';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [
  //{path:'',component:HomeComponent,title:'Home'},
  {path:'listar',component:ListarComponent,title:'listar'},
  {path:':id',component:MascotaComponent,title:'detalle'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }
