import { Component, Output, EventEmitter } from '@angular/core';
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
  @Output() event = new EventEmitter<string>();
  title: string = 'Prenotazioni spettacolo';
  spettacolo: Teatro;
  platea: any[] = [];
  palco: any[] = [];
  chiave: string;
  constructor(private service: TeatroService) { }

  creaSpettacolo(){
    this.spettacolo = new Teatro(7,10,4,6);
    this.service.newSpettacolo().subscribe({
      next: ( key: any ) => {
        this.service.setSpettacolo(key, this.spettacolo).subscribe({
          next: ( x: any ) => {
            this.event.emit(key);
            console.log("Lo spettacolo con la chiave "+this.chiave+" è stato creato");
            this.cercaSpettacolo(key);
          },
          error: err => console.error('Observer got an error: ' + JSON.stringify(err))
        })
      },
      error: err => console.error('Observer got an error: ' + JSON.stringify(err))
    })
  }

  cercaSpettacolo(key: string){
    this.service.getSpettacolo(key).subscribe({
      next: (x: any) => { 
      const spettacolo = JSON.parse(x);
      console.log(spettacolo);
      console.log(spettacolo.palco);
      console.log(spettacolo.platea);
      this.platea = spettacolo.platea;
      this.palco = spettacolo.palco;
      this.chiave = key;
      },
      error: err => console.error('Observer got an error: ' + JSON.stringify(err))
    })
  }


}
