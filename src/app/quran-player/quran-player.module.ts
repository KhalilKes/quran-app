import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuranPlayerRoutingModule } from './quran-player-routing.module';
import { QuranPlayerComponent } from './quran-player.component';


@NgModule({
  declarations: [
    QuranPlayerComponent
  ],
  imports: [
    CommonModule,
    QuranPlayerRoutingModule
  ]
})
export class QuranPlayerModule { }
