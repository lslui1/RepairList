import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepairListComponent } from './repair-list/repair-list.component';
import { RepairJobComponent } from './repair-job/repair-job.component';

@NgModule({
  declarations: [
    RepairListComponent,
    RepairJobComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class RepairsModule { }
