export class ReferenceValue {
  id: number = 0;
  typeid: number = 0;
  name: string = '';
  typename: string = '';
  code: string = this.typename;
  version: number = 0;
  createdby: number = 0;
  createdon: Date = new Date();
  modifiedby: number = 0;
  modifiedon: Date = new Date();
  attributes: ReferenceValue.AttributesData =
    new ReferenceValue.AttributesData();
  isactive: boolean = false;
  issuspended: boolean = false;
  parentid: number = 0;
  isfactory: boolean = false;
  notes: string = ''; 
}

export namespace ReferenceValue {
  export class AttributesData {}
}

export class ReferenceValueSelectReqDto {
  id: number = 0;
  typename: string = '';
  name: string = '';
  typecode: string = this.typename;
}

export class ReferenceValueDeleteReqDto {
  id: number = 0;
  version: number = 0;
}

export class DesignAttributeValueBulkImportReqResDto {
  name: string = '';
  message: string = '';
  id: number = 0;
  typeid: number = 0;
  typename: string = '';
}
