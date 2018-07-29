import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  showMore : boolean;

  constructor() {
    this.showMore = false;
  }

  ngOnInit() {
  }

  toggleShowMore() {
    console.log('pipoca  :3');
    this.showMore = !this.showMore;
  }

}
