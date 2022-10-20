import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-noticas',
  templateUrl: './listado-noticas.component.html',
  styleUrls: ['./listado-noticas.component.css']
})
export class ListadoNoticasComponent implements OnInit {
  @Input() Noticias:any;
  constructor() { }

  ngOnInit(): void {
  }

}
