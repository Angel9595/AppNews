import { Component, OnInit , Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada='general';
  paisSeleccionado='mx';

  Categorias: any[]=[
    {value:'general',nombre:'General',},
    {value:'entertainment',nombre:'Entretenimiento'},
    {value:'health',nombre:'Saludable'},
    {value:'science',nombre:'Ciencia'},
    {value:'sports',nombre:'Deportes'},
    {value:'technology',nombre:'Tecnologia'}


    
];
  Paises:any [] = [
    {value: 'mx', nombre:'Mexico'},
    {value: 'ar', nombre: 'Argentina'},
    {value: 'au', nombre: 'Australia'},
    {value: 'bo', nombre: 'Bolivia'},
    {value: 'br', nombre: 'Brazil'},
    {value: 'ca', nombre: 'Canada'},
    {value: 'cl', nombre: 'Chile'},
    {value: 'cn', nombre: 'China'},
    {value: 'co', nombre: 'Colombia'},
    {value: 'us', nombre: 'USA'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    console.log(this.paisSeleccionado,this.categoriaSeleccionada)
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
   this.parametrosSeleccionados.emit(PARAMETROS);
  }

}
