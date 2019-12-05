import { Component, OnInit } from '@angular/core';
import { Repair } from '../repair.model';
import { RepairService } from '../shared/repair.service';

@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit {
  repairs: Repair[];

  constructor(private repairService: RepairService) { }

  ngOnInit(): void {
    this.getRepairs();
  }

  getRepairs() {
    // this.repairs = this.repairService.getRepairs();
    this.repairService.getRepairs()
    .subscribe(
        repairs => this.repairs = repairs,
        error => console.log('Error: ', error));
  }

  parentFunctionHandler(repair) {
    console.log('Repair ' + repair.name + ' was flagged as completed');
  }
}
