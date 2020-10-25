import {Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {SubSink} from 'subsink';

@Component({
  selector: 'vlahio-success-box',
  templateUrl: './success-box.component.html'
})
export class SuccessBoxComponent implements OnDestroy {
  subSink = new SubSink();

  @Input() message: string;
  @Input() callbackButtonText?: string | null;
  @Input() container?: HTMLElement;
  @Output() callback?: EventEmitter<true> = new EventEmitter<true>();
  @Output() dismiss: EventEmitter<true> = new EventEmitter<true>();

  @ViewChild('successBoxContainer', {static: false})
  set _successBoxContainer(elRef: ElementRef<HTMLDivElement>) {
    if (this.container instanceof HTMLElement) {
      elRef.nativeElement.style.maxHeight = Math.round(
        this.container.clientHeight - this.container.clientHeight / 100 * 20
      ) + 'px';
    }
  }

  @HostListener('document:keydown.escape')
  _onEsc(): void {
    this.dismiss$();
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  callback$(): void {
    this.callback.emit(true);
  }

  dismiss$(): void {
    this.dismiss.emit(true);
  }
}
