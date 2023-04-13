import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SkeletonComponent } from "@layout/skeleton/skeleton.component";
import { API_PEST } from "./constants/routes/routes";
import { ErrorComponent } from "./error/pagina404/error/error.component";




//Matriz de objetos para las rutas
const routes: Routes=[

      { path:``, component:SkeletonComponent,
    
    
    //definiendo un array de un ruta hija, estos son los moodulos hijos de app.routing.module
    children: [
        {path: '', 
        loadChildren: ()=> import('@modules/home/home.module').then(m => m.HomeModule)},
        {path:'directivas',
        loadChildren:() => import('@modules/directivas/directivas.module').then(m => m.DirectivasModule)}, //para llamar las directivas
        
        /*{path:'mascotas',
        loadChildren:() => import('@modules/mascotas/mascotas.module').then(m => m.MascotasModule)}*/
       
        {path:API_PEST,
        loadChildren:() => import('@modules/mascotas/mascotas.module').then(m => m.MascotasModule)}
  

        ]

        
    },
    
    
    // {path:'**', redirectTo:'',pathMatch:'full'},//cualquier ruta valida rediccione a path vacio que es skeleton y home
     {path:'**',component:ErrorComponent}//muestra el mesaje de error404
    
];

@NgModule({
        imports:[
            //indicamos al enrutador cuales son las rutas de la aplicacion
            RouterModule.forRoot(routes)
        ],
        exports:[RouterModule]
})
export class AppRoutingModule{

}