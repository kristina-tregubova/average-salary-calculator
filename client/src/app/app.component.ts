import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading$: BehaviorSubject<boolean>;

  constructor(
    private loader: LoaderService,
    private translateService: TranslateService
  ) {
    this.loading$ = this.loader.loading$;
    this.translateService.use(environment.defaultLocale);
  }
}
