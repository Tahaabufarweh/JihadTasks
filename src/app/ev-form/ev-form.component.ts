import { Component, OnInit } from '@angular/core';
import { ExitInterviewQuestions, ExitInterviewAnswers } from '../ModelsInterfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { error } from 'util';
const formRes = [
  'overallSatisfaction',
  'jobTools',
  'sufficientOpportinities',
  'learningNewThings',
  'adequateTraining',
  'adequateSalary',
  'otherBenifits',
  'goodInvironment',
  'internalCommunications',
  'companyPolicies',
  'managerSuggestions',
  'managerAchievements',
  'managerPromoted',
  'managerFeedback',
  'managerProfissional'
]
@Component({
  selector: 'app-ev-form',
  templateUrl: './ev-form.component.html',
  styleUrls: ['./ev-form.component.scss']
})
export class EvFormComponent implements OnInit {

  public interviewForm = new FormGroup({
    mainReason: new FormControl('', Validators.required),
    options: new FormControl('', Validators.required),
    acceptedJob: new FormControl(false, Validators.required),
    acceptedJobPlace: new FormControl(''),
    acceptedJobReason: new FormControl(''),
    overallSatisfaction: new FormControl('', Validators.required),
    jobTools: new FormControl('', Validators.required),
    sufficientOpportinities: new FormControl('', Validators.required),
    learningNewThings: new FormControl('', Validators.required),
    adequateTraining: new FormControl('', Validators.required),
    adequateSalary: new FormControl('', Validators.required),
    otherBenifits: new FormControl('', Validators.required),
    goodInvironment: new FormControl('', Validators.required),
    internalCommunications: new FormControl('', Validators.required),
    companyPolicies: new FormControl('', Validators.required),
    managerSuggestions: new FormControl('', Validators.required),
    managerAchievements: new FormControl('', Validators.required),
    managerPromoted: new FormControl('', Validators.required),
    managerFeedback: new FormControl('', Validators.required),
    managerProfissional: new FormControl('', Validators.required),
    doRight: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$")] ),
    doWrong: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$")] ), 
    createBetterWorkPlace: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$")]  ),
    considerWorkignAgain: new FormControl(true,Validators.required),
    considerWorkignAgainReason: new FormControl(''),
    recommentSts: new FormControl(true, Validators.required),
    recommendStsreason: new FormControl(''),
    comments: new FormControl(''),
    personalExitInterview: new FormControl('', Validators.required),
    requestTaskId: new FormControl(''),
    createdBy: new FormControl(0)
  });


  get mainReason() {
    return this.interviewForm.get('mainReason') as FormControl;
  }
  get createdBy() {
    return this.interviewForm.get('createdBy') as FormControl;
  }
  get options() {
    return this.interviewForm.get('options') as FormControl;
  }
  get acceptedJob() {
    return this.interviewForm.get('acceptedJob') as FormControl;
  }
  get acceptedJobPlace() {
    return this.interviewForm.get('acceptedJobPlace') as FormControl;
  }
  get adequateSalary() {
    return this.interviewForm.get('adequateSalary') as FormControl;
  }
  get acceptedJobReason() {
    return this.interviewForm.get('acceptedJobReason') as FormControl;
  }
  get overallSatisfaction() {
    return this.interviewForm.get('overallSatisfaction') as FormControl;
  }
  get jobTools() {
    return this.interviewForm.get('jobTools') as FormControl;
  }
  get sufficientOpportinities() {
    return this.interviewForm.get('sufficientOpportinities') as FormControl;
  }
  get learningNewThings() {
    return this.interviewForm.get('learningNewThings') as FormControl;
  }
  get adequateTraining() {
    return this.interviewForm.get('adequateTraining') as FormControl;
  }
  get otherBenifits() {
    return this.interviewForm.get('otherBenifits') as FormControl;
  }
  get goodInvironment() {
    return this.interviewForm.get('goodInvironment') as FormControl;
  }
  get internalCommunications() {
    return this.interviewForm.get('internalCommunications') as FormControl;
  }
  get companyPolicies() {
    return this.interviewForm.get('companyPolicies') as FormControl;
  }
  get managerSuggestions() {
    return this.interviewForm.get('managerSuggestions') as FormControl;
  }
  get managerAchievements() {
    return this.interviewForm.get('managerAchievements') as FormControl;
  }
  get managerPromoted() {
    return this.interviewForm.get('managerPromoted') as FormControl;
  }
  get managerFeedback() {
    return this.interviewForm.get('managerFeedback') as FormControl;
  }
  get managerProfissional() {
    return this.interviewForm.get('managerProfissional') as FormControl;
  }
  get doRight() {
    return this.interviewForm.get('doRight') as FormControl;
  }
  get doWrong() {
    return this.interviewForm.get('doWrong') as FormControl;
  }
  get createBetterWorkPlace() {
    return this.interviewForm.get('createBetterWorkPlace') as FormControl;
  }
  get considerWorkignAgain() {
    return this.interviewForm.get('considerWorkignAgain') as FormControl;
  }
  get considerWorkignAgainReason() {
      return this.interviewForm.get('considerWorkignAgainReason') as FormControl;
  }
  get recommentSts() {
    return this.interviewForm.get('recommentSts') as FormControl;
  }
  get recommendStsreason() {
    return this.interviewForm.get('recommendStsreason') as FormControl;
  }
  get comments() {
    return this.interviewForm.get('comments') as FormControl;
  }
  get personalExitInterview() {
    return this.interviewForm.get('personalExitInterview') as FormControl;
  }
  get requestTaskId() {
    return this.interviewForm.get('requestTaskId') as FormControl;
  }

