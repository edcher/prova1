import { Component, VERSION } from '@angular/core';
import { TeatroService } from './teatro.service';

class Teatro {
  platea: any[] = [];
  palco: any[] = [];
  constructor (nFilePlatea, nPostiPlatea, nFilePalco, nPostiPalco) {
    this.platea = new Array(nFilePlatea).fill("").map(() => Array(nPostiPlatea).fill(""));
    this.palco = new Array(nFilePalco).fill("").map(() => Array(nPostiPalco).fill(""));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = 'Prenotazioni spettacolo';
  spettacolo: Teatro;
  constructor(private service: TeatroService) { }
  creaSpettacolo(){
    this.spettacolo = new Teatro(7,10,4,6);
    this.service.setSpettacolo("c484205d", this.spettacolo).subscribe({
      next: ( x: any ) => console.log("Lo spettacolo è stato creato"),
      error: err => console.error('Observer got an error: ' + JSON.stringify(err))
    })
  }
}
