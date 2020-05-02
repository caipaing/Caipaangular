import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';
import { NgForm } from '@angular/forms';
import { Productos } from 'src/app/productos/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public ServicioService: ProductosService) { }

  ngOnInit() {
    this.ServicioService.getProduct();
    this.resetForm();
  }

  onSubmit(productForm: NgForm){
    if (productForm.value.$key == null) {
      this.ServicioService.insertProductos(productForm.value);
    }else {
      this.ServicioService.updateProductos(productForm.value);
    }

    this.resetForm(productForm);
  }
  resetForm(productForm?: NgForm){
    if (productForm != null) {
      productForm.reset();
      this.ServicioService.selectproduct = new Productos();
    }
  }


}
