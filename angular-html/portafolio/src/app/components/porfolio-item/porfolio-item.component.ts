import { Component } from '@angular/core';
//para poder obtener el parametro de la url
import { ActivatedRoute} from '@angular/router';
import {ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-porfolio-item',
  templateUrl: './porfolio-item.component.html',
  styles: []
})
export class PorfolioItemComponent  {
  //para cargar el productos
  producto:any=null;
  cod:any ;
    constructor( public _ar:ActivatedRoute , public _ps:ProductosService) {
    _ar.params.subscribe( parametros => {
       this.cod = parametros['id'];
      console.log(parametros);
      console.log(parametros['id']);
      _ps.cargarProducto(this.cod).subscribe(
        data => {
          console.log(data.json());
          this.producto = data.json();
        }
      )

    })
  }



}
