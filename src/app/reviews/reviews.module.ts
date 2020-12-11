import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { SendFeedBackComponent } from './send-feed-back/send-feed-back.component';
import { ReportProblemComponent } from './report-problem/report-problem.component';


@NgModule({
  declarations: [SendFeedBackComponent, ReportProblemComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ]
})
export class ReviewsModule { }
