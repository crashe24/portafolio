import { Component } from '@angular/core';
//para poder obtener el parametro de la url
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-porfolio-item',
  templateUrl: './porfolio-item.component.html',
  styles: []
})
export class PorfolioItemComponent  {

  constructor( public _ar:ActivatedRoute) {
    _ar.params.subscribe( parametros => {

      console.log(parametros);
      console.log(parametros['id']);  

    })
  }



}
