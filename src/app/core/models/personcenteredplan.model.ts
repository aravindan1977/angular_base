import { ReferenceValue } from './referencevalue.model';

export class PersonCenteredPlan {
  id: number = 0;
  personaldata: PersonCenteredPlan.PersonaldataData =
    new PersonCenteredPlan.PersonaldataData();
  letteroflove: string = '';
  circleofsupport: PersonCenteredPlan.CircleofsupportData =
    new PersonCenteredPlan.CircleofsupportData();

  attributes: PersonCenteredPlan.Attributes = new PersonCenteredPlan.Attributes()


  pictures: Array<PersonCenteredPlan.PicturesData> =
    [];
  interests: PersonCenteredPlan.InterestsData =
    new PersonCenteredPlan.InterestsData();

  describethekid: PersonCenteredPlan.DescribetheKid = new PersonCenteredPlan.DescribetheKid();

  whatmatters: PersonCenteredPlan.WhatmattersData =
    new PersonCenteredPlan.WhatmattersData();
  whatworks: PersonCenteredPlan.WhatworksData =
    new PersonCenteredPlan.WhatworksData();
  whatdoesntwork: PersonCenteredPlan.WhatdoesntworkData =
    new PersonCenteredPlan.WhatdoesntworkData();
  hopeanddreams: PersonCenteredPlan.HopeanddreamsData =
    new PersonCenteredPlan.HopeanddreamsData();

  personalgoal: PersonCenteredPlan.PersonalGoalData = new PersonCenteredPlan.PersonalGoalData();
  socialgoal: PersonCenteredPlan.SocialGoalData = new PersonCenteredPlan.SocialGoalData();
  professionalgoal: PersonCenteredPlan.ProfessionalGoalData = new PersonCenteredPlan.ProfessionalGoalData();

  unmetneeds: PersonCenteredPlan.UnmetneedsData =
    new PersonCenteredPlan.UnmetneedsData();
  summary: PersonCenteredPlan.SummaryData =
    new PersonCenteredPlan.SummaryData();
  version: number = 0;
  createdby: number = 0;
  createdon: Date = new Date();
  modifiedby: number = 0;
  modifiedon: Date = new Date();

  isactive: boolean = false;
  issuspended: boolean = false;
  parentid: number = 0;
  isfactory: boolean = false;
  notes: string = '';
  pdfcounts: string = '';
  language: PersonCenteredPlan.LanguagesData = new PersonCenteredPlan.LanguagesData();
  //pdfcounts: PersonCenteredPlan.PdfcountData=new PersonCenteredPlan.PdfcountData();

}

export namespace PersonCenteredPlan {
  export class PersonaldataData {
    firstname: string = '';
    lastname: string = '';
    dob: Date = new Date();
    gender: string = '';
    UCI: string = '';
    mothername: string = '';
    fathername: string = '';
    parentsstatus: string = '';
    address: string = '';
    State: string = '';
    zip_code: string = '';
    mobilenumber: string = '';
    alternatemobilenumber: String = '';
    email: string = '';
    diagnosis: string = '';
    zodiacsign: string = '';
    sendmessagemobilenumber: boolean = true;
    sendmessagealternatenumber: boolean = true;
  }




  export class CircleofsupportData {
    circleofintimacy: Array<{ Name: string, relation: string }> = [];
    circleoffriendship: Array<{ Name: string, relation: string }> = [];
    circleofparticipation: Array<{ Name: string, relation: string }> = [];
    circleofexchange: Array<{ Name: string, relation: string }> = [];
  }

  // export class PicturesData {
  //   pictures: Array<number> = [];
  // }  
  export class PicturesData {
    id: number = 0;
    description: string = "";
    position: string = "";
  }

  export class Attributes {
    pdfheadercolor:String="";
    pdfpoints:string="";
    pdfimageboarder:String="" ; 
  }


  export class LanguagesData {
    languagescodes: string = '';
    languages_region: string = '';
  }





  export class InterestsData {
    valueslist: Array<ReferenceValue> = new Array<ReferenceValue>();
  }

  export class WhatmattersData {
    valueslist: Array<ReferenceValue> = new Array<ReferenceValue>();
  }
  export class DescribetheKid {
    valueslist: Array<ReferenceValue> = new Array<ReferenceValue>();
  }

  export class WhatworksData {
    valueslist: Array<ReferenceValue> = new Array<ReferenceValue>();
  }

  export class WhatdoesntworkData {
    valueslist: Array<ReferenceValue> = new Array<ReferenceValue>();
  }

  export class HopeanddreamsData {
    valueslist: Array<ReferenceValue> = new Array<ReferenceValue>();
  }

  export class PersonalGoalData {
    valueslist: Array<ReferenceValue> = new Array<ReferenceValue>();
    personalaction: string = '';
  }

  export class SocialGoalData {
    valueslist: Array<ReferenceValue> = new Array<ReferenceValue>();
    socialaction: string = '';
  }
  export class ProfessionalGoalData {
    valueslist: Array<ReferenceValue> = new Array<ReferenceValue>();
    professionalaction: string = '';
  }

  export class UnmetneedsData {
    valueslist: Array<ReferenceValue> = new Array<ReferenceValue>();
  }


  export class SummaryData {
    summary: string = '';
  }

}

export class PersonCenteredPlanSelectReqDto {
  id: number = 0;
}

export class PersonCenteredPlanDeleteReqDto {
  id: number = 0;
  version: number = 0;
}
