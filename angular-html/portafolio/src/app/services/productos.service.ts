import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[]=[];
  productosFiltrados:any[]=[];
  cargando:boolean =false;

  constructor(public _http:Http) {
      this.cargarProductos();
   }

  cargarProductos(){
    this.cargando = true;
    let promesa = new Promise( (resolve, reject) => {
          this._http.get("https://paginaweb-143f7.firebaseio.com/productos_idx.json")
          .subscribe( res => {
                this.productos = res.json();
                this.cargando = false;
                resolve();
              });
  });

  return promesa;

  }

  //servicio para cargar el producto mediante su identificador

  cargarProducto( cod:string ){
    return this._http.get(`https://paginaweb-143f7.firebaseio.com/productos/${cod}.json`);
  }

  //para buscar el producto mediante el termino seleccionado
  buscarProducto(termino:string){
    console.log("buscando producto");
    if(this.productos.length === 0 ){
      this.cargarProductos().then( () =>{
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }

  }

  private filtrarProductos( termino:string){
    this.productosFiltrados =[];
    termino = termino.toLowerCase();
    this.productos.forEach( prod =>{
      //  console.log(prod);
        if(prod.categoria.indexOf(termino)>=0 || prod.titulo.toLowerCase().indexOf(termino)>=0 ){
          this.productosFiltrados.push(prod);
        }
    })
  }
}
