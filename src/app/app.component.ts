import { Component, VERSION } from '@angular/core';
import { TeatroService } from './teatro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = 'Prenotazioni spettacolo';
  constructor(private service: TeatroService) { }
}
