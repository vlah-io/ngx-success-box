import {ComponentRef, Injectable} from '@angular/core';
import {FactoryWorker} from '@vlah.io/ngx-worker';
import {SuccessBoxComponent} from '../component/success-box.component';
import {DisplayOptionsInterface} from '../interface/ngx-success-box.interface';

@Injectable({
  providedIn: 'root'
})
export class SuccessBoxWorker {
  constructor(private factoryWorker: FactoryWorker) {
  }

  render(
    message: string,
    options: DisplayOptionsInterface = {}
  ): ComponentRef<SuccessBoxComponent> {
    const {dismiss, callbackButton, container} = options;

    const compRef = this.factoryWorker.make(SuccessBoxComponent);
    const compRefInstance = compRef.instance as SuccessBoxComponent;

    compRefInstance.message = message;
    if (container) {
      compRefInstance.container = container;
    }

    if (callbackButton) {
      compRefInstance.callbackButtonText = callbackButton.buttonText;
      compRefInstance.subSink.add(
        compRefInstance.callback$.subscribe(
          () => {
            callbackButton.callback(compRef);
            this.destroy(compRef);
          }
        )
      );
    }

    compRefInstance.subSink.add(
      compRefInstance.dismiss$.subscribe(
        () => {
          if (dismiss) {
            dismiss(compRef);
          }
          this.destroy(compRef);
        }
      )
    );

    this.factoryWorker.glue(compRef, {container});

    return compRef;
  }

  destroy(compRef: ComponentRef<SuccessBoxComponent>): void {
    this.factoryWorker.destroy(compRef);
  }
}
