import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileaddPage } from './profileadd';

@NgModule({
  declarations: [
    ProfileaddPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileaddPage),
  ],
})
export class ProfileaddPageModule {}
