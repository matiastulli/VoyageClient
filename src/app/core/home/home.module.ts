import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@home/views';
import { SliderModule, NavbarModule } from '@home/modules';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SliderModule, NavbarModule],
})
export class HomeModule {}
