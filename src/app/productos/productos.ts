export class Productos {

    $key: string;
    name: string;
    descripcion: string;
    precio: number;
    unidad: string;
    cantidad: number;

}

export class cotizador{
    $key: string;
    producto: string;
    descripcion: string;
    cantidad: number;
    unidad: string;
    calcular: number;
}

export class mensajes{
  $key: string;
  nombre: string;
  email: string;
  mensaje: string;
}

