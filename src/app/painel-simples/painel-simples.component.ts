import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-painel-simples',
  templateUrl: './painel-simples.component.html',
  styleUrls: ['./painel-simples.component.css']
})
export class PainelSimplesComponent {

  @Input() titulo!:string;
  @Input() col!: string;
  @Input() tipo:string = "info";

  constructor() { }

}
