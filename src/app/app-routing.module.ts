import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevproductosComponent } from './components/devproductos/devproductos.component';
import { DevcotizadorComponent } from './components/devcotizador/devcotizador.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';



const routes: Routes = [
  { path: 'devproductos',
  component: DevproductosComponent
},

  { path: 'devcotizador',
  component: DevcotizadorComponent
},

  {path: 'catalogo',
component: CatalogoComponent
},

{
  path: 'contacto',
  component: ContactoComponent
},

{path: '',
pathMatch: 'full',
redirectTo: 'catalogo'
}

];

@NgModule({


  imports: [
       RouterModule.forRoot(routes,
      {
        enableTracing:true
      }
      )],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
