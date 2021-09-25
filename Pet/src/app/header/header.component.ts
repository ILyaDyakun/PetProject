import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface LanguageOption {
  id: string;
  title: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public languages: LanguageOption[] = [
    {
      id: 'en',
      title: 'English'
    },
    {
      id: 'ua',
      title: 'Українська'
    }
  ];
  public selectedLanguage: string = environment.defaultLocale;
  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    console.log(environment.locales);
  }
  public languageChange(newValue: any): void {
    this.selectedLanguage = newValue.value;
    this.translateService.use(this.selectedLanguage)
    console.log(newValue);
  }

}
