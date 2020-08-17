import { Component, OnInit } from '@angular/core';
import { DebitoFila } from 'src/app/models/filaDebito.model';
import { ArchivoBancarioService } from 'src/app/services/archivo-bancario.service';

@Component({
  selector: 'app-filabanco',
  templateUrl: './filabanco.component.html',
  styleUrls: ['./filabanco.component.css']
})
export class FilabancoComponent implements OnInit {

  public data:Array<DebitoFila>;
  public fila:DebitoFila;

  constructor(private debitoServ:ArchivoBancarioService) { 
   this.data = new Array<DebitoFila>(); 
  }

  ngOnInit(): void {
    this.debitoServ.debitosBD.then( (filas) => {
      this.data = filas;
      console.log(this.data);
      this.debitoServ.generarArchivo(this.data);
    } );
  }

}