  selectedOptions = [
    { type: 1, arLabel: 'طبيعة العمل', enLabel: 'Nature of work', value: 0},
    { type: 1, arLabel: 'بيئة العمل', enLabel: 'Work environment ', value: 1},
    { type: 1, arLabel: 'عدم توفر فرص التطور الوظيفي', enLabel: 'Lack of Opportunity for Growth', value: 2},
    { type: 1, arLabel: 'الراتب', enLabel: 'Compensation', value: 3},
    { type: 1, arLabel: 'المسمى الوظيفي', enLabel: 'Position Title', value: 4},
    { type: 1, arLabel: 'ضغط العمل', enLabel: 'Workload', value: 5},
    { type: 1, arLabel: 'ساعات العمل', enLabel: 'Working Hours', value: 6},
    { type: 1, arLabel: 'قوانين و أنظمة العمل', enLabel: 'Work Policies & Procedures', value: 7},
    { type: 1, arLabel: 'عدم توفر فرص التدريب', enLabel: 'Inadequate Training', value: 8},
    { type: 2, arLabel: 'العلاقة مع المدير المباشر', enLabel: 'Relation with Direct Manager ', value: 9},
    { type: 2, arLabel: 'العلاقة مع الزملاء', enLabel: 'Relationship with colleagues ', value: 10},
    { type: 2, arLabel: 'تقييم الأداء', enLabel: 'Performance Evaluation ', value: 11},
    { type: 2, arLabel: 'عدم التقدير', enLabel: 'Recognition', value: 12},
    { type: 3, arLabel: 'التقاعد', enLabel: 'Retirement', value: 13},
    { type: 3, arLabel: 'الزواج', enLabel: 'Marriage ', value: 14},
    { type: 3, arLabel: 'السفر', enLabel: 'Travelling ', value: 15},
    { type: 3, arLabel: 'الدراسة', enLabel: 'Continuing Education ', value: 16},
    { type: 3, arLabel: 'أسباب صحية', enLabel: 'Health Conditions ', value: 17},
    { type: 3, arLabel: 'العمل الخاص', enLabel: 'Self-employment ', value: 18},
    { type: 3, arLabel: 'أسباب عائلية', enLabel: 'Family Circumstances ', value: 19},
    { type: 4, arLabel: 'اخرى', enLabel: 'Others ', value: 20}
  ]

  constructor( private location: Location,  public translate: TranslateService, private router: ActivatedRoute,  private route: Router) {
    translate.use('en');
    
  }

  back() {
    this.location.back();
  }

  flipLanguage(value) {
    this.translate.use(value);
  }

  public user;
  public requestTask;
  public requester;
  public buttonDisabled = false;
  ngOnInit() {
    
   
  }

    

  selectedOption(value) {
    return this.selectedOptions.filter(x => x.type == value)
  }
  setValidations(val) {
    this.interviewForm.get(val).setValidators(Validators.required);
    this.interviewForm.get(val).updateValueAndValidity();
  }
  removeValidations(val) {
    this.interviewForm.get(val).clearValidators();
    this.interviewForm.get(val).updateValueAndValidity();
  }
  setStringValidator() {
    this.acceptedJobPlace.setValidators(Validators.required);
    this.acceptedJobReason.setValidators(Validators.required);
    this.acceptedJobPlace.updateValueAndValidity();
    this.acceptedJobReason.updateValueAndValidity();
  }


  clearValidators() {
    this.acceptedJobPlace.clearValidators();
    this.acceptedJobReason.clearValidators();
    this.acceptedJobPlace.updateValueAndValidity();
    this.acceptedJobReason.updateValueAndValidity();
  }

  resetOptions() {
    this.options.reset();
  }

  
  
}
