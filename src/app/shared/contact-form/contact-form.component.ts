import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  @Input() successDuration = 3000;
  @Output() submitted = new EventEmitter<void>();

  loading = false;
  success = false;
  error = false;
private successTimeoutId?: number;

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  constructor(private fb: FormBuilder) {}

  submit() {
    if (this.form.invalid || this.loading) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = false;
    this.success = false;

    // API simulation
    setTimeout(() => {
      this.loading = false;

      // simulate success (90%) / error (10%)
      if (Math.random() > 0.1) {
        this.success = true;
        this.form.reset();
        this.submitted.emit();
        this.startSuccessTimer();
      } else {
        this.error = true;
      }
    }, 1200);
  }

  private startSuccessTimer() {
    if (this.successTimeoutId) {
      clearTimeout(this.successTimeoutId);
    }

    this.successTimeoutId = window.setTimeout(() => {
      this.success = false;
    }, 3000);
  }
}