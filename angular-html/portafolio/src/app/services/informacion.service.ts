import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info:any=[];
  cargada:boolean=false;
  cargadaSobreNosotros:boolean=false;
  equipo:any=[];
  constructor(private http: Http) {
      this.cargaInfo();
      this.cargaSobreNosotros();
   }

   cargaInfo(){
     this.http.get("assets/data/info.pagina.json")
     .subscribe( data => {
       this.info = data.json();
       this.cargada = true;
       //  console.log(data.json());

     })
   }
   cargaSobreNosotros(){
     this.http.get("https://paginaweb-143f7.firebaseio.com/equipo.json")
     .subscribe( data => {
       this.equipo = data.json();
       this.cargadaSobreNosotros = true;


     })
   }
}
