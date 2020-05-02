import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cotizador } from 'src/app/productos/productos';
import { ProductosComponent } from 'src/app/components/devproductos/productos/productos.component'
import { ProductosService } from 'src/app/service/productos.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent implements OnInit {

  productform: ProductosComponent;

  constructor(public ServicioService: ProductosService) { }

  ngOnInit() {
    this.ServicioService.getCotizar();
    this.resetForm();
  }

  onSubmit(cotizaForm: NgForm) {
    if (this.productform.ngOnInit == null)
    this.ServicioService.insertCotizador(cotizaForm.value);
    this.resetForm(cotizaForm);
  }
  resetForm(cotizaForm?: NgForm) {
    if (cotizaForm != null) {
      cotizaForm.reset();
      this.ServicioService.selectcotizar = new cotizador();
    }
  }
  cacularForm(cotizaForm: NgForm) {
    precio: this.ServicioService.getProduct();
    cantidad: this.ngOnInit();
    if (cotizaForm != null) {
      //result: $precio * cantidad;
    }
  }



}
