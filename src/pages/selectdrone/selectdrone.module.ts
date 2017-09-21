import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectdronePage } from './selectdrone';

@NgModule({
  declarations: [
    SelectdronePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectdronePage),
  ],
})
export class SelectdronePageModule {}
