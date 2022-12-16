import { Component, VERSION } from '@angular/core';
import { TeatroService } from './teatro.service';

class teatro {
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
  constructor(private service: TeatroService) { }
}
