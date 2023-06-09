import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterRoutingModule } from './chapter-routing.module';
import { ChapterComponent } from './chapter.component';
import { NbAlertModule, NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbLayoutModule, NbTagModule, NbTooltipModule } from '@nebular/theme';



@NgModule({
  declarations: [
    ChapterComponent
  ],
  imports: [
    CommonModule,
    ChapterRoutingModule,
    NbLayoutModule,
    NbButtonModule,
    NbTagModule,
    NbIconModule,
    NbDialogModule.forChild(),
    NbAlertModule,
    NbCardModule,
    NbTooltipModule
  ]
})
export class ChapterModule { }
