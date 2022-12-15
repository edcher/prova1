import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TeatroService {
  URL: string = "https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint";
  secret: string = "ssw2022";

  constructor(private http: HttpClient) { }

  nuovoSpettacolo(): Observable<string> {
    return this.http.get<string>(this.URL+"new?secret="+this.secret);
  }

}