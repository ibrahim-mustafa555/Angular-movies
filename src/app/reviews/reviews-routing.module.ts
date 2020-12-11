import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendFeedBackComponent } from './send-feed-back/send-feed-back.component';
import { ReportProblemComponent } from './report-problem/report-problem.component';


const routes: Routes = [
  {path: '', component:SendFeedBackComponent},
  {path: 'problem', component:ReportProblemComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
