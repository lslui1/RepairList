import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { RepairListComponent } from './repairs/repair-list/repair-list.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  {
    path: "about",
    loadChildren: () => import('./about/about.module')
      .then(mod => {
        console.log('in promise loadChildren');
        return mod.AboutModule;
      })
  },
  { path: "welcome", component: WelcomeComponent },
  { path: "repairs", component: RepairListComponent },
  { path: "**", component: NotfoundComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
