import {ComponentRef} from '@angular/core';
import {SuccessBoxComponent} from '../component/success-box.component';

export interface DisplayOptionsInterface {
  dismiss?: (compRef: ComponentRef<SuccessBoxComponent>) => void;
  callbackButton?: null | {
    buttonText: string;
    callback: (compRef: ComponentRef<SuccessBoxComponent>) => void;
  };
  container?: HTMLElement;
}
