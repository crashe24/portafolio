import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductosService} from '../../services/productos.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

 termino:string = null;
  constructor(public ar:ActivatedRoute, public _ps:ProductosService) {
    ar.params.subscribe( parametros => {
      this.termino = parametros['termino'];
      console.log(this.termino);
    })
    _ps.buscarProducto(this.termino)
   }

  ngOnInit() {
  }

}
