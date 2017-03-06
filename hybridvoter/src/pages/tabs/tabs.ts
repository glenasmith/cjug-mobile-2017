import { Component, OnInit } from '@angular/core';

import { VoteService } from '../../app/vote.service';
import { Candidate } from '../../app/candidate';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {

  segment = "vote";

  candidates: Candidate[];

  donutLabels: string[];
  donutData: number[];

  constructor(private voteService: VoteService) {

  }

  ngOnInit() {
    this.voteService.getCandidates().subscribe((cands) => {

      this.donutData = [];
      this.donutLabels = [];

      cands.forEach((candidate) => {
        console.log(JSON.stringify(candidate));
        let label = candidate.name;
        let data = candidate.votes;

        console.log(label, data);
        this.donutLabels.push(label);
        this.donutData.push(data);
      });
      console.log(JSON.stringify(this.donutLabels));
      console.log(JSON.stringify(this.donutData));

      this.candidates = cands;

    });
  }

  reorderItems(indexes) {
    let element = this.candidates[indexes.from];
    this.candidates.splice(indexes.from, 1);
    this.candidates.splice(indexes.to, 0, element);
  }
}
