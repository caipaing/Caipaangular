import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevcotizadorComponent } from './components/devcotizador/devcotizador.component';
import { CotizadorComponent } from './components/devcotizador/cotizador/cotizador.component';
import { DevproductosComponent } from './components/devproductos/devproductos.component';
import { ProductosComponent } from './components/devproductos/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ProductosService } from '../app/service/productos.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    DevcotizadorComponent,
    CotizadorComponent,
    DevproductosComponent,
    ProductosComponent,
    ContactoComponent,
    AdministradorComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FontAwesomeModule,
    MDBBootstrapModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
