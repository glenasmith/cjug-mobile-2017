import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Candidate } from './candidate';
import { Observable  } from "rxjs/Rx";
import "rxjs/add/operator/map";


@Injectable()
export class VoteService {

  constructor(private http : Http) { }

  getCandidates() : Observable<Candidate[]> {

    return this.http.get("~/assets/data/candidates.json").map( (resp) => {
      return resp.json();
    });

  }


}
