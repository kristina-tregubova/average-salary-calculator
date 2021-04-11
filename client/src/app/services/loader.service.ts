import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  startLoading(): void {
    this.loading$.next(true);
  }

  stopLoading(): void {
    this.loading$.next(false);
  }
}
