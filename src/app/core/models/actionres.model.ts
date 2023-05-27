export class ActionRes<T> {
  item: T | null = null;
}
export enum ErrorCodes {
  BadRequest,
  DeleteRequestFailed,
  FileNotFound,
  UserNotFound,
  EmailAlreadyExists,
  InvalidSession,
  InvalidCredentials,
  UserNotApproved,
  SessionExpired,
  SystemNotApproved,
  AccessDenied,
  ReferenceValueAlreadyExist
}
