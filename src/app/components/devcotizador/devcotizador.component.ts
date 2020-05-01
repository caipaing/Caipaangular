import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/productos/productos';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-devcotizador',
  templateUrl: './devcotizador.component.html',
  styleUrls: ['./devcotizador.component.css']
})
export class DevcotizadorComponent implements OnInit {


  Servicios: Productos[];

  constructor(private servicioService: ProductosService) { }

  ngOnInit() {
    this.servicioService.getProduct()
    .snapshotChanges()
    .subscribe(item => {
      this.Servicios = [];
      item.forEach(element => {
        let ver = element.payload.toJSON();
        ver['$key'] = element.key;
        this.Servicios.push(ver as Productos );
      });
    });

  }

}
