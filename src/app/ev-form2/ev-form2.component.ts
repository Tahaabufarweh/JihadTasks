import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ev-form2',
  templateUrl: './ev-form2.component.html',
  styleUrls: ['./ev-form2.component.scss']
})
export class EvForm2Component implements OnInit {
  isCollapsed :boolean =true;
  toggelCollapsed(){
    this.isCollapsed=!this.isCollapsed;

  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(public translate: TranslateService) { 
    translate.setDefaultLang('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
    console.log(language)
  }

  ngOnInit() {
  }

}
