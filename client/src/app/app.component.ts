import { AfterViewInit, Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  loading$: BehaviorSubject<boolean>;

  constructor(
    private loader: LoaderService,
    private translateService: TranslateService,
    private detector: ChangeDetectorRef
  ) {
    this.loading$ = this.loader.loading$;
    this.translateService.use(environment.defaultLocale);
  }

  ngAfterViewInit() { 
    this.detector.markForCheck();
  }
}
