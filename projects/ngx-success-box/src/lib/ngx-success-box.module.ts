import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SuccessBoxComponent} from './component/success-box.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SuccessBoxComponent
  ],
  exports: [
    SuccessBoxComponent
  ],
  entryComponents: [
    SuccessBoxComponent
  ]
})
export class NgxSuccessBoxModule {
}
