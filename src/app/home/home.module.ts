import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbTagModule } from '@nebular/theme';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbLayoutModule,
    NbIconModule,
    NbButtonModule,
    NbAutocompleteModule,
    NbCardModule,
    NbInputModule,
    NbTagModule
  ]
})
export class HomeModule { }
