import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  @Input('endIcon') endIcon = "ionic";
  constructor() {
    
   }
}

@Component({
  selector: 'app-timeline-item',
  template: '<ng-content></ng-content>'
})
export class TimelineItemComponent{
  constructor(){

  }
}

@Component({
  selector:'app-timeline-date',
  template: '<span>{{date.subtitle}}</span> <span>{{date.title}}</span>'
})
export class TimelineDateComponent{
  @Input('date') date ={};
  constructor(){

  }
}