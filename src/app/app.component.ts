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
  @Output() new_teatro_event = new EventEmitter<string>();
  title: string = 'Prenotazioni spettacolo';
  spettacolo: Teatro;
  platea: any[] = [];
  palco: any[] = [];
  constructor(private service: TeatroService) { }

  creaSpettacolo(){
    this.spettacolo = new Teatro(7,10,4,6);
    this.service.setSpettacolo("c484205d", this.spettacolo).subscribe({
      //next: ( x: any ) => console.log("Lo spettacolo è stato creato"),
      next: ( x: any ) => {
        this.new_teatro_event.emit("c484205d");
        console.log("Lo spettacolo è stato creato");
      },
      error: err => console.error('Observer got an error: ' + JSON.stringify(err))
    })
  }

  cercaSpettacolo(){
    const key = "c484205d";
    this.service.getSpettacolo(key).subscribe({
      next: (x: any) => { 
      const spettacolo = JSON.parse(x);
      console.log(spettacolo);
      console.log(spettacolo.palco);
      console.log(spettacolo.platea);
      this.platea = spettacolo.platea;
      this.palco = spettacolo.palco;
      },
      error: err => console.error('Observer got an error: ' + JSON.stringify(err))
    })
  }

  mostraPalcoscenico(platea: any, palco: any){

  }
}
