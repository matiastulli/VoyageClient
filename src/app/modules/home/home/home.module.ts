import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/views/home.component'
import { SliderModule } from '../slider/slider.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SliderModule],
})
export class HomeModule {}
