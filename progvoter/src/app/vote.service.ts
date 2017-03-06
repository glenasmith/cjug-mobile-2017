import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { Candidate } from './candidate';


@Injectable()
export class VoteService {

  constructor(private http : Http) { }

  getCandidates() : Observable<Candidate[]> { 

    return this.http.get("assets/data/candidates.json").map( (resp) => {
      return resp.json();
    });

  }


}
