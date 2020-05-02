import { Component, OnInit } from '@angular/core';
import { Productos, cotizador } from 'src/app/productos/productos';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-devproductos',
  templateUrl: './devproductos.component.html',
  styleUrls: ['./devproductos.component.css']
})
export class DevproductosComponent implements OnInit {

  Servicios: Productos[];



  constructor(public servicioService: ProductosService) { }

  ngOnInit() {
    this.servicioService.getProduct()
      .snapshotChanges()
      .subscribe(item => {
        this.Servicios = [];
        item.forEach(element => {
          let ver = element.payload.toJSON();
          ver['$key'] = element.key;
          this.Servicios.push(ver as Productos);
        });
      });


  }

  onEdit(Productos: Productos){
    this.servicioService.selectproduct = Object.assign({}, Productos);
  }

  onDelete($key: string){

  }


}
