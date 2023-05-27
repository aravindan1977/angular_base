export class ReferenceType {
  id: number = 0;
  name: string = '';
  code: string = '';
  version: number = 0;
  createdby: number = 0;
  createdon: Date = new Date();
  modifiedby: number = 0;
  modifiedon: Date = new Date();
  attributes: ReferenceType.AttributesData = new ReferenceType.AttributesData();
  isactive: boolean = false;
  issuspended: boolean = false;
  parentid: number = 0;
  isfactory: boolean = false;
  notes: string = '';
}

export namespace ReferenceType {
  export class AttributesData {}
}

export class ReferenceTypeSelectReqDto {
  id: number = 0;
}

export class ReferenceTypeDeleteReqDto {
  id: number = 0;
  version: number = 0;
}
export enum ReferenceTypes {
  Interests = 'Interests',
  WhatMatters = 'WhatMatters',
  WhatWorks = 'WhatWorks',
  WhatDoesntWork = 'WhatDoesntWork',
  HopeAndDreams = 'HopeAndDreams',
  PersonalGoal = 'PersonalGoal',
  SocialGoal='SocialGoal',
  ProfessionalGoal='ProfessionalGoal',
  UnmetNeeds = 'UnmetNeeds',
  DescribeTheKid='DescribeTheKid',
}

