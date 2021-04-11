import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Калькулятор заплат';
  loading$: BehaviorSubject<boolean>;

  constructor(
    private loader: LoaderService
  ) {
    this.loading$ = this.loader.loading$;
  }
}
