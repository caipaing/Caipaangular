import { Injectable } from '@angular/core';
import { cotizador, Productos } from '../productos/productos';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {



    selectproduct: Productos = new Productos();
    selectcotizar: cotizador = new cotizador();
    productlist: AngularFireList<any>;

    constructor( private firebase: AngularFireDatabase) {

     }
     getProduct (){
     return this.productlist = this.firebase.list('Productos');
    }

    getCotizar(){
      return this.productlist = this.firebase.list('cotizador');
    }

    insertProductos( Product: Productos){
      this.productlist.push ({
        name: Product.name,
        descripcion: Product.descripcion,
        precio: Product.precio,
      });
    }

    updateProductos( Product: Productos){
      this.productlist.update (Product.$key,{
        name: Product.name,
        description: Product.descripcion,
        precio: Product.precio
      });
    }

    removeProductos( $key: string){
      this.productlist.remove($key);
    }


    insertCotizador(cotiza: cotizador){
      this.productlist.push({
      producto: cotiza.producto,
      descripcion: cotiza.descripcion,
      cantidad: cotiza.cantidad,
      calcular: cotiza.calcular,
      });
    }
    updateCotizar( cotiza: cotizador){
      this.productlist.update (cotiza.$key,{
        producto: cotiza.producto,
      descripcion: cotiza.descripcion,
      cantidad: cotiza.cantidad,
      calcular: cotiza.calcular,
      });
    }

    removeCotizar( $key: string){
      this.productlist.remove($key);
    }
}
