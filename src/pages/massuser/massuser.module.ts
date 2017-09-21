import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MassuserPage } from './massuser';

@NgModule({
  declarations: [
    MassuserPage,
  ],
  imports: [
    IonicPageModule.forChild(MassuserPage),
  ],
})
export class MassuserPageModule {}
