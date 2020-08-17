import { Injectable } from '@angular/core';
import { DebitoFila } from '../models/filaDebito.model';
import * as FileSaver from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { DebitoDB } from '../models/debito.interface';

@Injectable({
  providedIn: 'root'
})
export class ArchivoBancarioService {

  constructor(private _http: HttpClient) { }

  public get debitosBD(): Promise<Array<DebitoFila>> {
    return this._http.get("http://localhost:5000/debitos-automaticos")
    .toPromise()
    .then(
      (filas: Array<DebitoDB>) => {
        let data: Array<DebitoFila> = new Array<DebitoFila>();
        filas.forEach(fila => data.push(new DebitoFila(
          71,
          new Date(fila.fecha),
          fila.legajo,
          fila.cbu,
          fila.importe,
          0,
          fila.apellido
        )));
        return data;
      }
    ).catch((err) => {
      console.log("error en la consulta" + err);
      return new Array<DebitoFila>();
    });
  }

  public generarArchivo(filas: Array<DebitoFila>) {
    let elTexto: string[] = [];
    filas.forEach(fila => elTexto.push(fila.fila + '\n'));
    console.log(elTexto);
    let blob = new Blob(elTexto, {type: "text/plain;charset=utf-8"});
    let fileName:string = "bet" + new Date().toISOString() + ".txt";
    FileSaver.saveAs(blob, fileName);
  }
}
