import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Work } from '../Models/work.model';

@Injectable({
  providedIn: 'root'
})
export class WorksapiService {
  private http = inject(HttpClient);

  works = signal<Work[]>([]);
  loading = signal<boolean>(true);

  loadWorks() {
    this.loading.set(true);

    this.http.get<Work[]>('http://localhost:3000/works')
      .subscribe({
        next: data => {
          this.works.set(data);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
  }
}