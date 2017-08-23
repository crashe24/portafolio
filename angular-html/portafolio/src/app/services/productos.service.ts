import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[]=[];
  cargando:boolean =false;

  constructor(public _http:Http) {
      this.cargarProductos();
   }

  cargarProductos(){
    this.cargando = true;
    if(this.productos.length ===0){
        this._http.get("https://paginaweb-143f7.firebaseio.com/productos_idx.json")
        .subscribe( res => {
            //console.log(res.json());
            setTimeout(() => {
              this.productos = res.json();
              this.cargando = false;
            },1500)

        })
    }
  }

  //servicio para cargar el producto mediante su identificador

  cargarProducto( cod:string ){
    return this._http.get(`https://paginaweb-143f7.firebaseio.com/productos/${cod}.json`);
  }
}
