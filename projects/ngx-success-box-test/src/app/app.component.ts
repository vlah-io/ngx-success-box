import {Component, ComponentRef} from '@angular/core';
import {SuccessBoxWorker} from '../../../ngx-success-box/src/lib/worker/success-box.worker';
import {SuccessBoxComponent} from '../../../ngx-success-box/src/lib/component/success-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-success-box-test';

  constructor(private successBoxWorker: SuccessBoxWorker) {
  }

  showSuccess(container?: HTMLDivElement): void {
    this.successBoxWorker.render(
      '<h2>Some success message!</h2>',
      {
        dismiss: (compRef: ComponentRef<SuccessBoxComponent>): void => {
          console.log('Close clicked ...');
          console.log(
            'Is instance of SuccessBoxComponent: ' +
            (compRef.instance instanceof SuccessBoxComponent)
          );
        },
        container
      }
    );
  }

  showSuccessWithCallback(): void {
    this.successBoxWorker.render(
      'Some success message!',
      {
        dismiss: (compRef: ComponentRef<SuccessBoxComponent>): void => {
          console.log('Close clicked ...');
          console.log(
            'Is instance of SuccessBoxComponent: ' +
            (compRef.instance instanceof SuccessBoxComponent)
          );
        },
        callbackButton: {
          buttonText: 'CONTINUE',
          callback: (compRef: ComponentRef<SuccessBoxComponent>): void => {
            console.log('Callback Button clicked ...');
            console.log(
              'Is instance of SuccessBoxComponent: ' +
              (compRef.instance instanceof SuccessBoxComponent)
            );
          }
        }
      }
    );
  }
}
