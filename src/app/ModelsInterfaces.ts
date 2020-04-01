
export interface RequestsTasks {
  id: number,
  requestId: number,
  taskId: number,
  taskStatus: number,
  receivedDate: Date,
  actionByEmployeeId: number,

  request: Requests,
  task: Tasks,
  taskStatusNavigation: TaskStatus,

  accountingTasks: AccountingTasks[],
  directManagerTasks: DirectManagerTasks[],
  hrtasks: Hrtasks[],
  ittasks: Ittasks[],
  exitInterviewTask: any,
  logisticsTasks: LogisticsTasks[],
  requestsTasksAttachments: RequestsTasksAttachments[]
}

export interface Tasks {
  id: number,
  taskName: string,
  ownerEmployeeId: number,

  requestsTasks: RequestsTasks[],
  tasksAssignee: TasksAssignee[]
}

export interface Requests{
id : number,
employeeNo : number,
resignationDate : Date,
lastWorkingDate : Date,
isVoluntary : boolean,
notes : string,
status : number,
statusReasone : number,
createdDate : Date,
createdBy: number,
eligibleToRehire: boolean,
satusNavigation : RequestStatus,
statusReasoneNavigation :RequestsStatusReason,

  requestsAttachments: RequestsAttachments[],
  requestsTasks: RequestsTasks[],
}


export interface AccountingTasks {
  id: number,
  requestTaskId: number,
  isStsclearanceDone: boolean,
  isIncomeTaxDone: boolean,
  isEmployeeAllEntitlementsDone: boolean,
  createdBy: number,
  createdOn: Date,

  requestTask: RequestsTasks
}

export interface DirectManagerTasks {
  id: number,
  requestTaskId: number,
  isEmailForward: boolean,
  emailForwardTo: string,
  evaluationScore: string,
  handoverTo: number,
  comments: string,
  createdBy: number
  createdOn: Date,

  requestTask: RequestsTasks
}

export interface Hrtasks {
  id: number,
  requestTaskId: number,
  trainingCommitment: number,
  isOtherEntitlement: boolean,
  otherEntitlementNote: string,
  needsPersonalExitInterview: boolean,
  interviewDate: Date,
  attendanceDeduction: boolean,
  attendanceDeductionHours: boolean,
  unsettledTravel: boolean,
  unsettledTravelNote: string,
  isBankCommitment: boolean,
  vacationBalance: boolean,
  vacationBalanceDays: number,
  isInsuranceCardsReturned: boolean,
  lastPaidWorkingDay: Date,
  comments: string,
  createdBy: number,
  createdOn: Date,
  totalTravelAmount: number,
  requestTask: RequestsTasks,
}


export interface Ittasks {
  id: number,
  requestTaskId: number,
  allTasksAreDone: boolean,
  comments: string,
  createdBy: number,
  createdOn: Date,

  requestTask: RequestsTasks
}

export interface LogisticsTasks{
id : number,
requestTaskId : number,
hasZainLine : boolean,
isZainSettlementDone : boolean,
isStationaryTaken : boolean,
isStationaryReturned : boolean,
isLaptopReturned : boolean,
laptopPurchaseAmount : number,
isOtherAccessoriesTaken : boolean,
isOtherAccessoriesReturned : boolean,
isOtherDeductions : boolean,
otherDeductionsAmount : number,
comments : string,
createdBy : number,
createdOn :Date,
requestTask : RequestsTasks
}


export interface RequestsAttachments {
  id: number,
  requestId: number,
  fileName: string,

  request: Requests
}

export interface RequestsTasksAttachments {
  id: number,
  RequestTaskId: number,
  fileName: string,

  requestTask: RequestsTasks
}


export interface RequestsStatusReason {
  id: number,
  reason: string,

  requests: Requests[]
}


export interface TasksAssignee {
  id: number,
  taskId: number,
  employeeId: number,

  task: Tasks,
}

export interface TaskStatus {
  id: number,
  status: string,

  requestsTasks: RequestsTasks[]
}


export interface RequestStatus {
  id: number,
  status: string,

  requests: Requests[]
}

export interface ExitInterviewAnswers
{
id : number,
createdBy : number,
createdOn : Date,
questionId : number,
value : string
}

export interface ExitInterviewGroups
{
id : number,
groupNameEn : string,
groupNameAr : string
}

export interface ExitInterviewQuestions
{
id : number,
questionTitleEn: string,
questionTitleAr: string,
controlType : number,
controlGroup: number,
controlGroupNavigation: ExitInterviewGroups,
exitInterviewControlTypes : ExitInterviewControlTypes,
exitInterviewAnswers: ExitInterviewAnswers[]
}
 

export interface ExitInterviewControlTypes {
    id: number,
    type: string,

    exitInterviewQuestions: ExitInterviewQuestions[]
}
