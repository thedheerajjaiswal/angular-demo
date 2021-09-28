import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

const matmodules = [MatSliderModule, MatButtonModule];
@NgModule({
  declarations: [],
  imports: [CommonModule, matmodules],
  exports: [matmodules],
})
export class MaterialModule {}
