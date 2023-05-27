export class Files {
  id: number = 0
description=""
type: string = ""
version: number = 0
createdby: number = 0
createdon: Date = new Date()
modifiedby: number = 0
modifiedon: Date = new Date()
attributes: Files.AttributesData = new Files.AttributesData()
isactive: boolean = false
issuspended: boolean = false
parentid: number = 0
isfactory: boolean = false
notes: string = ""
}

export namespace Files {
  
                export class AttributesData
                {
                    
                }  
                
}

export class FilesSelectReqDto {
  id: number = 0;
}

export class FilesDeleteReqDto {
  id: number = 0;
  version: number = 0;
}