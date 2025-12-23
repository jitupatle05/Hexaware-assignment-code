import {
  Directive,
  ElementRef,
  EventEmitter,
  Output
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[inView]'
})
export class InViewDirective {
  @Output() inView = new EventEmitter<void>();

  constructor(el: ElementRef) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.inView.emit();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el.nativeElement);
  }
}
