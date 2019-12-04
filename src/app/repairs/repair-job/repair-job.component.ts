import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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

  showRepair() {
    this.repairClicked.emit(this.repair);
  }

  constructor() { }

  ngOnInit() {
    if (this.repair === undefined) {
      throw Error('No repair is defined')
    }
  }

}
