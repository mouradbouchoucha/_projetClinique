import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-schedule-timing',
  templateUrl: './schedule-timing.component.html',
  styleUrls: ['./schedule-timing.component.css']
})
export class ScheduleTimingComponent implements OnInit {
  constructor() { }
duree:any
  ngOnInit(): void {
  }
GetContainerText(_container:HTMLElement){
  let _containerText = _container.innerText;
  console.log(_containerText);
}
}