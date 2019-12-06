import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {formatDate} from '@angular/common';

import { Repair } from '../repair.model';

@Component({
  selector: 'app-repair-job',
  templateUrl: './repair-job.component.html',
  styleUrls: ['./repair-job.component.css']
})
export class RepairJobComponent implements OnInit {
  @Input()
  repair: Repair;

  @Output()
  repairClicked: EventEmitter<Repair> = new EventEmitter<Repair>();

  startRepair() {
    this.repair.completed = false;
    this.repair.completionDate = null;
    this.repair.startDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    this.repairClicked.emit(this.repair);
  }

  setComplete() {
    this.repair.completed = true;
    this.repair.completionDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    this.repairClicked.emit(this.repair);
  }

  showTools() {
    alert(JSON.stringify(this.repair.tools));
  }

  constructor() { }

  ngOnInit() {
    if (this.repair === undefined) {
      throw Error('No repair is defined');
    }
  }

}
