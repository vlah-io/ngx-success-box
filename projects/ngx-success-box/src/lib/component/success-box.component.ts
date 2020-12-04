import {Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {SubSinkWorker} from '@vlah.io/ngx-worker';

@Component({
  selector: 'vlahio-success-box',
  templateUrl: './success-box.component.html'
})
export class SuccessBoxComponent implements OnDestroy {
  @Input() message: string | undefined;
  @Input() callbackButtonText?: string | null | undefined;
  @Input() container?: HTMLElement | undefined;
  @Output() callback$: EventEmitter<true> = new EventEmitter<true>();
  @Output() dismiss$: EventEmitter<true> = new EventEmitter<true>();
  subSink = new SubSinkWorker();

  @ViewChild('successBoxContainer', {static: false})
  set successBoxContainer(elRef: ElementRef<HTMLDivElement>) {
    if (this.container instanceof HTMLElement) {
      elRef.nativeElement.style.maxHeight = Math.round(
        this.container.clientHeight - this.container.clientHeight / 100 * 20
      ) + 'px';
    }
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.dismiss();
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  callback(): void {
    this.callback$.emit(true);
  }

  dismiss(): void {
    this.dismiss$.emit(true);
  }
}
