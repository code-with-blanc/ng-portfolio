import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() {
    let showMore = false;
  }

  ngOnInit() {
  }

  toggleShowMore() {
    console.log('pipoca  :3');
    this.showMore = !this.showMore;
  }

  open() {
    console.log('open me up!');
  }

}
