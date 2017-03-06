import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';
import { Candidate } from '../candidate';

declare var Chart: any;

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  moduleId: module.id,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  candidates: Candidate[];

  donutLabels: string[];
  donutData: number[];
  tabindex: any;


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




}
